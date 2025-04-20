import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Home from './components/Home';
import Survey from './components/Survey';
import Navbar from './components/NavBar';
import Profile from './components/Profile';
import Rating from './components/Rating';
import Survey1 from './components/Survey/Survey1';
import Data from './components/Data';
import UserList from './UserList';
import api from './api';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null); // State to manage logged-in user
  const [loading, setLoading] = useState(true); // New state for loading
  
  const location = useLocation(); // Get the current location

  // Don't render the Navbar on Login and Signup routes
  const noNavbarRoutes = ['/login', '/signup'];

   // Fetch the logged-in user on app mount
   useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await api.get('/current_user');
        if (response.data) {
          setLoggedInUser(response.data);
        } else {
          setLoggedInUser(null);
        }
      } catch (error) {
        console.error('Failed to fetch current user:', error);
        setLoggedInUser(null);
      } finally {
        setLoading(false); // Done fetching
      }
    };
    fetchCurrentUser();
  }, []);
  
  //Redirect to login page for users not logged in
  const requireAuth = (component) => {
    if (loading) return <div>Loading...</div>; // Show loading state while fetching
    return loggedInUser ? component : <Navigate to="/login" />;
  };

  return (
  <>
  <div className="App">
  {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
  <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={<Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={<Login onLogin={setLoggedInUser} />} // Pass setter function as prop
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />

          {/* Protected Routes */}
          <Route path="home" element={requireAuth(<Home currentUser={loggedInUser}/>)} />
          <Route path="survey" element={requireAuth(<Survey currentUser={loggedInUser}/>)} />
          <Route path="profile" element={requireAuth(<Profile currentUser={loggedInUser}/>)} />
          <Route path="rating" element={requireAuth(<Rating currentUser={loggedInUser}/>)} />
          <Route path="/survey1" element={requireAuth(<Survey1 currentUser={loggedInUser}/>)} />
          <Route path="/data" element={requireAuth(<Data currentUser={loggedInUser}/>)} />
          <Route path="/users" element={requireAuth(<UserList currentUser={loggedInUser} />)} />
        </Routes>
    </div>

    
  </>


  )
}

export default App;
