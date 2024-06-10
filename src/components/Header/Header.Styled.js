import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: #1f1f1f;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 57px;
  margin-top: 20px;
`;
export const HeaderIconUser = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: #262626;
  border: 1px solid rgba(249, 249, 249, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HeaderUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const HeaderButtonBurger = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  transition: transform 0.6s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
