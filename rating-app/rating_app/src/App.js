import './App.css';
import Login from './components/Login';
import About from './components/About';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
  <>

    <Routes>
      <Route path="Login" element={<Login />}/>
      <Route path="About" element={<About />}/>
    </Routes>
  </>


  )
}

export default App;
