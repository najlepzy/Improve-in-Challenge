import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

/**
 * LogoutButton component.
 *
 * @returns {JSX.Element} - The LogoutButton component.
 */
const LogoutButton = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  /**
   * Handles the logout process.
   */
  const handleLogout = () => {
    if (authContext) {
      authContext.setIsAuthenticated(false);
      navigate("/login");
    }
  };

  return (
    <Box
      width="120px"
      position="absolute"
      top="20px"
      right="20px"
      bg="blue.400"
      p={2}
      borderRadius="md"
      textAlign="center"
      _hover={{ cursor: "pointer", bg: "teal.500" }}
      onClick={handleLogout}
    >
      Logout
    </Box>
  );
};

export default LogoutButton;
