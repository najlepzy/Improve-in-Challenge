// Importing necessary components and services from react-router-dom and local files
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "../components/auth/login";
import BandList from "../components/pages/bands";
import AuthGuard from "../services/authGuard";
import BandDetails from "../components/pages/bandDetails";
import { BandMembersProvider } from "../context/bandMembersContext";

/**
 * AppRouter function is the main router of the application.
 * It defines the routes for the application and their corresponding components.
 * @returns {JSX.Element} A BrowserRouter component which wraps the Routes component.
 * The Routes component contains Route components each representing a route in the application.
 */
function AppRouter() {
  return (
    <BrowserRouter>
      <BandMembersProvider>
        <Routes>
          {/* Route for login page. When the path is '/login', LoginForm component is rendered */}
          <Route path="/login" element={<LoginForm />} />
          {/* Route for user's bands page. When the path is '/user/bands', BandList component is rendered */}
          {/* The BandList component is wrapped with AuthGuard to protect the route */}
          <Route
            path="/user/bands"
            element={
              <AuthGuard>
                <BandList />
              </AuthGuard>
            }
          />
          <Route
            path="/user/bands/:selectedNameBand"
            element={
              <AuthGuard>
                <BandDetails />
              </AuthGuard>
            }
          />

          {/* Default route. When the path is '/', it navigates to '/login' */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </BandMembersProvider>
    </BrowserRouter>
  );
}

// Exporting AppRouter function as default export
export default AppRouter;
