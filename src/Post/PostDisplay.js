import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { voteWithAPI } from '../actions';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import './PostDisplay.css';

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
function PostDisplay({
  postId,
  post,
  handleEditPost,
  handleDeletePost,
  comments,
  handleDeleteComment,
  handleAddComment,
}) {
  //console.log("this is post", post)
  const history = useHistory();
  const dispatch = useDispatch();

  function handleDelete(evt) {
    handleDeletePost(postId);
    // TODO move to parent
    history.push('/');
  }

  function handleEdit(evt) {
    handleEditPost();
  }

  function handleUpVote(evt) {
    dispatch(voteWithAPI(post.id, 'up'));
  }

  function handleDownVote(evt) {
    dispatch(voteWithAPI(post.id, 'down'));
  }

  // return (
  //   <div>
  //     <div className="card-body">
  //       <h5 className="card-title"> {post.title}</h5>
  //       <p className="card-text">{post.description} </p>
  //       <p>{post.body}</p>
  //       <button onClick={handleEdit}>Edit Post</button>
  //       <button onClick={handleDelete}> Delete Post</button>

  //       <div className="PostDisplay-votes">
  //         <b>{post.votes} votes:</b>

  //         <i
  //           className="fas fa-thumbs-up text-success"
  //           onClick={handleUpVote}
  //         />
  //         <i
  //           className="fas fa-thumbs-down text-danger"
  //           onClick={handleDownVote}
  //         />
  //       </div>

  //       <hr />
  //     </div>

  //   </div>
  // )

  // return (
  //   <div className='PostDisplay'>
  //     <div>
  //       <h2>{post.title}</h2>
  //       <p><i>{post.description}</i></p>
  //       <div>
  //         {post.body}
  //       </div>
  //     </div>

  //     <div className='PostDisplay-right'>
  //       <div className='PostDisplay-eidt-area'>
  //         <i
  //           className='fas fa-edit text-primary'
  //           onClick={handleEdit}
  //         />
  //         <i
  //           className='fas fa-times text-danger'
  //           onClick={handleDelete}
  //         />
  //       </div>

  //       <div className='PostDisplay-votes'>
  //         <b>{post.votes} votes:</b>
  //         <i
  //           className='fas fa-thumbs-up text-success'
  //           onClick={handleUpVote}
  //         />
  //         <i
  //           className='fas fa-thumbs-down text-danger'
  //           onClick={handleDownVote}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // )

  return (
    <div className='PostDisplay col-md-8 offset-md-2 mt-5 mb-4'>
      <div className='card'>
        <div className='card-body text-center'>
          <h3 className='card-title mb-3'>{post.title}</h3>
          <p className='card-subtitle text-muted mb-3'>
            {post.description}
          </p>

          <div className='PostDisplay-edit'>
            <i
              className='fas fa-edit text-primary pr-3 mb-3 cursor-pointer'
              onClick={handleEdit}
            />
            <i
              className='fas fa-times text-danger cursor-pointer'
              onClick={handleDelete}
            />
          </div>

          <div className='PostDisplay-body'>{post.body}</div>

          <hr className='mt-4' />

          <div className='PostDisplay-votes mt-4'>
            <p className='d-inline-block text-muted pr-2 mb-4'>
              {post.votes} votes
            </p>
            <i
              className='fas fa-thumbs-up text-success ml-2 pr-1 cursor-pointer'
              onClick={handleUpVote}
            />
            <i
              className='fas fa-thumbs-down text-danger ml-2 cursor-pointer'
              onClick={handleDownVote}
            />
          </div>

          <div className='PostDisplay-comments card-footer'>
            <h5 className='mb-3'>Comments</h5>
            <CommentList
              comments={comments}
              handleDeleteComment={handleDeleteComment}
            />
            <CommentForm
              postId={postId}
              handleAddComment={handleAddComment}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDisplay;
