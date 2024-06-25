import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { Container, HeaderContainer } from "./Layout.Styled";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/auth/selectors";

const Layout = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      navigate("/recommended");
    } else {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <header>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default Layout;
