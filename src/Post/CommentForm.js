import React, { useState } from 'react';

/**Renders comment form
 * 
 * Props: 
 * - addComment: fn to change state
 * - id: post id
 * 
 * State:
 * - comment {id, text, dateTime}
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