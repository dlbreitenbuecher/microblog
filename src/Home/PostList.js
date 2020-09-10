import React, { useState } from 'react';
import { Link } from 'react-router-dom';


/**
 * Renders list of posts.
 * 
 * Props: 
 *  - posts: array of post objects
 *   [{id, title, description, body},...]
 * 
 * { 
 *  id: {title, description, body, comments },...
 * }
 * 
 * App --> Routes --> Homepage --> PostList
 */
function PostList({ posts }) {

  const postCards = Object.keys(posts).map( id => (
      <div className="card-body" key={id}> 
        <h5 className="card-title">
          <Link to={`/${id}`} id={id}>{posts[id].title} </Link>
        </h5>
        <p className="card-text">{posts[id].description} </p>
      </div>
    ))


  return (
    <div>
      {postCards}
    </div>
  )
}

export default PostList;