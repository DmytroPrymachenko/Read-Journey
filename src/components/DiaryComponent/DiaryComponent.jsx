import { useDispatch, useSelector } from "react-redux";
import { selectBookProgress } from "../../store/books/selectors";
import { DiaryComponentUl, ProgressWraper } from "./DiaryComponent.Styled";
import DiaryItem from "./DiaryItem/DiaryItem";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { deleteReadingRecord } from "../../store/books/operations";
import { useParams } from "react-router-dom";

const DiaryComponent = () => {
  const bookProgress = useSelector(selectBookProgress);
  console.log("bookProgress", bookProgress);
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleDeleteRecord = async (readingId) => {
    try {
      await dispatch(deleteReadingRecord({ bookId: id, readingId })).unwrap();
      toast.success("Reading record deleted successfully!");
    } catch (error) {
      toast.error("Error deleting reading record: " + error.message);
    }
  };

  return (
    <>
      <ProgressWraper>
        <>
          <DiaryComponentUl>
            {[...bookProgress].reverse().map((progress) => (
              <DiaryItem
                key={progress._id}
                progress={progress}
                handleDeleteRecord={() => handleDeleteRecord(progress._id)}
              />
            ))}
          </DiaryComponentUl>
        </>
      </ProgressWraper>
    </>
  );
};

export default DiaryComponent;
