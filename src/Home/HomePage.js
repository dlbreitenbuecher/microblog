import React, { useEffect } from 'react';
import PostList from './PostList';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getPostsTitlesFromAPI } from '../actions';

/**
 * Renders PostList component.
 *
 * Props:
 *  - posts
 *
 * State:
 *  - None
 *
 * App --> Homepage --> PostList
 *
 */
function HomePage() {
  const titles = useSelector((store) => store.titles, shallowEqual);
  const error = useSelector((store) => store.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsTitlesFromAPI());
  }, [dispatch]);

  if (error) {
    return (
      <h1 className='text-center'>
        {' '}
        Can't load your post. Please try again later...
      </h1>
    );
  }

  return (
    <div>
      <h5 className='text-center my-4'> Welcome to Microblog!</h5>
      <hr className='mb-4' />
      <PostList titles={titles} />
    </div>
  );
}

export default HomePage;
