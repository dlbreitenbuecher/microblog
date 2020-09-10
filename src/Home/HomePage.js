import React, { useState } from 'react';
import PostList from './PostList';
import { useSelector } from 'react-redux';


/**
 * Renders PostList component.
 * 
 * Props: 
 *  - posts
 * 
 * State: 
 *  - None
 * 
 * App --> Homepage
 * 
 */
function HomePage(){
  const posts = useSelector ( store => store.posts);


  return(
    <div>
      <h5> Welcome to Microblog, this is our site!</h5>
      <PostList posts={posts}/>
    </div>
  )
}

export default HomePage;