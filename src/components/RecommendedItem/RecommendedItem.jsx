import { RecommendedTitleWraper } from "../Header/Header.Styled";
import {
  RecommendedAuthor,
  RecommendedImg,
  RecommendedItemLi,
  RecommendedTitle,
} from "./RecommendedItem.Styled";

const RecommendedItem = ({ book }) => {
  return (
    <RecommendedItemLi key={book._id}>
      <RecommendedImg src={book.imageUrl} alt={book.title} />
      <RecommendedTitleWraper>
        <RecommendedTitle>{book.title}</RecommendedTitle>
        <RecommendedAuthor>{book.author}</RecommendedAuthor>
      </RecommendedTitleWraper>
    </RecommendedItemLi>
  );
};

export default RecommendedItem;
