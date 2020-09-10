import React from 'react';
import PostForm from '../PostForm';
import CommentForm from './CommentForm';
import PostDisplay from './PostDisplay';


/**
 * 
 * Post --> CommentForm, CommentList, PostDisplay, PostForm 
 * 
*/
function Post() {

  //todo. make sure to pass in correct state from store
  return (<div>
    <CommentForm />
    <CommentList />
    <PostDisplay />
    <PostForm />
  </div>)
}


export default Post;