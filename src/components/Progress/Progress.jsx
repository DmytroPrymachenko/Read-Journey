import { useSelector } from "react-redux";
import { selectBookInfo } from "../../store/books/selectors";
import ReadingForm from "../ReadingForm/ReadingForm";
import ReadingStatistics from "../ReadingStatistics/ReadingStatistics";

// import styled from "styled-components";

// const Test = styled.div``;

const Progress = () => {
  return (
    <>
      <>
        <ReadingForm />
      </>
      <>
        <ReadingStatistics />
      </>
    </>
  );
};

export default Progress;