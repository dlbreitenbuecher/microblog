import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import PostForm from '../PostForm';
import PostDisplay from './PostDisplay';
import {
  getFullPostDetailFromAPI,
  deletePostFromAPI,
  updatePostWithAPI,
  addCommentWithAPI,
  deleteCommentFromAPI,
} from '../actions';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import './Post.css';

/**Renders components related to viewing, editing, deleting, and commenting on posts
 * Communicates for its children components with the redux store
 *
 * Store:
 * - posts: [{id, title, description, body, comments},...]
 *      where comments is [{id, text},...]
 *
 * Action Creators:
 * - updatePostWithAPI: Redux Thunk to update edited post in backend and Redux store
 * - deletePostFromAPI: Redux Thunk to delete a post from backend and Redux store
 * - deleteCommentFromAPI: Redux Thunk to delete a comment from backend and Redux store
 * - addCommentWithAPI: Redux Thunk to add a comment to backend and Redux store
 *
 * Post --> CommentForm, CommentList, PostDisplay, PostForm
 *
 */
function Post() {
  const [edit, setEdit] = useState(false);
  const postId = useParams().postid;

  const post = useSelector(
    (store) => store.posts[postId],
    shallowEqual,
  );
  const error = useSelector((store) => store.error);
  const dispatch = useDispatch();
  const history = useHistory();
  //console.log('this is post from post.js', post)

  /*get full post data from api, with useEffect*/
  useEffect(
    function getPostDataFromAPI() {
      async function getPost() {
        dispatch(getFullPostDetailFromAPI(postId));
      }
      if (!post || post.title === undefined) {
        getPost();
      }
    },
    [dispatch, postId, post],
  );

  if (error) {
    return (
      <div>
        <h1>
          {' '}
          Sorry, can't load your post. Please try again later...
        </h1>
        <Link to="/">Please go back</Link>
      </div>
    );
  }

  let initialPostStateForForm;
  // Initial state for the form
  if (post) {
    initialPostStateForForm = {
      title: post.title,
      description: post.description,
      body: post.body,
      id: post.id,
    };
  }

  /* Pass down to PostDisplay */
  function handleDeletePost(postId) {
    dispatch(deletePostFromAPI(postId));
  }

  /* Pass down to PostDisplay */
  function handleEditPost() {
    setEdit(true);
  }

  /* Pass down to CommentList*/
  function handleDeleteComment(commentId) {
    dispatch(deleteCommentFromAPI(postId, commentId));
  }

  /* Pass down to CommentForm */
  function handleAddComment(text) {
    //postId is from useParams()
    dispatch(addCommentWithAPI(postId, text));
  }

  function handleAddPost(formData) {
    // console.log('postId in updateOldPost:', postId)
    dispatch(updatePostWithAPI(postId, formData));
    setEdit(false);
    history.push(`/${postId}`);
  }

  if (!post || post.title === undefined) return <h1>Loading...</h1>;

  return (
    <div className="Post">
      {edit ? (
        <PostForm
          initialState={initialPostStateForForm}
          handleAddPost={handleAddPost}
        />
      ) : (
        <PostDisplay
          post={post}
          postId={postId}
          handleDeletePost={handleDeletePost}
          handleEditPost={handleEditPost}
          comments={post.comments}
          handleDeleteComment={handleDeleteComment}
          handleAddComment={handleAddComment}
        />
      )}
    </div>
  );
}

export default Post;

//todo. need different loading
// Handle post if not found
// This gets renders first bc nothings gets assigned to post
// then once it finishes, useEffect gets run, then
// commentList and others in main return statement gets rendered
// 3 stages of our request:
//i found it, looked and didn't find, i'm loading

// Message to display if post is not found
// if (!post) {
//   return (
//     <div>
//       <h3>Post not found!</h3>
//       <Link to='/'>Please go back</Link>
//     </div>
//   )
// }
