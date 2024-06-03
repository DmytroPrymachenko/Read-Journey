import { useForm } from "react-hook-form";
import {
  ContentWraper,
  FiltersButton,
  FiltersContentWraper,
  FiltersFormWraper,
  FiltersInput,
  FiltersInputSpan,
  FiltersInputWraper,
  FiltersSpan,
  WorkoutContainer,
  WorkoutItemContainer,
  WorkoutItemH1,
  WorkoutItemP,
  WorkoutItemSpan,
  WorkoutLink,
  WorkoutLinkWraper,
  WorkoutNamredWraper,
} from "./Filters.Styled";

import NextSVG from "../../images/NextSVG";
import { useEffect } from "react";

const Filters = ({ setChanges, changes }) => {
  // const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    const recommendedData = JSON.parse(localStorage.getItem("recommended"));
    if (recommendedData && recommendedData.title) {
      setValue("title", recommendedData.title);
    }
    if (recommendedData && recommendedData.author) {
      setValue("author", recommendedData.author);
    }
  }, [setValue]);

  const handleBook = ({ title, author }) => {
    const recommendedData = JSON.parse(localStorage.getItem("recommended"));
    const updatedData = {
      ...recommendedData,
      title,
      author,
    };

    localStorage.setItem("recommended", JSON.stringify(updatedData));

    if (title !== recommendedData.title || author !== recommendedData.author) {
      setChanges(!changes);
    }
  };
  return (
    <ContentWraper>
      <FiltersContentWraper>
        <form onSubmit={handleSubmit(handleBook)}>
          <FiltersFormWraper>
            <FiltersSpan>Filters:</FiltersSpan>
            <FiltersInputWraper>
              <FiltersInput
                {...register("title")}
                type="text"
                id="title"
                placeholder="Enter text"
              />
              <FiltersInputSpan>Book title:</FiltersInputSpan>
            </FiltersInputWraper>
            <FiltersInputWraper>
              <FiltersInput
                {...register("author")}
                type="text"
                id="autor"
                placeholder="Enter text"
              />
              <FiltersInputSpan>The author:</FiltersInputSpan>
            </FiltersInputWraper>
          </FiltersFormWraper>

          <FiltersButton>To apply</FiltersButton>
        </form>
        <WorkoutContainer>
          <WorkoutItemH1>Start your workout</WorkoutItemH1>
          <WorkoutItemContainer>
            <WorkoutNamredWraper>1</WorkoutNamredWraper>
            <WorkoutItemSpan>
              Create a personal library:{" "}
              <WorkoutItemP>
                add the books you intend to read to it.
              </WorkoutItemP>
            </WorkoutItemSpan>
          </WorkoutItemContainer>
          <WorkoutItemContainer>
            <WorkoutNamredWraper>2</WorkoutNamredWraper>

            <WorkoutItemSpan>
              Create your first workout:{" "}
              <WorkoutItemP>
                define a goal, choose a period, start training.
              </WorkoutItemP>
            </WorkoutItemSpan>
          </WorkoutItemContainer>
          <WorkoutLinkWraper>
            <WorkoutLink
              to="/library"
              aria-label="return to the library page"
              style={{ textDecoration: "none" }}
            >
              My library
            </WorkoutLink>
            <WorkoutLink
              to="/library"
              aria-label="return to the library page"
              style={{ textDecoration: "none" }}
            >
              <NextSVG />
            </WorkoutLink>
          </WorkoutLinkWraper>
        </WorkoutContainer>
      </FiltersContentWraper>
    </ContentWraper>
  );
};

export default Filters;
