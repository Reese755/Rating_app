import {Link} from 'react-router-dom';
import './signup.css';

function Signup() {


    return (
        <>
        
        {/* HTML for the Login Page */}
    <body className="signup-body">
      <div className='login-container'  id="container">
        <div class="login-form-container login-sign-up-container">
          <form className='login-form' action="#">
            <h1>Create Account</h1>
           
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button id="signUp">Sign Up</button>
          </form>
        </div>
        <div class="login-form-container login-sign-in-container">
          <form className='login-form' action="#">
            <h1 className="login-h1">Sign Up</h1>
           
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            
            <br/>
            <button id="signIn">Sign Up</button>
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
              <p className="login-p">Already have an account? Click to login</p>
              <button class="ghost" className='login-button' id="signUp" ><Link to="/login">Login</Link></button>
            </div>
          </div>
        </div>
      </div>
      
      <div id="login-container"></div>
      <footer>
        <p>
          Developed by Reese Marshall. All Rights Reserved.
        </p>
      </footer>
    </body>
        
        </>
    )
}
export default Signup;