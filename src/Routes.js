import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Home/HomePage';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';

/**Router 
 *
 * App -> Routes -> {HomePage, NewPost, PostDisplay}
*/
function Routes() {
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
          <Post />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes;