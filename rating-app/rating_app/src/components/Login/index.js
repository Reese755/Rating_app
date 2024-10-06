import './login.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import {faLinkedin,faFacebook} from '@fortawesome/free-brands-svg-icons'

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
      <div className={`login-container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
        <div class="login-form-container login-sign-up-container">
          <form className='login-form' action="#">
            <h1>Create Account</h1>
            {/* Fix the fa logos before implementing */}
            {/* <div class="login-social-container">
              <a  href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div> */}
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={handleSignUpClick} id="signUp">Sign Up</button>
          </form>
        </div>
        <div class="login-form-container login-sign-in-container">
          <form className='login-form' action="#">
            <h1 className="login-h1">Sign in</h1>
            {/* <img src={logo} alt="logo"/> */}
            {/* <div class="login-social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div> */}
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="youtube.com">Forgot your password?</a>
            <br/>
            <button onClick={handleSignInClick} id="signIn"><Link to='/home'>Sign In</Link></button>
          </form>
        </div>
        <div class="login-overlay-container">
          <div class="login-overlay">
            <div class="login-overlay-panel login-overlay-left">
              <h1>Welcome Back!</h1>
              <p className="login-p">To keep connected with us please login with your personal info</p>
              <button class="ghost" className='login-button' id="signIn">Sign In</button>
            </div>
            <div class="login-overlay-panel login-overlay-right">
              <h1>Hello, Friend!</h1>
              <p className="login-p">Enter your personal details and start journey with us</p>
              <button class="ghost" className='login-button' id="signUp"  onClick={handleSignUp}><Link to="/signup">Sign Up</Link></button>
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