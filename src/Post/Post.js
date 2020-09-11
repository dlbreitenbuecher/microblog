import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PostForm from '../PostForm';
import PostDisplay from './PostDisplay';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { deletePost, updatePost, deleteComment, addComment} from '../actions';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getFullPostDetailFromAPI} from '../actions'


/**Renders components related to viewing, editing, deleting, and commenting on posts
 * Communicates for its children components with the redux store
 *
 * Store:
 * - posts: [{id, title, description, body, comments},...]
 *      where comments is [{id, text},...]
 * 
 * Action Creators:
 * - updatePost: fn to edit post and save to state
 * - deletePost: fn to delete post from state
 * - deleteComment: fn to delete comment from state
 * - addComment: fn to add comments from state
 * 
 * Post --> CommentForm, CommentList, PostDisplay, PostForm 
 * 
*/
function Post() {
  const [edit, setEdit] = useState(false);
  const postId = useParams().postid;
  // console.log('this is postId from post.js', postId)

  //todo.
  //const comments = useSelector(store => store.posts[postId].comments)
  
  //todo. this is what I added
  let initialPostState;
  const post = useSelector(store => store.posts[postId], shallowEqual)
  const error = useSelector(store => store.error); 
  const dispatch = useDispatch();
  console.log('this is post from post.js', post)

  //todo. this is what I added
  //get full post data from api, with useEffect
  useEffect(() => {
    dispatch(getFullPostDetailFromAPI(postId))
  }, [dispatch])

  if (error) {
    return <h1> Sorry, can't load your post. Please try again later...</h1>
  }

  // Initial state for the form
  if (post) {
    initialPostState = {
      title: post.title,
      description: post.description,
      body: post.body,
      id: post.id,
      // comments: post.comments -I ADDED THIS LINE
    }
  }

  // Handle post if not found
  if (!post) {
    return (
      <div>
        <h3>Post not found!</h3>
        <Link to='/'>Please go back</Link>
      </div>
    )
  }

  /* Pass down to PostDisplay */
  function handleDeletePost(postId) {
    dispatch(deletePost(postId));
  }

  // TODO: Change name to setEditMode, etc... something that conveys state is changing, not that post is changing
  /* Pass down to PostDisplay */
  function handleEditPost() {
    setEdit(true);
  }


  /* Pass down to CommentList*/
  function handleDeleteComment(commentId) {
    dispatch(deleteComment(commentId, postId));
  }

  /* Pass down to CommentForm
  */
  function handleAddComment(comment) {
    //postId is from useParams()
    dispatch(addComment(postId, comment));
  }

  function updateOldPost(formData) {
    // console.log('postId in updateOldPost:', postId)
    dispatch(updatePost(postId, formData));
  }

 


  const oldPostdisplay = (
    <div>
      {!edit && (<div>
        <PostDisplay post={post}
          postId={postId}
          handleDeletePost={handleDeletePost}
          handleEditPost={handleEditPost} />

        <CommentForm postId={postId} handleAddComment={handleAddComment} />
        {/* this is old */}
        {/* <CommentList comments={comments} handleDeleteComment={handleDeleteComment}/> */}
        <CommentList comments={post.comments} handleDeleteComment={handleDeleteComment} />

      </div>)}
      {edit && (<div>
        <PostForm initialState={initialPostState}
          savePost={updateOldPost} />
      </div>
      )}
    </div>
  )

  return oldPostdisplay;
}


export default Post;