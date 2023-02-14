import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props }) => {
  console.log({ ...props });
  return props.loggedIn ? (
    <Component {...props} />
  ) : (
    // <h2>qwe</h2>
    <Navigate to="/sign-in" replace />
  );
};

export default ProtectedRoute;
