import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.location.pathname !== "/plans-detail" && window.scrollTo(0, 0);
  }, [location]);

  return children;
};
