import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  let token = sessionStorage.getItem("token");

  //console.log(token);

  if (token !== "bookmyservice") {
    navigate("/login");
  }

  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
