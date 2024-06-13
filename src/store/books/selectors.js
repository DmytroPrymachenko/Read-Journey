export const selectRecommendedBooks = (state) => state.books.recommendedBooks;
export const selectRecommended = (state) => state.recommend;
export const selectUserBooks = (state) => state.userBooks.userBooks;
export const selectBookInfo = (state) => state.userBooks.bookInfo;
export const selectBookProgress = (state) => state.userBooks.bookInfo.progress;

export const selectPath = (state) => state.books.path;
export const selectReadingInfo = (state) => state.userBooks.readingState;
