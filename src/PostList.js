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
        <div class="card-body">
          <h5 class="card-title">
            <Link id={post.id}>{post.title} </Link>
          </h5>
          <p class="card-text">{post.description} </p>
        </div>
        //</div>
      )}
    </div>)

}

export default PostList;