import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PostForm from '../PostForm';
import { addPost } from '../actions';


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
    dispatch(addPost(formData));
    history.push("/");
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