import styled from "styled-components";

export const RecommendedItemLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 137px;
`;

export const RecommendedImg = styled.img`
  border-radius: 8px;
  height: 208px;
`;

// export const RecommendedTitleWraper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 2px;
// `;

export const RecommendedTitle = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  color: #f9f9f9;
`;

export const RecommendedAuthor = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #686868;
`;
