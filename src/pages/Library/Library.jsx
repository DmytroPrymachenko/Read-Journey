import { useDispatch, useSelector } from "react-redux";
import { selectUserBooks } from "../../store/books/selectors";
import { useEffect } from "react";
import { fetchUserBooks } from "../../store/books/operations";

const Library = () => {
  const dispatch = useDispatch();
  const userBooks = useSelector(selectUserBooks);
  console.log(userBooks);
  useEffect(() => {
    dispatch(fetchUserBooks({ status: "unread" }));
  }, [dispatch]);

  return <div>Library</div>;
};

export default Library;
