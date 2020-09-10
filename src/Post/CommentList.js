import React from 'react';



/**
 * 
 * Gets comments from state
 * 
 * Post --> CommentList
 * 
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