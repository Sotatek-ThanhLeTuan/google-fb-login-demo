import React, {useState} from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
// import LoginHooks from './components/LoginHooks';
// import LogoutHooks from './components/LogoutHooks';
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import './App.css';

function App() {
    const [user, setUser] = useState({});
    const [userFb, setUserFb] = useState({});

    // const getName = (name) => {
    //     setUser(name);
    // };
    // const removeName = (name) => {
    //     setUser({});
    // };

    // const responseGoogle = (response) => {
    //     console.log(response);
    // };

    console.log(123123);
    console.log('password', '123123123123312321');

    return (
        <div className="App">
            <h2>Google Login OAuth2 - Deploy ver - 2</h2>
            {/* <LoginHooks getName={(item) => getName(item)} />
            <LogoutHooks removeName={removeName} /> */}
            <div style={{display: 'flex'}}>
                <div style={{width: '50%'}}>
                    <GoogleLogin
                        clientId={process.env.REACT_APP_CLIENT_ID}
                        isSignedIn={true}
                        render={(renderProps) => (
                            <button
                                style={{
                                    maxWidth: 300,
                                    border: '1px solid #CCC',
                                }}
                                onClick={renderProps.onClick}
                                className="button"
                            >
                                <img
                                    src="https://cdn.worldvectorlogo.com/logos/google-icon.svg"
                                    alt="google login"
                                    className="icon"
                                ></img>

                                <span className="buttonText">
                                    Sign in with Google
                                </span>
                            </button>
                        )}
                        buttonText="Login"
                        onSuccess={(res) => {
                            console.log('gmail', res);
                            if (res.profileObj?.googleId) {
                                alert('Login Successfully 😍');
                                setUser(res.profileObj);
                            }
                        }}
                        onFailure={(res) => console.log(res)}
                        cookiePolicy={'single_host_origin'}
                    />
                    <GoogleLogout
                        clientId={process.env.REACT_APP_CLIENT_ID}
                        buttonText="Logout"
                        render={(renderProps) => (
                            <button
                                style={{
                                    maxWidth: 300,
                                    border: '1px solid #CCC',
                                }}
                                onClick={renderProps.onClick}
                                className="button"
                            >
                                <img
                                    src="https://cdn.worldvectorlogo.com/logos/google-icon.svg"
                                    alt="google login"
                                    className="icon"
                                ></img>

                                <span className="buttonText">
                                    Sign out with Google
                                </span>
                            </button>
                        )}
                        onLogoutSuccess={(res) => {
                            // console.log(res);
                            if (user.name) {
                                alert('Logout Successfully ✌');
                                setUser({});
                            }
                        }}
                        onFailure={(res) => console.log(res)}
                    />

                    {user.googleId && (
                        <div
                            style={{
                                marginTop: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <img
                                src={user.imageUrl}
                                style={{borderRadius: '100%'}}
                                width={50}
                                height={50}
                                alt=""
                            />{' '}
                            <span
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginLeft: '10px',
                                }}
                            >
                                {user.name}
                            </span>
                        </div>
                    )}
                </div>
                <div style={{width: '50%'}}>
                    {/* <input type="text" value={fbId} onChange={(e) => setFbId(e.target.value)} /> */}
                    <FacebookLogin
                        appId={process.env.REACT_APP_ID_FB}
                        fields="name,email,picture"
                        callback={(res) => {
                            console.log('facebook', res);
                            if (res.id) {
                                setUserFb(res);
                                alert('Login Fb success');
                            }
                        }}
                        icon="fa-facebook"
                        render={(renderProps) => (
                            <button
                                style={{
                                    maxWidth: 350,
                                    border: '1px solid #CCC',
                                }}
                                onClick={renderProps.onClick}
                                className="button"
                            >
                                <img
                                    src="https://seolenart.com/wp-content/uploads/2017/11/icon-fb.png"
                                    alt="google login"
                                    className="icon"
                                ></img>

                                <span className="buttonText">
                                    Sign in with Facebook
                                </span>
                            </button>
                        )}
                    />
                    <FacebookLogin
                        appId={process.env.REACT_APP_ID_FB}
                        // autoLoad={login}
                        fields="name,email,picture"
                        callback={(res) => console.log(res)}
                        icon="fa-facebook"
                        render={(renderProps) => (
                            <button
                                style={{
                                    maxWidth: 350,
                                    border: '1px solid #CCC',
                                }}
                                onClick={() => {
                                    if (userFb.name) {
                                        setUserFb({});
                                        alert('Logout FB');
                                    }
                                }}
                                className="button"
                            >
                                <img
                                    src="https://seolenart.com/wp-content/uploads/2017/11/icon-fb.png"
                                    alt="google login"
                                    className="icon"
                                ></img>

                                <span className="buttonText">
                                    Sign out with Facebook
                                </span>
                            </button>
                        )}
                    />
                    {userFb.id && (
                        <div
                            style={{
                                marginTop: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <img
                                src={`http://graph.facebook.com/${userFb.userID}/picture?type=square`}
                                style={{borderRadius: '100%'}}
                                width={50}
                                height={50}
                                alt=""
                            />{' '}
                            <span
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginLeft: '10px',
                                }}
                            >
                                {userFb.name}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
