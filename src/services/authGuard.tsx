import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

interface Props {
  children: React.ReactNode;
}

/**
 * Component that protects routes by ensuring the user is authenticated.
 *
 * @param {Props} props - Component properties.
 * @returns {JSX.Element} - JSX Element that contains child elements or redirects to the login page.
 */
const AuthGuard: React.FC<Props> = ({ children }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext || {};

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

export default AuthGuard;
