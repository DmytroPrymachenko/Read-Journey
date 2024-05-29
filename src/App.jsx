import { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Library from "./pages/Library/Library";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Reading from "./pages/Reading/Reading";
import { Loader } from "./components/Loader/Loader";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { currentThunk } from "./store/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./store/auth/selectors";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import RecommendedPage from "./pages/RecommendedPage/RecommendedPage";

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
                  <RecommendedPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/library"
              element={
                <PrivateRoute>
                  <Library />
                </PrivateRoute>
              }
            />
            <Route
              path="/reading"
              element={
                <PrivateRoute>
                  <Reading />
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
