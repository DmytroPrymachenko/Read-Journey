import { useDispatch } from "react-redux";
import { LibraryItemImg } from "./LibraryItem.Styled";
import { deleteUserBook } from "../../store/books/operations";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LibraryItem = ({ book }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteBook = (id) => {
    dispatch(deleteUserBook(id))
      .unwrap()
      .then(() => {
        toast.success("Book deleted successfully!");
      })
      .catch((error) => {
        toast.error("Error deleting book: " + error.message);
      });
  };

  const handleFetchBookInfo = (id) => {
    navigate(`/reading/${id}`);
  };

  return (
    <li>
      <LibraryItemImg src={book.imageUrl} alt={book.title} />
      <div>
        <div>
          <span>{book.title}</span>
          <span>{book.author}</span>
        </div>
        <button onClick={() => handleDeleteBook(book._id)}>Delete</button>
        <button onClick={() => handleFetchBookInfo(book._id)}>
          Go to the selected book
        </button>
      </div>
    </li>
  );
};

export default LibraryItem;
