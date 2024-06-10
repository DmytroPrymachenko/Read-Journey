import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  finishReadingBook,
  startReadingBook,
} from "../../store/books/operations";
import {
  FiltersButton,
  FiltersFormWraper,
  FiltersInput,
  FiltersInputSpan,
  FiltersInputWraper,
  FiltersSpan,
} from "../Filter/Filter.Styled";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { selectBookInfo } from "../../store/books/selectors";

const ReadingForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });
  const bookInfo = useSelector(selectBookInfo);
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    if (bookInfo && bookInfo.progress.length > 0) {
      const lastReadPage =
        bookInfo.progress[bookInfo.progress.length - 1].finishPage;
      setValue("page", lastReadPage);
    } else {
      setValue("page", 1);
    }
  }, [bookInfo, setValue]);

  const handleReading = ({ page }) => {
    if (isReading) {
      dispatch(finishReadingBook({ id, page }))
        .unwrap()
        .then(() => {
          toast.success("Finished reading the book!");
          setIsReading(false);
        })
        .catch((error) => {
          toast.error("Error finishing the reading: " + error.message);
        });
    } else {
      dispatch(startReadingBook({ id, page }))
        .unwrap()
        .then(() => {
          toast.success("Started reading the book!");
          setIsReading(true);
        })
        .catch((error) => {
          toast.error("Error starting to read the book: " + error.message);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleReading)}>
      <FiltersFormWraper>
        <FiltersSpan>{isReading ? "Stop page:" : "Start page:"}</FiltersSpan>
        <FiltersInputWraper>
          <FiltersInput
            {...register("page")}
            type="text"
            id="page"
            placeholder="Enter page number"
          />
          <FiltersInputSpan>Page number:</FiltersInputSpan>
        </FiltersInputWraper>
      </FiltersFormWraper>

      <FiltersButton type="submit">
        {isReading ? "To stop" : "To start"}
      </FiltersButton>
    </form>
  );
};

export default ReadingForm;
