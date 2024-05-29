import { Link } from "react-router-dom";
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
  height: 17px;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
export const LogoTitleSvgWrap = styled.div`
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
export const AuthSlogan = styled.h1`
  font: 700 32px / 1 "Gilroy", sans-serif;
  letter-spacing: 0.02em;
  color: #f9f9f9;
  @media only screen and (min-width: 768px) {
  }
`;
export const AuthSpan = styled.span`
  font: 700 32px / 1 "Gilroy", sans-serif;
  letter-spacing: 0.02em;
  color: rgba(227, 227, 227, 0.5);
  @media only screen and (min-width: 768px) {
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (min-width: 768px) {
  }
`;
export const AuthInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media only screen and (min-width: 768px) {
  }
`;
export const AuthSubmitBlock = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  @media only screen and (min-width: 768px) {
  }
`;
export const EmtyBlock = styled.div`
  height: 44px;
  @media only screen and (min-width: 768px) {
  }
`;
export const AuthLabel = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  /* gap: 8px; */
  @media only screen and (min-width: 768px) {
  }
`;
export const AuthInputContainer = styled.div`
  display: flex;
  gap: 10px;
  /* border: 1px solid red; */
  border-radius: 12px;
  align-items: center;
  background: #262626;
  @media only screen and (min-width: 768px) {
  }
`;
export const AuthInputTitle = styled.p`
  padding: 14px 0 14px 14px;
  /* border-radius: 12px 0 0 12px; */
  color: #686868;
  background: #262626;
  font: 500 12px / 1.33333 "Gilroy", sans-serif;
  letter-spacing: -0.02em;
  text-align: center;
  @media only screen and (min-width: 768px) {
    padding: 16px 16px 16px 0;
  }
`;
export const AuthInput = styled.input`
  padding: 14px 14px 14px 0;
  /* border-radius: 0 12px 12px 0; */
  background: #262626;
  color: #f9f9f9;
  width: 100%;
  outline: none;
  border: none;
  font: 500 12px / 1.33333 "Gilroy", sans-serif;
  letter-spacing: -0.02em;
  &::placeholder {
    background: #262626;
    color: #f9f9f9;
  }
  /* &:focus, */
  &:active {
    background: #262626;
    color: #f9f9f9;
  }
  @media only screen and (min-width: 768px) {
    padding: 16px 16px 16px 0;
  }
`;
export const AuthEyeBtn = styled.button`
  position: absolute;
  right: 16px;
  top: 13px;
  background-color: transparent;
  border: none;
  padding: 0;
  height: 20px;
  width: 20px;
  z-index: 2;
`;
export const AuthButton = styled.button`
  /* margin-top: 22px; */
  border-radius: 30px;
  padding: 12px 15px;
  border: none;
  background-color: #f9f9f9;
  transition: all 0.3s;
  width: 131px;
  /* white-space: nowrap; */
  font: 700 14px / 1.28571 "Gilroy", sans-serif;
  letter-spacing: 0.02em;
  color: #1f1f1f;
  &:hover {
    background-color: var(--hover-green);
  }
`;
export const LinkStyled = styled(Link)`
  font: 500 12px / 1.16667 "Gilroy", sans-serif;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-align: center;
  color: #686868;
`;
