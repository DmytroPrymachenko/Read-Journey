import { useDispatch, useSelector } from "react-redux";
import { selectBookInfo } from "../../store/books/selectors";
import { useParams } from "react-router-dom";
import { fetchBookInfo } from "../../store/books/operations";
import { useEffect } from "react";

const ReadingPage = () => {
  const { id } = useParams();
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
    return <div>Loading...</div>;
  }
  return <div>{bookInfo.title}</div>;
};

export default ReadingPage;
