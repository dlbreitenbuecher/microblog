import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

/**Renders a Post Form component to add or edit a post
 * 
 * Props:
 *  - initialState: 
 *      {title, description, body}
 *  - savePost: fn to either edit or add post to Redux store
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
      // console.log('this is evt', evt.target)
      // console.log("edit post form data", formData)
      // console.log('props.savePost in PostForm:', props);
      props.savePost(formData);
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
        <textarea
          id="PostForm-body"
          name="body"
          value={formData.body}
          onChange={handleChange}
        ></textarea>
      </div>
    <button type="submit" className="btn btn-primary"> Save </button>
    <Link to="/" className="btn btn-primary" > Cancel </Link>
    </form>
  </div>)
}


export default PostForm;