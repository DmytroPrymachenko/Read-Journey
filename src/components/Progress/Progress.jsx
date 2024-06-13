import ReadingForm from "../ReadingForm/ReadingForm";
import ReadingStatistics from "../ReadingStatistics/ReadingStatistics";
import { ProgressWraper } from "./ProgressStyled";

// import styled from "styled-components";

// const Test = styled.div``;

const Progress = () => {
  return (
    <ProgressWraper>
      <>
        <ReadingForm />
      </>
      <>
        <ReadingStatistics />
      </>
    </ProgressWraper>
  );
};

export default Progress;
