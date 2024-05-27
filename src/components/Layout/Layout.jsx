import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Container } from "./Layout.Styled";

const Layout = () => {
  return (
    <>
      <header>
        <Container>
          <Header />
        </Container>
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
