import styled from "styled-components";
import { Container } from "../../components/Layout/Layout.Styled";

export const AuthContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media only screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 16px;
  }
`;
