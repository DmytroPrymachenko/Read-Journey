import { useSelector } from "react-redux";
import { selectBookInfo } from "../../store/books/selectors";
import Star from "../../images/Star";
import { NotStartedComponent } from "./ReadingStatistics.Styled";
import { useState } from "react";

const ReadingStatistics = () => {
  const [activeSection, setActiveSection] = useState("Diary");
  const bookInfo = useSelector(selectBookInfo);
  console.log(bookInfo);

  return (
    <div>
      <>
        <NotStartedComponent>
          <div>
            <h1>Progress</h1>
            <span>
              Here you will see when and how much you read. To record, click on
              the red button above.
            </span>
          </div>
          <div>
            <Star />
          </div>
        </NotStartedComponent>
      </>
      <>
        <div>
          <h1>{activeSection}</h1>
          <div>
            <button onClick={() => setActiveSection("Diary")}>Diary</button>
            <button onClick={() => setActiveSection("Statistics")}>
              Statistics
            </button>
          </div>
        </div>
        <>
          {activeSection === "Diary" && <div>Component Diary</div>}
          {activeSection === "Statistics" && <div>Component Statistics</div>}
        </>
      </>
    </div>
  );
};

export default ReadingStatistics;
