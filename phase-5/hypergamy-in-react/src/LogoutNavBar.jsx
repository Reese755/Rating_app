import { Link } from 'react-router-dom';

function LoggedOutNavBar(){
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
        </>
    )
}

export default LoggedOutNavBar;
