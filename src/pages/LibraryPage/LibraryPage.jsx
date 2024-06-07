import { useDispatch, useSelector } from "react-redux";
import { selectUserBooks } from "../../store/books/selectors";
import { useEffect } from "react";
import { fetchUserBooks } from "../../store/books/operations";
import LibraryList from "../../components/LibraryList/LibraryList";

const LibraryPage = () => {
  const dispatch = useDispatch();
  const userBooks = useSelector(selectUserBooks);
  console.log(userBooks);
  useEffect(() => {
    dispatch(fetchUserBooks());
  }, [dispatch]);

  return (
    <>
      <></>
      <>
        <LibraryList />
      </>
    </>
  );
};

export default LibraryPage;
