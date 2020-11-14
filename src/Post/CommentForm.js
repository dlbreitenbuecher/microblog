import React, { useState } from 'react';

/**Renders comment form
 *
 * Props:
 * - handleAddComment: fn to change Redux state
 *
 * State:
 * - comment {id, text}
 */
function CommentForm(props) {
  const initialFormData = { text: '' };
  const [comment, setComment] = useState(initialFormData);

  function handleChange(evt) {
    setComment({ text: evt.target.value });
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
          size='50'
          placeholder='New Comment'
          className='form-control col-md-8 mx-auto d-inline-block'
        />
        <button className='btn btn-success ml-3'>Add</button>
      </div>
    </form>
  );
}

export default CommentForm;
