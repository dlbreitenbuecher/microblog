import React from 'react';
import { NavLink } from 'react-router-dom';

/**NavBar
 *
 * App -> NavBar
 */
function NavBar() {
  return (
    // <div className="NavBarjumbotron bg-light">
    //   <h1 className="display-4">Microblog</h1>
    //   <p className="lead">Get in the Rithm of blogging!</p>
    <nav className="NavBar navbar navbar-expand-md pl-0 justify-content-center">
      <ul className="navbar-nav">
        <li className="nav-item mr-4">
          <NavLink to="/" className="navbar-brand">
            Blog
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink to="/new" className="nav-link">
            New Post
          </NavLink>
        </li>
      </ul>
    </nav>
    // </div>
  );
}

export default NavBar;
