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
function App({ samplePosts }) {
  const [posts, setPosts] = useState(samplePosts)
  console.log('this is posts', posts)

  function addPost(formData) {
    let newPost = {...formData, id: uuid()}
    setPosts(posts => [...posts, newPost])
  }

  function updatePost() {
    return null;
  }

  function deletePost(postId) {
    const updatedPosts = posts.filter( post => (
      post.id !== postId
    ))
    setPosts(updatedPosts);
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

App.defaultProps = {
  samplePosts: [
    {
      id: 1,
      title: 'Welcome to Microblog!',
      description: 'user guide',
      body: 'Blog to your heart\'s content'
    },
    {
    id: 2,
    title: "Bluegrass Festival",
    description: 'Archives from our previous years are still available',
    body: 'Check out our live performance archives (since we started streaming in 2012)'
    }
  ]
}

export default App;
