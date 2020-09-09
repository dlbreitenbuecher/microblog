import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';
import {v4 as uuid} from "uuid";

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
  console.log('this is posts', posts)

  function addPost(formData) {
    let newPost = {...formData, id: uuid()}
    setPosts(posts => [...posts, newPost])
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
