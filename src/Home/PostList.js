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
    <div className="col-sm-6 col-md-4" key={title.id}>
      <div className='card text-center'>
      <div className='card-body'>
        <h5 className="card-title mb-3">
          <Link to={`/${title.id}`} id={title.id}>{title.title} </Link>
        </h5>
        <p className="card-subtitle mb-4 text-muted">{title.description}</p>
        <div className="PostList-votes card-footer">
          <p className='d-inline-block text-muted pr-2 mb-0'>{title.votes} votes</p>

          <i
            className="fas fa-thumbs-up text-success ml-2 pr-1"
            id={title.id}
            onClick={handleUpVote}
          />
          <i
            className="fas fa-thumbs-down text-danger ml-2"
            id={title.id}
            onClick={handleDownVote}
          />
        </div>
      </div>
    </div>
    </div>
  ))

  return (
    <div className='row justify-content-center'>
      {postsTitlesCards}
    </div>
  )

  // const postsTitlesCards = titles.map(title => (
  //   <div className="col" key={title.id}>
  //     <div className='card'></div>
  //     <div className='card-body'>
  //       <h5 className="card-title">
  //         <Link to={`/${title.id}`} id={title.id}>{title.title} </Link>
  //       </h5>
  //       <p className="card-text">{title.description}</p>
  //       <div className="PostList-votes card-footer">
  //         <p className='float-left text-muted pr-2'>{title.votes} votes</p>

  //         <i
  //           className="fas fa-thumbs-up text-success ml-2 pr-1"
  //           id={title.id}
  //           onClick={handleUpVote}
  //         />
  //         <i
  //           className="fas fa-thumbs-down text-danger ml-2"
  //           id={title.id}
  //           onClick={handleDownVote}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // ))

  // return (
  //   <div className='row'>
  //     {postsTitlesCards}
  //   </div>
  // )
}

export default PostList;