import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**Renders a Post Form component to add or edit a post
 *
 * Props:
 *  - initialState:
 *      {title, description, body}
 *  - handleAddPost: fn to either edit or add post to Redux store
 *
 * State:
 *  -formData
 *      {title, description, body}
 *
 * Upon submit, user is redirected to HomePage by history
 *
 * {NewPost, PostDisplay} --> PostForm
 */
function PostForm(props) {
  const [formData, setFormData] = useState(props.initialState);

  /* handle form change. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  }

  /* handle form submit. */
  function handleSubmit(evt) {
    evt.preventDefault();
    // console.log('this is evt', evt.target)
    // console.log("edit post form data", formData)
    // console.log('props.handleAddPost in PostForm:', props);
    props.handleAddPost(formData);
    setFormData(props.initialState);
  }

  return (
    <form className='PostForm mb-4 container' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='postform-title'> Title</label>
        <input
          id='postform-title'
          name='title'
          value={formData.title}
          onChange={handleChange}
          className='form-control'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='postform-description'> Description</label>
        <input
          id='postform-description'
          name='description'
          value={formData.description}
          onChange={handleChange}
          className='form-control'
        />
      </div>

      <div className='form-group'>
        <label htmlFor='postform-body'>Body</label>
        <textarea
          id='postform-body'
          name='body'
          value={formData.body}
          onChange={handleChange}
          className='form-control'
          rows={5}
        ></textarea>
      </div>
      <button type='submit' className='btn btn-primary mr-3'>
        {' '}
        Save{' '}
      </button>
      <Link to='/' className='btn btn-secondary'>
        {' '}
        Cancel{' '}
      </Link>
    </form>
  );
}

export default PostForm;
