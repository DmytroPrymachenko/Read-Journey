import { Suspense } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import IsLoading from "../IsLoading/IsLoading";
import Home from "../../pages/Home/Home";
import Recommended from "../../pages/Recommended/Recommended";
import Library from "../../pages/Library/Library";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Reading from "../../pages/Reading/Reading";
import Register from "../../pages/Authorization/Register/Register";
import Login from "../../pages/Authorization/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

function App() {
  const user = "Test";

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<IsLoading />}>
                <PrivateRoute user={user}>
                  <Home />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/recommended"
            element={
              <Suspense fallback={<IsLoading />}>
                <PrivateRoute user={user}>
                  <Recommended />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/library"
            element={
              <Suspense fallback={<IsLoading />}>
                <PrivateRoute user={user}>
                  <Library />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/reading"
            element={
              <Suspense fallback={<IsLoading />}>
                <PrivateRoute user={user}>
                  <Reading />
                </PrivateRoute>
              </Suspense>
            }
          />
        </Route>

        <Route
          path="/register"
          element={
            <Suspense fallback={<IsLoading />}>
              {!user ? <Register /> : <Navigate to="/" />}
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<IsLoading />}>
              {!user ? <Login /> : <Navigate to="/" />}
            </Suspense>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
