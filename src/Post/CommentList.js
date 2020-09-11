import React from 'react';


/**Renders a list of comments for a post
 * 
 * Props:
 * - comments: [{id, text},...]
 * - handleDeleteComment - fn to remove comment from Redux store
 * 
 * Post --> CommentList
*/
function CommentList({ comments, handleDeleteComment}) {

  
  function handleDelete(evt) {
    //console.log('evt.target', evt.target)
    handleDeleteComment(evt.target.id);
  }

  const renderCommentsList = comments.map(comment => (
    <li key={comment.id}>{comment.text}
      <button id={comment.id} onClick={handleDelete}>Delete</button>
    </li>
  ))
 
  return (<div>
    {renderCommentsList}
  </div>)
}


export default CommentList;