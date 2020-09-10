import React, { useState } from 'react';

/**Renders comment form
 * 
 * Props: 
 * - addComment: fn to change state
 * - id: post id
 * 
 * State:
 * - formData {id, text, dateTime}
 */
function CommentForm(props){
  const initialFormData = {text: ''}
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(evt) {
    setFormData({text: evt.target.value});
    // const { name, value } = evt.target;
    // setFormData(fData => ({...fData, [name]: value}));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.addComment(props.id, formData);
    setFormData(initialFormData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='comment'>Add Comment</label>
      <input 
        id='text' 
        name='text' 
        value={formData.text}
        onChange={handleChange} 
      />
      <button>Add Comment</button>
    </form>
  )
}

export default CommentForm;