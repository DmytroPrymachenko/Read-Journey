import styled from "styled-components";

export const EnterWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 40px;
  gap: 40px;
  border-radius: 30px;
  background-color: #1f1f1f;
  @media only screen and (min-width: 768px) {
    padding: 40px 64px;
  }
`;
export const LogoWrap = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export const LogoTitleSvgWrap = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
export const Slogan = styled.h1`
  font: 700 32px / 1 "Gilroy", sans-serif;
  letter-spacing: 0.02em;
  color: #f9f9f9;
  @media only screen and (max-width: 768px) {
  }
`;
export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (max-width: 768px) {
  }
`;
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media only screen and (max-width: 768px) {
  }
`;
export const SubmitBlock = styled.div`
  display: flex;
  gap: 14px;
  @media only screen and (max-width: 768px) {
  }
`;
