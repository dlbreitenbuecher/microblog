import React from 'react';
import { useDispatch } from 'react-redux';
import PostForm from '../PostForm';
import { addPost } from '../actions';


/**Renders PostForm for users to add a new post
 * 
 * Dispatches addPost action to update store
 * 
 * NewPost --> PostForm 
*/
function NewPost(){
  const dispatch = useDispatch();

  function addNewPost(formData) {
    dispatch(addPost(formData));
  }

  return(
  <div>
    PostForm
    <PostForm 
      initialState={{ title: "", description: "", body: "" }} 
      savePost={addNewPost}
    /> 
  </div>)
}


export default NewPost;