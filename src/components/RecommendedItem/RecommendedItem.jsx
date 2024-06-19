import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addBookFromRecommendations,
  fetchUserBooks,
} from "../../store/books/operations";
import { selectUserBooks } from "../../store/books/selectors";
import {
  RecommendedItemImg,
  RecommendedItemImgWraper,
  RecommendedItemTitlewraper,
} from "./RecommendedItem.Styled";
import RecommendedModalItem from "./RecommendedModalItem";

const RecommendedItem = ({ book }) => {
  const [isModalItem, setIsModalItem] = useState(false);
  const dispatch = useDispatch();
  const userBooks = useSelector(selectUserBooks);
  console.log("Test Books", userBooks);

  const openModal = () => {
    setIsModalItem(true);
  };

  const closeModal = () => {
    setIsModalItem(false);
  };

  const handleAddBook = () => {
    const isBookExists = userBooks.some(
      (userBook) => userBook.title === book.title
    );
    if (isBookExists) {
      toast.error("This book is already in your library!");
      return;
    }

    dispatch(addBookFromRecommendations(book._id))
      .unwrap()
      .then((data) => {
        toast.success("Book added successfully!");
        console.log("Book added:", data);
        dispatch(fetchUserBooks());
      })
      .catch((error) => {
        toast.error("Error adding book: " + error.message);
        console.error("Error adding book:", error);
      });
  };

  const capitalizeWord = (word) => {
    if (word.length === 0) return "";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  const transformTitle = (title) => {
    const words = title.split(" ");
    const transformedWords = words.map((word) =>
      word.charAt(0) === word.charAt(0).toUpperCase()
        ? capitalizeWord(word)
        : word
    );
    return transformedWords.join(" ");
  };

  const truncatedTitle =
    book.title.length > 23
      ? `${transformTitle(book.title.substring(0, 20))}...`
      : transformTitle(book.title);
  return (
    <>
      {isModalItem && (
        <RecommendedModalItem
          closeModal={closeModal}
          book={book}
          handleAddBook={handleAddBook}
        />
      )}
      <li key={book._id} onClick={openModal}>
        <RecommendedItemImgWraper>
          <RecommendedItemImg src={book.imageUrl} alt={book.title} />
        </RecommendedItemImgWraper>
        <RecommendedItemTitlewraper>
          <span>{truncatedTitle}</span>
          <span>{book.author}</span>
        </RecommendedItemTitlewraper>
      </li>
    </>
  );
};

export default RecommendedItem;
