import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Home from "./pages/home";
import Show from "./pages/show";
import './styles.scss'
import { ChakraProvider } from "@chakra-ui/react";

const domain = "dev-bnsf0iri1otxdsso.us.auth0.com";
const clientId = "G6QbV63ZdYK3chA5Zf0YaEbk56fCHYbT";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Show />} />
        </Routes>
      </Auth0Provider>
    </ChakraProvider>
  </BrowserRouter>
);
