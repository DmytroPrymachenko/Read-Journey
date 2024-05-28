import styled from "styled-components";
export const BurgerContainer = styled.div`
  background-color: #262626;
  width: 55%;
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(100%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  opacity: 0;
  transition: transform 0.7s cubic-bezier(0.01, 0.01, 0.58, 1),
    opacity 0.7s ease;

  &.open {
    transform: translateX(0);
    opacity: 1;
  }
`;
export const BurgerContainerContant = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

export const BurgerButtonLogAut = styled.button`
  border: 1px solid rgba(249, 249, 249, 0.2);
  border-radius: 30px;
  padding: 10px 20px;
  background: transparent;

  font-weight: 700;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: 0.02em;
  color: #f9f9f9;
`;
export const BurgerButtonWraper = styled.div`
  padding-bottom: 40px;
`;
export const BurgerExit = styled.div`
  padding-top: 34px;
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
`;
export const BurgerButtonExit = styled.button`
  border: none;
  background: transparent;
`;
