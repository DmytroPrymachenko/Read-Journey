import React from "react";
import {
  RecommendedModalItemContantWraper,
  RecommendedModalItemWraper,
} from "./RecommendedItem.Styled";

const RecommendedModalItem = ({ closeModal, book, handleAddBook }) => {
  return (
    <RecommendedModalItemWraper>
      <button onClick={closeModal}>sffsdfsdfd</button>
      <div>
        <img src={book.imageUrl} alt={book.title} />
      </div>
      <RecommendedModalItemContantWraper>
        <span>{book.title}</span>
        <span>{book.author}</span>
        <span>{book.totalPages} pages</span>
      </RecommendedModalItemContantWraper>
      <button onClick={handleAddBook}>Додати в улюблені</button>
    </RecommendedModalItemWraper>
  );
};

export default RecommendedModalItem;
