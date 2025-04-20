import { Link } from 'react-router-dom';
import './signup.css';
import { useState } from 'react';
import api from '../../api'; // Import the API helper

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/signup', { user: formData });
      if (response.status === 201) {
        setSuccess(true);
        setError('');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong!');
      setSuccess(false);
    }
  };
  

  return (
    <>
      <body className="signup-body">
        <div className="login-container" id="container">
          <div className="login-form-container login-sign-up-container">
            <form className="login-form" onSubmit={handleSignup}>
              <h1>Create Account</h1>

              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="submit" id="signUp">
                Sign Up
              </button>
              {success && <p className="success-message">Account created successfully!</p>}
              {error && <p className="error-message">{error}</p>}
            </form>
          </div>

          <div className="login-overlay-container">
            <div className="login-overlay">
              <div className="login-overlay-panel login-overlay-right">
                <h1>Hello, Friend!</h1>
                <p className="login-p">
                  Already have an account? Click to login
                </p>
                <button className="ghost login-button" id="signUp">
                  <Link to="/login">Login</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <p>Developed by Reese Marshall. All Rights Reserved.</p>
        </footer>
      </body>
    </>
  );
}

export default Signup;
