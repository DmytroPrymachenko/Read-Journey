import { useSelector } from "react-redux";
import { selectBookProgress } from "../../store/books/selectors";
import { DiaryComponentUl, ProgressWraper } from "./DiaryComponent.Styled";
import DiaryItem from "./DiaryItem/DiaryItem";

const DiaryComponent = () => {
  const bookProgress = useSelector(selectBookProgress);
  console.log("bookProgress", bookProgress);
  return (
    <>
      <ProgressWraper>
        <>
          <DiaryComponentUl>
            {[...bookProgress].reverse().map((progress) => (
              <DiaryItem key={progress._id} progress={progress} />
            ))}
          </DiaryComponentUl>
        </>
      </ProgressWraper>
    </>
  );
};

export default DiaryComponent;
