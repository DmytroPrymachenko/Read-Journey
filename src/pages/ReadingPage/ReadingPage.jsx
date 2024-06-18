import { useDispatch, useSelector } from "react-redux";
import { selectBookInfo } from "../../store/books/selectors";
import { useParams } from "react-router-dom";
import { fetchBookInfo } from "../../store/books/operations";
import { useEffect } from "react";
import Progress from "../../components/Progress/Progress";
import ReadingBook from "../../components/ReadingBook/ReadingBook";

// import styled from "styled-components";

// const Test = styled.div``;

const ReadingPage = () => {
  const { id } = useParams();
  console.log(useParams());
  const dispatch = useDispatch();
  const bookInfo = useSelector(selectBookInfo);

  useEffect(() => {
    if (id) {
      console.log(id);
      dispatch(fetchBookInfo(id));
    }
  }, [id, dispatch]);

  console.log("bookInfo", bookInfo);

  if (!bookInfo) {
    return (
      <>
        <div>Loader</div>
      </>
    );
  }
  return (
    <>
      <>
        <Progress />
      </>
      <>
        <ReadingBook />
      </>
    </>
  );
};

export default ReadingPage;
