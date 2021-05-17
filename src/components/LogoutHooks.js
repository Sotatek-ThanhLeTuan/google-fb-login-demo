import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId =
    '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

function LogoutHooks({ removeName }) {
    const onLogoutSuccess = (res) => {
        removeName();
        console.log(res, 'logout');
        console.log('Logged out Success');
        alert('Logout Successfully ✌');
    };

    const onFailure = () => {
        console.log('Handle failure cases');
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });

    return (
        <button
            onClick={signOut}
            className="button"
            style={{ maxWidth: 300, border: '1px solid #CCC' }}
        >
            <img
                src="https://cdn.worldvectorlogo.com/logos/google-icon.svg"
                alt="google login"
                className="icon"
            ></img>

            <span className="buttonText">Sign out</span>
        </button>
    );
}

export default LogoutHooks;
