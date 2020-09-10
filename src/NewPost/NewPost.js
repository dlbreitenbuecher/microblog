import React from 'react';
import PostForm from '../PostForm';


/**
 * 
 * NewPost --> PostForm 
 * 
*/
function NewPost(){




  return(<div>
    PostForm
    <PostForm initialState={{ title: "", description: "", body: "" }} /> 
  </div>)
}


export default NewPost;