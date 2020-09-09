import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';


/**
 * Props:
 *  - addPost funtion received from parent
 * 
 * State: 
 *  -formData
 * 
 * App --> Routes --> NewPostForm
 */
function NewPostForm({addPost}) {
  const initialState = { title: "", description: "", body: "" }
  const [formData, setFormData] = useState(initialState)

  const history = useHistory();

  /* handle form change. */
  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData(fData => ({...fData, [name]: value}));
  }


  /* handle form submit. */
  function handleSubmit(evt) {
    evt.preventDefault();
    addPost(formData);
    setFormData(initialState);
    history.push("/");
  }


  return (
  <div className="newPostForm mb-4">
    <form className="newPostForm" onSubmit={handleSubmit} >
      <div>
      <label htmlFor="title"> Title</label>
      <input
        id="newPostForm-title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      </div>

      <div>
        <label htmlFor="description"> Description</label>
        <input
          id="newPostForm-description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="body">Body</label>
        <input
          id="newPostForm-body"
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


export default NewPostForm;