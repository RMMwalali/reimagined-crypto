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
    <div className="header">
      <div className="header-logo">
        <Link to="/" className="header-title">Crypto Tables</Link>
      </div>
      <div className="header-buttons">
        <LoginButton />
        <div className="spacer"></div> {/* Spacer for visible space */}
        <LogoutButton />
      </div>
    </div>
  );
};

export default Header;
