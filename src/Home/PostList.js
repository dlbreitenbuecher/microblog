import React, { useState } from 'react';
import { Link } from 'react-router-dom';


/**
 * Renders condensed list of posts titles
 * 
 * Props: 
 *  - titles: array of post titles objects
 *   [{id, title, description, votes},...]
 * 
 * 
 * App --> Routes --> Homepage --> PostList
 */
function PostList({ titles }) {

  const postsTitlesCards = titles.map(title => (
    <div className="card col-md-6 offset-md-3" key={title.id}>
      <div className='card-body'>
      <h5 className="card-title">
        <Link to={`/${title.id}`} id={title.id}>{title.title} </Link>
      </h5>
      <p className="card-text">{title.description} </p>
      </div>
    </div>
  ))

  return (
    <div>
      {postsTitlesCards}
    </div>
  )
}

export default PostList;