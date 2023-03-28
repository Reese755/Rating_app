import logo from './Hypergamy logo.png';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Login({onLogin, updateLoginFormData, onSignup, updateSignupFormData}){

  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUp = () => {
    setIsSignUp(true);
  };

  const handleSignIn = () => {
    setIsSignUp(false);
  };

    return (
        <>
		<div className="login-position">
        <div className="login-container" id="login-container">
	<div className="login-form-container sign-up-container">
		<form className="login-form" onSubmit={() => console.log("hello")}>
			<h1>Create Account</h1>
	
			<span>or use your email for registration</span>
			<input className="login-input" type="text" name="username" placeholder="Name" onChange={updateSignupFormData}/>
			<input className="login-input" type="email" name="email" placeholder="Email" onChange={updateSignupFormData}/>
			<input className="login-input" type="password" name="password" placeholder="Password" onChange={updateSignupFormData}/>
			<button className="login-button">Sign Up</button>
		</form>
	</div>
	<div className="login-form-container sign-in-container">
		<form className="login-form" onSubmit={onLogin}>
        <header className="App-header">
        <img  src={logo} className="App-logo" alt="logo" />
        <h3 className="hypergamy-logo">
         Hypergamy
        </h3>
      
      </header>
			<h1>Sign in</h1>
			
			<input className="login-input" type="text" name="username" placeholder="Username" onChange={updateLoginFormData} />
			<input className="login-input" type="text" name="password" placeholder="Password" onChange={updateLoginFormData} />
			<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Forgot your password?</a>
			<button className="login-button"type="submit">Login</button>
		</form>
	</div>
	<div className="login-overlay-container">
		<div className="login-overlay">
			<div className="login-overlay-panel login-overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="login-button" id="signIn"onClick={handleSignIn} onChange={updateSignupFormData}>Sign In</button>
			</div>
			<div className="login-overlay-panel login-overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="signup-button" id="signUp" onClick={handleSignUp}><Link to="/signup">Signup</Link></button>
			</div>
		</div>
	</div>
</div>


<div id="login-container" className={isSignUp ? "right-panel-active" : ""}>
    </div>
	</div>
	<footer>
	<p>
		Developed by Reese Marshall. All Rights Reserved.
	</p>
</footer>
</>
    )
}

export default Login;