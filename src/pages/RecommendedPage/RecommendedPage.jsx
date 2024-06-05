import { useEffect, useState } from "react";
import Filters from "../../components/Filters/Filters";
import RecommendedList from "../../components/RecommendedList/RecommendedList";
import { useDispatch, useSelector } from "react-redux";
import { recommendedBooksThunk } from "../../store/books/operations";
import { selectRecommended } from "../../store/books/selectors";
import { setRecommendData } from "../../store/recommend/recommendSlise";

const RecommendedPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const recommendedBooks = useSelector(selectRecommended);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const getLimit = () => {
      if (windowWidth <= 767) return 2;
      if (windowWidth >= 768 && windowWidth <= 1279) return 8;
      return 10;
    };

    let limit = getLimit();

    const currentData = recommendedBooks || {};

    dispatch(setRecommendData({ ...currentData, limit }));
  }, [dispatch, windowWidth, recommendedBooks]);

  useEffect(() => {
    if (recommendedBooks) {
      dispatch(
        recommendedBooksThunk({
          title: recommendedBooks.title,
          author: recommendedBooks.author,
          page: recommendedBooks.page,
          limit: recommendedBooks.limit,
        })
      );
    }
  }, [dispatch, recommendedBooks]);

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
