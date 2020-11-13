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
    props.handleAddComment(comment.text);
    setComment(initialFormData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <input 
          id='commentform' 
          name='text'
          value={comment.text}
          onChange={handleChange} 
          size='30' 
          placeholder='New Comment'
          className='form-control'
        />
      </div>
      <button className='btn btn-success'>Add Comment</button>
    </form>
  )
}

export default CommentForm;