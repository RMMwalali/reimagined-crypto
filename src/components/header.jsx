import React from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={loginWithRedirect}>Log In</button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default function Header() {
  return (
    <header className="header">
      <div className="width">
        <Link to="/" className="header-title">Crypto Tables</Link>
        <LoginButton />
        <LogoutButton />
      </div>
    </header>
  );
}
