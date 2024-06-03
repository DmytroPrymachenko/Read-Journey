import Filters from "../../components/Filters/Filters";
import RecommendedList from "../../components/RecommendedList/RecommendedList";

const RecommendedPage = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const totalBooks = useSelector(selectTotalBooks);
  // const handlePrevPage = () => {
  //   if (currentPage > 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // };

  // const handleNextPage = () => {
  //   if (currentPage < totalBooks) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const isFirstPage = currentPage === 1;

  // const isLastPage = currentPage === totalBooks;

  return (
    <>
      <>
        <Filters />
      </>
      <>
        <RecommendedList />
      </>
    </>
  );
};

export default RecommendedPage;
