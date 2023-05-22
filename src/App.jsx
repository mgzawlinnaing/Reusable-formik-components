import { ThemeProvider, theme } from "@chakra-ui/react";
import LoginForm from "./components/login-form/LoginForm.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main className="App">
        <LoginForm />
      </main>
    </ThemeProvider>
  );
}

export default App;
