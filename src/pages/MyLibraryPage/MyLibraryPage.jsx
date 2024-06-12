import { Dashboard } from "../../components/Dashboard/Dashboard";
import { MyLibraryBooks } from "../../components/MyLibraryBooks/MyLibraryBooks";
import { PageContainer } from "./MyLibraryPage.Styled";
import { useDispatch } from "react-redux";
import { addBookThunk, fetchUserBooks } from "../../store/books/operations";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AddBookModal } from "../../components/AddBookModal/AddBookModal";

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
    reset,
  } = useForm({
    mode: "onChange",
  });

  function onSubmit({ title, author, totalPages }) {
    dispatch(addBookThunk({ title, author, totalPages }))
      .unwrap()
      .then(() => {
        toast.success("Congratulations! The book is added successfully!");
        reset();
        dispatch(fetchUserBooks());
        setModal(true);
      })
      .catch((err) => {
        toast.error(err);
      });
  }

  useEffect(() => {
    dispatch(fetchUserBooks());
  }, [dispatch]);

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
      />
      <MyLibraryBooks />
      {modal &&
        createPortal(<AddBookModal setModal={setModal} />, document.body)}
    </PageContainer>
  );
};

export default MyLibraryPage;
