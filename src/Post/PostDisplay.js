import React from 'react';
import {useHistory} from "react-router-dom";


/**
 * Displays Post Details
 * Provides an edit and delete button

 * 
 * Route(/:postid) -> PostDisplay -> {EditForm, CommentForm}
 */
function PostDisplay({ postId, post, handleEditPost, handleDeletePost }) {
  console.log("this is post", post)
  const history = useHistory();

  function handleDelete(evt) {
    handleDeletePost(postId);
    history.push('/');
  }
 
  function handleEdit(evt) {
    handleEditPost()
  }

  //todo. why doesn't this work
  // const renderPostDisplay = (<div className="card-body">
  //   <h5 className="card-title"> {post.title}</h5>
  //   <p className="card-text">{post.description} </p>
  //   <p>{post.body}</p>
  //   <button onClick={handleEdit}>Edit Post</button>
  //   <button onClick={handleDelete}> Delete Post</button>
  //   <div/>)


  return (
    <div>
      {(  <div className="card-body">
          <h5 className="card-title"> {post.title}</h5>
          <p className="card-text">{post.description} </p>
          <p>{post.body}</p>
          <button onClick={handleEdit}>Edit Post</button>
          <button onClick={handleDelete}> Delete Post</button>

          <hr />
        </div>)
        }
    </div>
  )

}

export default PostDisplay;