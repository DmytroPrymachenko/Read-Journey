import { useSelector } from "react-redux";
import {
  selectRecommendedBooks,
  selectTotalBooks,
} from "../../store/books/selectors";
import { ContentWraper } from "../Filters/Filters.Styled";
import RecommendedItem from "../RecommendedItem/RecommendedItem";
import { nanoid } from "nanoid";
import {
  NextButton,
  PrevButton,
  RecommendedListUl,
} from "./RecommendedList.Styled";

const RecommendedList = ({
  handlePrevPage,
  handleNextPage,
  isFirstPage,
  isLastPage,
}) => {
  const booksList = useSelector(selectRecommendedBooks);

  return (
    <ContentWraper>
      <div>
        <h1>Recommended</h1>
        <div>
          <PrevButton onClick={handlePrevPage}>
            {isFirstPage ? "Початкова" : "Попередня"}
          </PrevButton>
          <NextButton onClick={handleNextPage}>
            {isLastPage ? "Остання" : "Наступна"}
          </NextButton>
        </div>
        <>
          <RecommendedListUl>
            {booksList.map((book) => (
              <RecommendedItem book={book} key={nanoid()} />
            ))}
          </RecommendedListUl>
        </>
      </div>
    </ContentWraper>
  );
};

export default RecommendedList;
