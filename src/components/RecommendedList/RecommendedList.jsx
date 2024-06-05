import { useDispatch, useSelector } from "react-redux";
import {
  selectRecommended,
  selectRecommendedBooks,
} from "../../store/books/selectors";
import { ContentWraper } from "../Filters/Filters.Styled";
import { useState } from "react";
import { setRecommendData } from "../../store/recommend/recommendSlise";

const RecommendedList = () => {
  const dispatch = useDispatch();
  const recommendedBooks = useSelector(selectRecommended);
  const booksList = useSelector(selectRecommendedBooks);

  const [page, setPage] = useState(recommendedBooks.page || 1);

  const changePage = (newPage) => {
    setPage(newPage);
    dispatch(setRecommendData({ ...recommendedBooks, page: newPage }));
  };

  const prevPage = () => {
    const newPage = page - 1;
    changePage(newPage);
  };

  const nextPage = () => {
    const newPage = page + 1;
    changePage(newPage);
  };

  return (
    <ContentWraper>
      <div>
        <h1>Recommended</h1>
        <div>
          <button onClick={prevPage}>Попередня</button>
          <button onClick={nextPage}>Наступна</button>
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
