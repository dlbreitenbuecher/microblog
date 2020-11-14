import React from 'react';
import './CommentList.css';


/**Renders a list of comments for a post
 * 
 * Props:
 * - comments: [{id, text},...]
 * - handleDeleteComment - fn to remove comment from Redux store
 * 
 * Post --> CommentList
*/
function CommentList({ comments, handleDeleteComment }) {

  function handleDelete(evt) {
    //console.log('evt.target', evt.target)
    handleDeleteComment(evt.target.id);
  }

  const renderCommentsList = comments.map(comment => (
    <p key={comment.id}>{comment.text}
      <i 
        id={comment.id} 
        onClick={handleDelete}
        className='fa fa-times text-danger ml-2 cursor-pointer'
      />
    </p>
  ))

  return (
    <div>
      {renderCommentsList}
    </div>
  )
}


export default CommentList;