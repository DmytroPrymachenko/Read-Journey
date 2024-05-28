import { Suspense, useEffect } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import IsLoading from "../IsLoading/IsLoading";
import Home from "./pages/Home/Home";
import Recommended from "./pages/Recommended/Recommended";
import Library from "./pages/Library/Library";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Reading from "./pages/Reading/Reading";
// import Register from "../../pages/Authorization/Register/Register";
// import Login from "../../pages/Authorization/Login/Login";

import { Loader } from "./components/Loader/Loader";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import { currentThunk } from "./store/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./store/auth/selectors";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const location = useLocation();
  console.log(user);
  useEffect(() => {
    const isLoggedIn = !!user;
    console.log(isLoggedIn);
    if (!isLoggedIn && location.pathname === "/recommended") {
      dispatch(currentThunk());
    }
  }, [dispatch, location.pathname, user]);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/recommended" element={<Recommended />} />
            <Route path="/library" element={<Library />} />
            <Route path="/reading" element={<Reading />} />
          </Route>
          {!user && (
            <>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </>
          )}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
