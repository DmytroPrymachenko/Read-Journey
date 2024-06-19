import styled from "styled-components";
// import { Container } from "../../components/Layout/Layout.Styled";

export const PageContainer = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 40px;
  max-width: 335px;
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 32px;
    gap: 16px;
  }
  @media only screen and (min-width: 1280px) {
    padding: 27px;
  }
`;
