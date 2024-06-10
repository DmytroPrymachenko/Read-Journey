// import { Dashboard1 } from "../../components/ControlBoard/DashBoard1/DashBoard1";
// import styled from "styled-components";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import { Dashboard } from "../../components/Dashboard/Dashboard";
import { MyLibraryBooks } from "../../components/MyLibraryBooks/MyLibraryBooks";
import { PageContainer } from "./MyLibraryPage.Styled";
import { useDispatch } from "react-redux";
import { addBookThunk } from "../../store/books/operations";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useState } from "react";

// const schema = yup.object({
//   title: yup.string(),
//   author: yup.string(),
//   pages: yup.number(),
// });

const MyLibraryPage = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const inputs = [
    {
      title: "Book title:",
      placeholder: "Enter text",
      name: "title",
      type: "text",
    },
    {
      title: "The author:",
      placeholder: "Enter text",
      name: "author",
      type: "text",
    },
    {
      title: "Number of pages:",
      placeholder: "0",
      name: "totalPages",
      type: "number",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    // resolver: yupResolver(schema),
  });

  function onSubmit({ title, author, totalPages }) {
    dispatch(addBookThunk({ title, author, totalPages }))
      .unwrap()
      .then(() => {
        toast.success("Congratulations! The book is added successfully!");
      })
      .catch((err) => {
        toast.error(err);
      });
  }

  function handleClick() {
    setModal(true);
  }

  return (
    <PageContainer>
      <Dashboard
        title={"Filters:"}
        inputs={inputs}
        titleButton={"Add book"}
        secondPart={"Recommended books"}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        validation={true}
        handleClick={handleClick}
      />
      <MyLibraryBooks />
      createPo
    </PageContainer>
  );
};

export default MyLibraryPage;
