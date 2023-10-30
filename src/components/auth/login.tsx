import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

import api from "../../api/api";

/**
 * Component representing the login form.
 */
const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authContext = useContext(AuthContext);

  /**
   * Authenticate user
   * @param {string} email - The email of the user
   * @param {string} password - The password of the user
   * @returns {Promise<boolean>} - The authentication status
   */
  const authenticateUser = async (email: string, password: string) => {
    try {
      const response = await api.get("/users");

      const users = response.data;

      console.error(
        users && Array.isArray(users)
          ? ""
          : "Users is undefined or not an array!"
      );
      return (
        users &&
        Array.isArray(users) &&
        users.some(
          (user: { email: string; password: string }) =>
            user.email === email && user.password === password
        )
      );
    } catch (error) {
      console.error("Error while fetching users:", error);
      return false;
    }
  };

  /**
   * Handle login
   */
  const handleLogin = async () => {
    try {
      const isAuthenticated = await authenticateUser(email, password);
      isAuthenticated
        ? (authContext ? authContext.setIsAuthenticated(true) : null,
          navigate("/user/bands"))
        : alert("Incorrect credentials");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Log in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space between"}
              ></Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleLogin}
              >
                Log in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginForm;
