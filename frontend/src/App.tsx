import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { io } from "socket.io-client";
import { ThemeProvider } from "styled-components";
import Index from "./pages";
import Layout from "./pages/layout";
import SetName from "./pages/set-name";
import GlobalStyle from "./style/global";
import theme from "./theme";

export const socket = io("http://localhost:5000", {
  transports: ["websocket"],
});

export type socket = typeof socket;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/set-name" element={<SetName />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
