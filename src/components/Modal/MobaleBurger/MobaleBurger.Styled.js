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
