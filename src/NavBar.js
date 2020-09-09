import React from 'react';
import { NavLink } from 'react-router-dom';

/**NavBar
 * 
 * App -> NavBar
 */
function NavBar() {


  return (
  <div class="NavBarjumbotron bg-light">
    <h1 class="display-4">Microblog</h1>
    <p class="lead">Get in the Rithm of blogging!</p>
    <nav className='NavBar navbar'>
      <NavLink to='/' className='navitem'>
        Blog
      </NavLink>
      <NavLink to='/new' className='navitem'>
        Add a New Post
      </NavLink>
    </nav>
  </div>
  )

  
}

export default NavBar;