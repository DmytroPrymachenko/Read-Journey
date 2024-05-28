import { useSelector } from "react-redux";
import { selectUser } from "../store/auth/selectors";
import { Navigate } from "react-router-dom";
import { useEffect, useRef } from "react";
const PublicRoute = ({ children, location }) => {
  const user = useSelector(selectUser);

  const usePrevios = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };
  const prevLocation = usePrevios(location);

  if (!user) {
    return children;
  }
  return <Navigate to={prevLocation || "/recommended"} />;
};

export default PublicRoute;
