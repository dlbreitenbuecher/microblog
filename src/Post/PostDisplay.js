import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { voteWithAPI } from '../actions';



/**Displays Post Details (title, description, body text)
 * Provides an edit and delete button
 *
 *Props:
 * - postId: string from uuid()
 * - post: {title, description, body, comments}
 * - handleEditPost: changes state in parent, 
 *                  which triggers Post to render PostForm 
 * - handleDeletePost: fn to delete post in backend and Redux store
 * 
 * After deleting a post, redirect user to HomePage using history
 * 
 * After editing a post, PostDetail rerenders for user
 * 
 * Route(/:postid) -> PostDisplay -> {EditForm, CommentForm}
 */
function PostDisplay({ postId, post, handleEditPost, handleDeletePost }) {
  //console.log("this is post", post)
  const history = useHistory();
  const dispatch = useDispatch();

  function handleDelete(evt) {
    handleDeletePost(postId);
    // TODO move to parent
    history.push('/');
  }

  function handleEdit(evt) {
    handleEditPost()
  }

  function handleUpVote(evt) {
    dispatch(voteWithAPI(post.id, 'up'));
  }

  function handleDownVote(evt) {
    dispatch(voteWithAPI(post.id, 'down'));
  }

  return (
    <div>
      <div className="card-body">
        <h5 className="card-title"> {post.title}</h5>
        <p className="card-text">{post.description} </p>
        <p>{post.body}</p>
        <button onClick={handleEdit}>Edit Post</button>
        <button onClick={handleDelete}> Delete Post</button>


        <div className="PostDisplay-votes">
          <b>{post.votes} votes:</b>

          <i 
            className="fas fa-thumbs-up text-success" 
            onClick={handleUpVote} 
          />
          <i 
            className="fas fa-thumbs-down text-danger" 
            onClick={handleDownVote} 
          />
        </div>

        <hr />
      </div>

    </div>
  )

}

export default PostDisplay;