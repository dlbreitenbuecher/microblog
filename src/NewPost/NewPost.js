import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PostForm from '../PostForm';
import { addPostWithAPI } from '../actions';

/**Renders PostForm for users to add a new post
 *
 * Dispatches addPost action to update store
 * Redirects user to homepage with history
 *
 * NewPost --> PostForm
 */
function NewPost() {
  const dispatch = useDispatch();
  const history = useHistory();

  function addNewPost(formData) {
    dispatch(addPostWithAPI(formData));
    history.push('/');
  }

  return (
    <div>
      <hr className='mt-5 mb-4' />
      <div className='col-md-6 offset-md-3 mb-4'>
        <h3 className='text-center mb-3'>New Post</h3>
        <div className='card'>
          <div className='card-body'>
            <div>
              <PostForm
                initialState={{
                  title: '',
                  description: '',
                  body: '',
                }}
                handleAddPost={addNewPost}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
