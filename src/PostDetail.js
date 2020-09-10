import React, {useState} from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import PostForm from "./PostForm";
import CommentForm from './CommentForm';

/**Displays Post Details
 * Provides an edit and delete button
 * 
 * Props:
 * - posts: [{id, title, description, body, comments},...]
 * - updatePost: fn from parent to edit post and save to state
 * - deletePost: fn from parent to delete post from state
 * 
 * State:
 * - none
 * 
 * Route(/:postid) -> PostDetail -> {EditForm, CommentForm}
 */
function PostDetail({ posts, updatePost, deletePost, addComment}) {
  const history = useHistory();
  const postId = useParams().postid;
  const [edit, setEdit] = useState(false);
  //console.log('this is posts', posts)

  let initialPostState;
  let post;
  if (postId){
    post = posts.find( post => post.id === Number(postId));
    
    initialPostState = {
      title: post.title,
      description: post.description,
      body: post.body,
      id: post.id
    }
  }

  // Handle post not found
  if(!post) {
    return (
      <div>
        <h3>Post not found!</h3>
        <Link to='/'>Please go back</Link>
      </div>
    )
  }

  function handleDelete(evt) {
    deletePost(postId);
    history.push('/');
  }


  function handleEdit(evt){
    setEdit(true);
  }



  // const renderPostDetail = (<div className="card-body">
  //   <h5 className="card-title"> {post.title}</h5>
  //   <p className="card-text">{post.description} </p>
  //   <p>{post.body}</p>
  //   <button onClick={handleEdit}>Edit Post</button>
  //   <button onClick={handleDelete}> Delete Post</button>
  //   <div/>)

  const comments = post.comments.map( comment => (
    <li key={comment.id}>{comment.text}</li>
  ))

  return(
    <div>
      {!edit && (
      <div className="card-body">
        <h5 className="card-title"> {post.title}</h5>
        <p className="card-text">{post.description} </p>
        <p>{post.body}</p>
        <button onClick={handleEdit}>Edit Post</button>
        <button onClick={handleDelete}> Delete Post</button>

        <hr />
        <CommentForm
          id={post.id}
          addComment={addComment}
        />
        <ul>
          {comments}
        </ul>


        </div>)}
      {edit && (<div>
                  <PostForm initialState={initialPostState}
                 savePost={updatePost}/>
                </div>
      )}
    </div>
  )

}

export default PostDetail;