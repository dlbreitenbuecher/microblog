import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

/**
 * Props:
 *  - initialState: {title, description, body}
 *  - addPost funtion received from parent
 * 
 * State: 
 *  -formData
 * 
 * App --> Routes --> PostForm
 */
function PostForm(props) {
  const [formData, setFormData] = useState(props.initialState)

  const history = useHistory();

  /* handle form change. */
  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData(fData => ({...fData, [name]: value}));
  }


  /* handle form submit. */
  function handleSubmit(evt) {
    evt.preventDefault();
    props.addPost(formData);
    setFormData(props.initialState);
    history.push("/");
  }


  return (
  <div className="PostForm mb-4">
    <form className="PostForm" onSubmit={handleSubmit} >
      <div>
      <label htmlFor="PostForm-title"> Title</label>
      <input
        id="PostForm-title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      </div>

      <div>
        <label htmlFor="PostForm-description"> Description</label>
        <input
          id="PostForm-description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="PostForm-body">Body</label>
        <input
          id="PostForm-body"
          name="body"
          value={formData.body}
          onChange={handleChange}
        />
      </div>
    <button type="submit" className="btn btn-primary"> Save </button>
    <Link to="/" className="btn btn-primary" > Cancel </Link>
    </form>
  </div>)
}


export default PostForm;