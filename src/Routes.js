import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import PostForm from './PostForm';
import PostDisplay from './Post/PostDisplay';

/**Router 
 * 
 * Props:
 *  - posts: 
 *      [{id, title, description, body},...]
 *  - updatePost: fn to update post in state held in app
 *  - addPost: fn to add post in state held in app
 *  - deletePost: fn to delete post in state held in app
 * 
 * State: 
 *  - none
 * 
 * App -> Routes -> {HomePage, PostForm, PostDisplay}
*/
function Routes({ posts, updatePost, addPost, deletePost, addComment, deleteComment}) {
  return (
    <div className='Routes'>
      <Switch>
        <Route exact path='/'>
          <HomePage posts={posts}/>
        </Route>
        <Route exact path='/new'>
          <PostForm 
            savePost={addPost}
            initialState={{title: "", description: "", body: "" }}
          />
        </Route>
        <Route path='/:postid'>
          <PostDisplay
            posts={posts}
            deletePost={deletePost}
            updatePost={updatePost}
            addComment={addComment}
            deleteComment={deleteComment}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes;