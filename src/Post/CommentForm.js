import React, { useState } from 'react';

/**Renders comment form
 * 
 * Props: 
 * - handleAddComment: fn to change Redux state
 * 
 * State:
 * - comment {id, text}
 */
function CommentForm(props){
  const initialFormData = {text: ''}
  const [comment, setComment] = useState(initialFormData);

  function handleChange(evt) {
    setComment({text: evt.target.value});
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.handleAddComment(comment);
    setComment(initialFormData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='comment'>Add Comment</label>
      <input 
      // TODO: Change id name!!!
        id='text' 
        name='text' 
        value={comment.text}
        onChange={handleChange} 
      />
      <button>Add Comment</button>
    </form>
  )
}

export default CommentForm;