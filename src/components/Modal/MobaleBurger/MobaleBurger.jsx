import { BurgerContainer } from "./MobaleBurger.Styled";

const MobaleBurger = ({ isOpen }) => {
  return (
    <>
      <BurgerContainer className={isOpen ? "open" : ""}></BurgerContainer>
    </>
  );
};

export default MobaleBurger;
