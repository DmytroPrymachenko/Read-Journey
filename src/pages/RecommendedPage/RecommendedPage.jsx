import { useSelector } from "react-redux";
import Filters from "../../components/Filters/Filters";
import { RecommendedContainer } from "../../components/Header/Header.Styled";
import RecommendedList from "../../components/RecommendedList/RecommendedList";
import { useState } from "react";
import { selectTotalBooks } from "../../store/books/selectors";
const RecommendedPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalBooks = useSelector(selectTotalBooks);
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalBooks) {
      setCurrentPage(currentPage + 1);
    }
  };
  console.log("Test", currentPage);
  const isFirstPage = currentPage === 1;

  const isLastPage = currentPage === totalBooks;

  return (
    <RecommendedContainer>
      <Filters currentPage={currentPage} />
      <RecommendedList
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        currentPage={currentPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
      />
    </RecommendedContainer>
  );
};

export default RecommendedPage;
