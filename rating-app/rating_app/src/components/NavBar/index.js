import './navbar'



function NavBar() {


    return (
<header class="header-area">
  {/* <!-- site-navbar start --> */}
  <div className="navbar-area">
    <div className="navbar-container">
      <nav className="site-navbar">
        {/* <!-- site logo --> */}
        <img  src={logo} className="App-logo" alt="logo" />
        <Link to="/" className="hypergamy-logo">Hypergamy</Link>

        {/* <!-- site menu/nav --> */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/ratings">Ratings</Link></li>
          <li><Link to="/survey">Survey</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login" onClick={onLogout}> Logout</Link></li>
        </ul>

        {/* <!-- nav-toggler for mobile version only --> */}
        <button className="nav-toggler">
          <span></span>
        </button>
      </nav>
    </div>
  </div>
  {/* <!-- navbar-area end --> */}

</header> 
    )
}

export default NavBar;