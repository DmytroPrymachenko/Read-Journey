import { useSelector } from "react-redux";
import { selectRecommendedBooks } from "../../store/books/selectors";
import { ContentWraper } from "../Filters/Filters.Styled";
import { useEffect, useState } from "react";

const RecommendedList = ({ setChanges, changes }) => {
  const booksList = useSelector(selectRecommendedBooks);
  const [page, setPage] = useState(1);
  console.log(booksList);
  const prevPage = () => {
    setPage((prevPage) => prevPage - 1);
    setChanges(!changes);
  };
  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
    setChanges(!changes);
  };

  useEffect(() => {
    const recommendedData = JSON.parse(localStorage.getItem("recommended"));

    const updatedData = {
      ...recommendedData,
      page,
    };

    localStorage.setItem("recommended", JSON.stringify(updatedData));
  }, [page]);

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
