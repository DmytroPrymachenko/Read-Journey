import { useSelector } from "react-redux";
import { selectRecommendedBooks } from "../../store/books/selectors";
import { ContentWraper } from "../Filters/Filters.Styled";

const RecommendedList = () => {
  const booksList = useSelector(selectRecommendedBooks);
  console.log(booksList);
  return (
    <ContentWraper>
      <div>
        <h1>Recommended</h1>
        <div>
          <button>Попередня</button>
          <button>Наступна</button>
        </div>
        <div>
          <ul>
            {booksList.map((book) => (
              <li key={book._id}>
                <img src={book.imageUrl} alt={book.title} />
                <div>
                  <span>{book.title}</span>
                  <span>{book.author}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentWraper>
  );
};

export default RecommendedList;
