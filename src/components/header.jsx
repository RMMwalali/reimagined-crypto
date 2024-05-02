import React from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./listItem.css"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={loginWithRedirect}>LOGIN</button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      LOGOUT
    </button>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="width">
        <Link to="/" className="header-title">Crypto Tables</Link>
        <div className="button-container">
          <LoginButton />
          <div className="button-gap"></div>
          <LogoutButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
