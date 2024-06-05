import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addBookFromRecommendations } from "../../store/books/operations";

const RecommendedItem = ({ book }) => {
  const [isModalItem, setIsModalItem] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalItem(true);
  };

  const closeModal = () => {
    setIsModalItem(false);
  };

  const handleAddBook = () => {
    dispatch(addBookFromRecommendations(book._id))
      .unwrap()
      .then((data) => {
        toast.success("Book added successfully!");
        console.log("Book added:", data);
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
