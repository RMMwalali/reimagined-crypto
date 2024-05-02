import React from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./listItem.css"

const LogoutButton = () => {
	const { logout, isAuthenticated } = useAuth0();

	if (isAuthenticated) {
		return (
			<>
				<button className="btn btn-primary 
					mx-5 my-5 px-4 logoutBtn"
					onClick={() => logout({ returnTo: window.location.origin })}>
					LOG OUT
				</button>
				<br />
				<Profile />
			</>
		);
	}
};

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/" className="header-title">Crypto Tracker</Link>
      </div>
      <div className="header-buttons">
        <div className="spacer"></div>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Header;
