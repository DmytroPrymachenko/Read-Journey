import { useSelector } from "react-redux";
import { ContentWraper } from "../Filter/Filter.Styled";
import { selectBookInfo } from "../../store/books/selectors";

const ReadingBook = () => {
  const bookInfo = useSelector(selectBookInfo);
  return (
    <ContentWraper>
      <h1>My reading</h1>
      <>
        <div>
          <img src={bookInfo.imageUrl} alt={bookInfo.title} />
          <>
            <span>{bookInfo.title}</span>
            <span>{bookInfo.author}</span>
          </>
          <button>Start</button>
        </div>
      </>
    </ContentWraper>
  );
};

export default ReadingBook;
