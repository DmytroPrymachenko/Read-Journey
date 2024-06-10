import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";

import ErrorPage from "./pages/ErrorPage/ErrorPage";

import { Loader } from "./components/Loader/Loader";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { currentThunk } from "./store/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./store/auth/selectors";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

import LibraryPage from "./pages/LibraryPage/LibraryPage";

import ReadingPage from "./pages/ReadingPage/ReadingPage";
import RecommendPage from "./pages/RecommendPage/RecommendPage";
import styled from "styled-components";

const Test = styled.div``;

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { pathname } = useLocation();

  const [location, setLocation] = useState(pathname);

  useEffect(() => {
    setLocation(pathname);
  }, [pathname, location]);

  console.log(user);
  useEffect(() => {
    if (!user) {
      dispatch(currentThunk()).catch((error) => {
        console.error("Error fetching user data:", error);
      });
    }
  }, [dispatch, user]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/recommended"
              element={
                <PrivateRoute>
                  <RecommendPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/library"
              element={
                <PrivateRoute>
                  <LibraryPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/reading/:id"
              element={
                <PrivateRoute>
                  <ReadingPage />
                </PrivateRoute>
              }
            />
          </Route>

          <>
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
          </>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
