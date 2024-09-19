import './login.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login () {

  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const handleSignUp = () => {
    setIsSignUp(true);
  };

    return (
      <>
      {/* HTML for the Login Page */}
      <body className="login-body">
      <h2 className="login-h2" >Weekly Coding Challenge #1: Sign in/up Form</h2>
      <div className={`login-container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
        <div class="login-form-container login-sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div class="login-social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={handleSignUpClick} id="signUp">Sign Up</button>
          </form>
        </div>
        <div class="login-form-container login-sign-in-container">
          <form action="#">
            <h1 className="login-h1">Sign in</h1>
            <div class="login-social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span className="login-span">or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button onClick={handleSignInClick} id="signIn">Sign In</button>
          </form>
        </div>
        <div class="login-overlay-container">
          <div class="login-overlay">
            <div class="login-overlay-panel login-overlay-left">
              <h1>Welcome Back!</h1>
              <p className="login-p">To keep connected with us please login with your personal info</p>
              <button class="ghost" id="signIn">Sign In</button>
            </div>
            <div class="login-overlay-panel login-overlay-right">
              <h1>Hello, Friend!</h1>
              <p className="login-p">Enter your personal details and start journey with us</p>
              <button class="ghost" id="signUp"  onClick={handleSignUp}><Link to="/signup"></Link>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      
      <div id="login-container" className={isSignUp ? "right-panel-active" : ""}></div>
      <footer>
        <p>
          Developed by Reese Marshall. All Rights Reserved.
        </p>
      </footer>
      </body>
      </>
    )

}

export default Login;