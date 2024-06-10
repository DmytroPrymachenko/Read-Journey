import book from "../../images/book.png";
import book2x from "../../images/book2@x.png";
import bookMobile from "../../images/bookMobile.png";
import bookMobile2x from "../../images/bookMobile2@x.png";
import { MyLibraryWrap, Picture } from "./MyLibraryBooks.Styled";
export const MyLibraryBooks = () => {
  return (
    <MyLibraryWrap>
      <div>
        <h1>My library</h1>
      </div>
      <div>
        <div>
          <picture>
            <source
              media="(max-width:767px)"
              srcSet={bookMobile + " 1x, " + bookMobile2x + " 2x"}
            />
            <source srcSet={book + " 1x, " + book2x + " 2x"} />
            <Picture src={book} alt="book" loading="lazy" />
          </picture>
          <p>
            To start training, add <span>some of your books</span> or from the
            recommended ones
          </p>
        </div>
      </div>
      MyLibraryBooks
    </MyLibraryWrap>
  );
};
