import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';
import { v4 as uuid } from "uuid";

/**App
 * 
 * Props:
 * - none
 * 
 * State:
 * - posts: array of post objects
 *   [{id, title, description, body, comments},...]
 *        WHERE comments is an array of comment objects
 *            [{id, text, dateTime},...]
 * 
 * App -> {NavBar, Routes}
 */
function App({ samplePosts }) {
  const [posts, setPosts] = useState(samplePosts)
  console.log('this is posts', posts)



  /**Update Post */
  function updatePost(formData) {
    console.log("edit post form dataApppp", formData)
    let newPost = { ...formData }

    //todo. ask about this!!
    let oldPosts = posts.filter(post => post.id !== formData.id)
    console.log('oldPosts oldPosts', oldPosts)

    //add in the new one
    setPosts([...oldPosts, newPost])
  }


  function deletePost(postId) {
    const updatedPosts = posts.filter(post => (
      post.id !== Number(postId)
    ))
    setPosts(updatedPosts);
  }

 

  function addComment(id, formData) {
    let newComment = { ...formData, id: uuid(), dateTime: new Date()}
    setPosts( posts => (
      posts.map( post => (
        post.id === id 
        ? {...post, comments: [...post.comments, newComment]}
        : post
      )
    )))
  }


  function deleteComment(id){
    console.log('this si commentid', id)

    setPosts(posts => (
      posts.map( post => (
        { ...post, comments: post.comments.filter( comment => comment.id !== id )})
      )))
  }



  return (
    <div className="App container">
      <BrowserRouter>
        <NavBar />
        <Routes
          posts={posts}
          updatePost={updatePost}
          deletePost={deletePost}
          addComment={addComment}
          deleteComment={deleteComment}
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
      body: 'Blog to your heart\'s content',
      comments: []
    },
    {
      id: 2,
      title: "Bluegrass Festival",
      description: 'Archives from our previous years are still available',
      body: 'Check out our live performance archives (since we started streaming in 2012)',
      comments:[]
    }
  ]
}

export default App;


//Another method to write comments:
 // function addComment1(id, formData) {
  //   let newComment = { ...formData, id: uuid(), dateTime: new Date()}
  //   // find relevant post and update its comments
  //   const updatedPosts = posts.map( post => {
  //     if(post.id === id) {
  //       let updatedComments = [...post.comments, newComment]
  //       return {...post, comments: updatedComments};
  //     } else {
  //       return post 
  //     }
  //   })

  //   setPosts(updatedPosts);
  // }