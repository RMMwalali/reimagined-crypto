//Profile.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
	const { user } = useAuth0();

	return (
		<>
            <div className="container">
                <p>YOU</p>
			</div>
		</>
	)
}

export default Profile
