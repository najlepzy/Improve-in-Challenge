import React, { createContext, useState, ReactNode } from "react";

/**
 * Interface for the authentication state.
 */
interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Interface for the AuthProvider properties.
 */
interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Context for the authentication state.
 */
export const AuthContext = createContext<AuthState | undefined>(undefined);

/**
 * Provider for the authentication state.
 *
 * @param {AuthProviderProps} props - The properties of the AuthProvider.
 * @returns {JSX.Element} - The AuthProvider component.
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
