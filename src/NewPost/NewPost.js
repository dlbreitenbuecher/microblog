import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PostForm from '../PostForm';
import { addPostWithAPI } from '../actions';


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
    <hr className='mt-5 mb-4' />
    <h1 className='pl-3 mb-3'>New Post</h1>
    <PostForm 
      initialState={{ title: "", description: "", body: "" }} 
      handleAddPost={addNewPost}
    /> 
  </div>)
}


export default NewPost;