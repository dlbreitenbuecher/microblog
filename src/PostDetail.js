import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

/**Displays Post Details
 * Provides an edit and delete button
 * 
 * Props:
 * - posts: [{id, title, description, body},...]
 * - updatePost: fn from parent to edit post and save to state
 * - deletePost: fn from parent to delete post from state
 * 
 * State:
 * - none
 * 
 * Route(/:postid) -> PostDetail
 */
function PostDetail({ posts, updatePost, deletePost}) {
  const history = useHistory();
  const postId = useParams();
  const post = posts.find( post => post.id === postId);
  const initialState = {
    title: post.title,
    description: post.description,
    body: post.body
  }
  // Handle post not found
  if(!post) {
    return (
      <div>
        <h3>Post not found!</h3>
        <Link to='/'>Please go back</Link>
      </div>
    )
  }

  function handleDelete(evt) {
    deletePost(postId);
    history.push('/');
  }

  function displayEditForm(evt) {
    return(
      <PostForm initialState={initialState}
    )
  }

}