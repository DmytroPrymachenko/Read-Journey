import { Link } from "react-router-dom";
import {
  BurgerButtonExit,
  BurgerButtonLogAut,
  BurgerButtonWraper,
  BurgerContainer,
  BurgerContainerContant,
  BurgerExit,
} from "./MobaleBurger.Styled";

const MobaleBurger = ({ isOpen, handleLogout, closeModal }) => {
  return (
    <>
      <BurgerContainer className={isOpen ? "open" : ""}>
        <BurgerContainerContant>
          <BurgerExit>
            <BurgerButtonExit onClick={closeModal}>exit</BurgerButtonExit>
          </BurgerExit>
          <div>
            <Link
              to="/"
              aria-label="logo and return to the main page"
              style={{ textDecoration: "none" }}
            >
              fghgfhgf
            </Link>
            <Link
              to="/"
              aria-label="logo and return to the main page"
              style={{ textDecoration: "none" }}
            >
              fghgfhgf
            </Link>
          </div>

          <BurgerButtonWraper>
            <BurgerButtonLogAut onClick={handleLogout}>
              Log out
            </BurgerButtonLogAut>
          </BurgerButtonWraper>
        </BurgerContainerContant>
      </BurgerContainer>
    </>
  );
};

export default MobaleBurger;
