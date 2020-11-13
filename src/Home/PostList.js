import React from 'react';
import { Link } from 'react-router-dom';
import { voteWithAPI } from '../actions';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();

  function handleUpVote(evt) {
    dispatch(voteWithAPI(evt.target.id, 'up'));
  }

  function handleDownVote(evt) {
    dispatch(voteWithAPI(evt.target.id, 'down'));
  }

  const postsTitlesCards = titles.map(title => (
    <div className="card col-md-6 offset-md-3" key={title.id}>
      <div className='card-body'>
        <h5 className="card-title">
          <Link to={`/${title.id}`} id={title.id}>{title.title} </Link>
        </h5>
        <p className="card-text">{title.description} </p>

        <div className="PostList-votes">
          <b>{title.votes} votes:</b>

          <i 
            className="fas fa-thumbs-up text-success" 
            id={title.id}
            onClick={handleUpVote} 
          />
          <i 
            className="fas fa-thumbs-down text-danger" 
            id={title.id}
            onClick={handleDownVote} 
          />
        </div>


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