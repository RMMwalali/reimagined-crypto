import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Show from "./pages/show";
import './styles.scss'
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Show />} />
      </Routes>
    </ChakraProvider>
  </BrowserRouter>
);
