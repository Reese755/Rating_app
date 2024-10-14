import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Home from './components/Home';
import Survey from './components/Survey';
import Navbar from './components/NavBar';
import Profile from './components/Profile';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

function App() {
  
  const location = useLocation(); // Get the current location

  // Don't render the Navbar on Login and Signup routes
  const noNavbarRoutes = ['/login', '/signup'];


  return (
  <>
  <div className="App">
  {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="home" element={<Home/>}/>
      <Route path="login" element={<Login />}/>
      <Route path="signup" element={<Signup />}/>
      <Route path="about" element={<About />}/>
      <Route path="survey" element={<Survey />}/>
      <Route path="profile" element={<Profile />}/>
    </Routes>
    </div>
  </>


  )
}

export default App;
