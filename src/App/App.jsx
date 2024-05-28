import { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
// import IsLoading from "../IsLoading/IsLoading";
import Home from "../pages/Home/Home";
import Recommended from "../pages/Recommended/Recommended";
import Library from "../pages/Library/Library";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Reading from "../pages/Reading/Reading";
// import Register from "../../pages/Authorization/Register/Register";
// import Login from "../../pages/Authorization/Login/Login";
import PrivateRoute from "../routes/PrivateRoute";
import { Loader } from "../components/Loader/Loader";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PublicRoute from "../routes/PublicRoute";

function App() {
  // const user = "Test";

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
                // <Suspense fallback={<IsLoading />}>
                <PrivateRoute>
                  <Recommended />
                </PrivateRoute>
                // </Suspense>
              }
            />
            <Route
              path="/library"
              element={
                // <Suspense fallback={<IsLoading />}>
                <PrivateRoute>
                  <Library />
                </PrivateRoute>
                // </Suspense>
              }
            />
            <Route
              path="/reading"
              element={
                // <Suspense fallback={<IsLoading />}>
                <PrivateRoute>
                  <Reading />
                </PrivateRoute>
                // </Suspense>
              }
            />
          </Route>

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
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
