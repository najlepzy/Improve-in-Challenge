import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/authContext";
import AppRouter from "./routes/appRouter";

/**
 * Main App component
 */
function App() {
  return (
    <>
      <ChakraProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
