import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PostForm from '../PostForm';
import { addPostWithAPI } from '../actions';
import './NewPost.css';


/**Renders PostForm for users to add a new post
 * 
 * Dispatches addPost action to update store
 * Redirects user to homepage with history
 * 
 * NewPost --> PostForm 
*/
function NewPost(){
  const dispatch = useDispatch();
  const history = useHistory();

  function addNewPost(formData) {
    dispatch(addPostWithAPI(formData));
    history.push("/");
  }

  return(
  <div>
    <h1 className='pl-3 mb-3 NewPost-form'>New Post</h1>
    <PostForm 
      initialState={{ title: "", description: "", body: "" }} 
      handleAddPost={addNewPost}
    /> 
  </div>)
}


export default NewPost;