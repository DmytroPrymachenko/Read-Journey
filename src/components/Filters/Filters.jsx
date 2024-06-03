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

import { useDispatch } from "react-redux";
import { recommendedBooksThunk } from "../../store/books/operations";

import NextSVG from "../../images/NextSVG";
import { useEffect, useState } from "react";

const Filters = ({ currentPage }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });
  console.log(currentPage);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getLimit = () => {
    if (windowWidth <= 767) return 2;
    if (windowWidth >= 768 && windowWidth <= 1279) return 8;
    return 10;
  };
  console.log(getLimit());

  useEffect(() => {}, [currentPage]);

  const handleBook = ({ title, autor }) => {
    // const title = register("title").value;
    // const autor = register("autor").value;
    // console.log(title, autor);

    dispatch(
      recommendedBooksThunk({
        title,
        autor,
        page: currentPage,
        limit: getLimit(),
      })
    );
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
                {...register("autor")}
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
