import React from 'react';
import { useGoogleLogin } from 'react-google-login';

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = process.env.REACT_APP_CLIENT_ID;

function LoginHooks({ getName }) {
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        getName(res.profileObj);
        // alert(
        //     `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        // );
        refreshTokenSetup(res);
        alert('Login Successfully 😍');
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        // alert(
        //     `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
        // );
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
        // responseType: 'code',
        // prompt: 'consent',
    });

    return (
        <button
            style={{ maxWidth: 300, border: '1px solid #CCC' }}
            onClick={signIn}
            className="button"
        >
            <img
                src="https://cdn.worldvectorlogo.com/logos/google-icon.svg"
                alt="google login"
                className="icon"
            ></img>

            <span className="buttonText">Sign in with Google</span>
        </button>
    );
}

export default LoginHooks;
