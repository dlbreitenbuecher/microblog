import React, { useState } from 'react';
import { Link } from 'react-router-dom';


/**
 * Renders list of posts.
 * 
 * Props: 
 *  - posts: array of post objects
 *   [{id, title, description, body},...]
 * 
 * App --> Routes --> Homepage --> PostList
 */
function PostList({ posts }) {


  return (
    <div>
      {posts.map(post =>
        // <div class="card" style="width: 18rem;">
        <div className="card-body" key={post.id}> 
          <h5 className="card-title">
            <Link to={`/${post.id}`} id={post.id}>{post.title} </Link>
          </h5>
          <p className="card-text">{post.description} </p>
        </div>
        //</div>
      )}
    </div>)

}

export default PostList;