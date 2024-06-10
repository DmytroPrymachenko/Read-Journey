import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addBookFromRecommendations,
  fetchUserBooks,
} from "../../store/books/operations";
import { selectUserBooks } from "../../store/books/selectors";

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

  return (
    <>
      <>
        {isModalItem && (
          <>
            <div onClick={closeModal}>
              <div>
                <img src={book.imageUrl} alt={book.title} />
              </div>
              <button onClick={handleAddBook}>Додати в улюблені</button>
            </div>
          </>
        )}
      </>
      <li key={book._id} onClick={openModal}>
        <img src={book.imageUrl} alt={book.title} />
        <div>
          <span>{book.title}</span>
          <span>{book.author}</span>
        </div>
      </li>
    </>
  );
};

export default RecommendedItem;
