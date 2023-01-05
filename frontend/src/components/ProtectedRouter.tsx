import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouter = () => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRouter;
