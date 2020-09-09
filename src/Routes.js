import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import NewPostForm from './NewPostForm';
import PostDetail from './PostDetail';

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
 * App -> Routes -> {HomePage, NewPostForm, PostDetail}
*/
function Routes({ posts, updatePost, addPost, deletePost }) {
  return (
    <div className='Routes'>
      <Switch>
        <Route exact path='/'>
          <HomePage posts={posts}/>
        </Route>
        <Route exact path='/new'>
          <NewPostForm addPost={addPost}/>
        </Route>
        <Route path='/:postid'>
          <PostDetail
            deletePost={deletePost}
            updatePost={updatePost}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes;