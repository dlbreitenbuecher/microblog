import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';

/**App
 * 
 * Props:
 * - none
 * 
 * State:
 * - posts: array of post objects
 *   [{id, title, description, body},...]
 * 
 * App -> {NavBar, Routes}
 */
function App() {
  const [posts, setPosts] = useState([])

  function addPost() {
    return null;
  }

  function updatePost() {
    return null;
  }

  function deletePost() {
    return null;
  }
  return (
    <div className="App container">
      <BrowserRouter>
        <NavBar />
        <Routes 
          posts={posts}
          addPost={addPost}
          updatePost={updatePost}
          deletePost={deletePost}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
