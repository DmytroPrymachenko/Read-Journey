import { useEffect, useState } from "react";
import Filters from "../../components/Filters/Filters";
import RecommendedList from "../../components/RecommendedList/RecommendedList";
import { useDispatch } from "react-redux";
import { recommendedBooksThunk } from "../../store/books/operations";

const RecommendedPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [changes, setChanges] = useState(false);
  console.log(changes);
  // тест

  // тест

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getLimit = () => {
    if (windowWidth <= 767) return 2;
    if (windowWidth >= 768 && windowWidth <= 1279) return 8;
    return 10;
  };
  console.log(getLimit());

  useEffect(() => {
    const recommendedData = JSON.parse(localStorage.getItem("recommended"));

    const limit = getLimit();

    const updatedData = {
      ...recommendedData,
      limit,
    };

    localStorage.setItem("recommended", JSON.stringify(updatedData));
    if (limit !== recommendedData.limit) {
      setChanges(!changes);
    }
  });

  useEffect(() => {
    const recommendedData = JSON.parse(localStorage.getItem("recommended"));
    if (recommendedData) {
      dispatch(
        recommendedBooksThunk({
          title: recommendedData.title,
          author: recommendedData.author,
          page: recommendedData.page,
          limit: recommendedData.limit,
        })
      );
    }
  }, [dispatch, changes]);

  return (
    <>
      <>
        <Filters setChanges={setChanges} changes={changes} />
      </>
      <>
        <RecommendedList setChanges={setChanges} changes={changes} />
      </>
    </>
  );
};

export default RecommendedPage;
