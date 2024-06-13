import { useSelector } from "react-redux";
import book from "../../images/myLibraryBooksImages/book.png";
import book2x from "../../images/myLibraryBooksImages/book@2x.png";
import bookMobile from "../../images/myLibraryBooksImages/bookMobile.png";
import bookMobile2x from "../../images/myLibraryBooksImages/bookMobile@2x.png";
import { selectUserBooks } from "../../store/books/selectors";
import MyBooksFilter from "../MyBooksFilter/MyBooksFilter";
import {
  ContentWrap,
  MyBookList,
  MyLibraryWrap,
  Picture,
  Span,
  Text,
  Title,
  TopWrap,
} from "./MyLibraryBooks.Styled";
import LibraryItem from "../LibraryItem/LibraryItem";
export const MyLibraryBooks = () => {
  const userBooks = useSelector(selectUserBooks);
  console.log(userBooks);
  return (
    <MyLibraryWrap $length={userBooks?.length}>
      <TopWrap>
        <Title>My library</Title>
        <MyBooksFilter />
      </TopWrap>
      {userBooks?.length === 0 ? (
        <ContentWrap>
          <picture>
            <source
              media="(max-width:767px)"
              srcSet={bookMobile + " 1x, " + bookMobile2x + " 2x"}
            />
            <source srcSet={book + " 1x, " + book2x + " 2x"} />
            <Picture src={book} alt="book" loading="lazy" />
          </picture>
          <Text>
            To start training, add <Span>some of your books</Span> or from the
            recommended ones
          </Text>
        </ContentWrap>
      ) : (
        <MyBookList>
          {userBooks.map((book) => (
            <LibraryItem key={book._id} book={book} />
          ))}
        </MyBookList>
      )}
    </MyLibraryWrap>
  );
};
