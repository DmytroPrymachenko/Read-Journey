import styled from "styled-components";

export const RecommBooksListWraper = styled.div`
  border-radius: 30px;
  background: #1f1f1f;
  padding: 40px 20px;
  & > :first-child {
    display: flex;
    justify-content: space-between;

    & > :first-child {
      font-weight: 700;
      font-size: 20px;
      line-height: 100%;
      letter-spacing: -0.02em;
      color: #f9f9f9;
    }
    & > :nth-child(2) {
      display: flex;
      gap: 8px;
    }
  }
`;

export const RecommBooksListPageButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  margin: 0 auto;
  border: none;
`;

export const RecommBooksListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-auto-rows: 1fr; */
  grid-auto-rows: auto;
  gap: 23px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }

  li {
    min-width: 120px;
    display: flex;
    flex-direction: column;

    text-align: center;
    cursor: pointer;
    align-items: flex-start;
  }
`;
