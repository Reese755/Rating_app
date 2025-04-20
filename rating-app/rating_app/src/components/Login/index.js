import './login.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from "../../api";
// import {faLinkedin,faFacebook} from '@fortawesome/free-brands-svg-icons'

function Login () {


  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", email, password);
    try {
      await login(email, password); 
      navigate('/home'); // Redirect to home on success
    } catch (err) {
      console.error('Login failed:', err);
      setError(err.response?.data?.error || "Failed to log in");
    }
  };
  

    return (
      <>
      {/* HTML for the Login Page */}
      <body className="login-body">
      <div className='login-container' id="container">
        <div class="login-form-container login-sign-in-container">
          <form className='login-form' action="#" onSubmit={handleSubmit}>
            <h1 className="login-h1">Sign in</h1>
            {/* <img src={logo} alt="logo"/> */}
            {/* <div class="login-social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div> */}
             <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            <a href="youtube.com">Forgot your password?</a>
            <br/>
            <button id="signIn" type="submit">Sign In</button>

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
              <button class="ghost" className='login-button' id="signUp" type="submit" onClick={handleSignUp}>Sign Up</button>
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