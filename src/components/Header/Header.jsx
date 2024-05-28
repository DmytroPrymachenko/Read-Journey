import { useSelector } from "react-redux";
import Logo from "../../images/Logo";
import {
  HeaderButtonBurger,
  HeaderContainer,
  HeaderIconUser,
  HeaderUserContainer,
} from "./Header.Styled";
import { selectUser } from "../../store/auth/selectors";
import BurgerOpen from "../../images/BurgerOpen";
import { useState } from "react";
import MobaleBurger from "../Modal/MobaleBurger/MobaleBurger";
import Backdrop from "../Backdrop/Backdrop";

const Header = () => {
  const user = useSelector(selectUser);
  const [isMobaleBurger, setIsMobaleBurger] = useState(false);
  const userName = user && user.name ? user.name.charAt(0) : "";
  const [isBackdropActiveOpen, setIsBackdropActiveOpen] = useState(false);

  const handleBurgerOpen = () => {
    setIsMobaleBurger(!isMobaleBurger);
    setIsBackdropActiveOpen(true);
  };

  const closeModal = () => {
    setIsMobaleBurger(false);
    setIsBackdropActiveOpen(false);
  };

  return (
    <>
      <>
        {isBackdropActiveOpen && <Backdrop closeModal={closeModal} />}
        {setIsMobaleBurger && (
          <>
            <MobaleBurger closeModal={closeModal} isOpen={isMobaleBurger} />
          </>
        )}
      </>
      <HeaderContainer>
        <Logo />

        <HeaderUserContainer>
          <HeaderIconUser>
            <span>{userName}</span>
          </HeaderIconUser>
          <HeaderButtonBurger onClick={handleBurgerOpen}>
            <BurgerOpen />
          </HeaderButtonBurger>
        </HeaderUserContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;