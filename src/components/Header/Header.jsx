import { useDispatch, useSelector } from "react-redux";
import Logo from "../../images/Logo";
import {
  HeaderButtonBurger,
  HeaderContainer,
  HeaderDivLink,
  HeaderIconUser,
  HeaderLink,
  HeaderTabletLogOut,
  HeaderUserContainer,
} from "./Header.Styled";
import { selectUser } from "../../store/auth/selectors";
import BurgerOpen from "../../images/BurgerOpen";
import { useEffect, useState } from "react";
import MobaleBurger from "../Modal/MobaleBurger/MobaleBurger";
import Backdrop from "../Backdrop/Backdrop";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutThunk } from "../../store/auth/operations";

const Header = () => {
  const user = useSelector(selectUser);
  const [isMobaleBurger, setIsMobaleBurger] = useState(false);
  const userName = user && user.name ? user.name.charAt(0) : "";
  const [isBackdropActiveOpen, setIsBackdropActiveOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutThunk())
      .then(() => {
        toast.success("Successfully logged out.");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleBurgerOpen = () => {
    setIsMobaleBurger(!isMobaleBurger);
    setIsBackdropActiveOpen(true);
  };

  const closeModal = () => {
    setIsMobaleBurger(false);
    setIsBackdropActiveOpen(false);
  };

  const [isTabletView, setIsTabletView] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletView(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <>
        {isBackdropActiveOpen && <Backdrop closeModal={closeModal} />}
        {setIsMobaleBurger && (
          <>
            <MobaleBurger
              handleLogout={handleLogout}
              closeModal={closeModal}
              isOpen={isMobaleBurger}
            />
          </>
        )}
      </>
      <HeaderContainer>
        <Logo />
        <>
          {isTabletView ? (
            <>
              <HeaderDivLink>
                <HeaderLink
                  to="/recommended"
                  aria-label="Home"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </HeaderLink>
                <HeaderLink
                  to="/library"
                  aria-label="My library"
                  style={{ textDecoration: "none" }}
                >
                  My library
                </HeaderLink>
                {/* {user && (
                  <HeaderLink
                    to="/favorites"
                    aria-label="Teachers"
                    style={{ textDecoration: "none" }}
                  >
                    Favorites
                  </HeaderLink>
                )} */}
              </HeaderDivLink>
              <HeaderUserContainer>
                <HeaderIconUser>
                  <span>{userName}</span>
                </HeaderIconUser>
                <HeaderTabletLogOut>Log out</HeaderTabletLogOut>
              </HeaderUserContainer>
            </>
          ) : (
            <HeaderUserContainer>
              <HeaderIconUser>
                <span>{userName}</span>
              </HeaderIconUser>
              <HeaderButtonBurger onClick={handleBurgerOpen}>
                <BurgerOpen />
              </HeaderButtonBurger>
            </HeaderUserContainer>
          )}
        </>
      </HeaderContainer>
    </>
  );
};

export default Header;
