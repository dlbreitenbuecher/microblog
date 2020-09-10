import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Home/HomePage';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

/**Router 
 * 
 * Props:
 *  - updatePost: fn to update post in state held in app
 *  - addPost: fn to add post in state held in app
 *  - deletePost: fn to delete post in state held in app
 * 
 * State: 
 *  - none
 * 
 * App -> Routes -> {HomePage, NewPost, PostDisplay}
*/
function Routes({ deletePost, addComment, deleteComment}) {
  return (
    <div className='Routes'>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/new'>
          <NewPost />
        </Route>
        <Route path='/:postid'>
          <Post
            addComment={addComment}
            deleteComment={deleteComment}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes;