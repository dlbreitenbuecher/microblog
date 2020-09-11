import {
  GET_POSTS_TITLES,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  SHOW_ERR
} from './actionTypes'
import axios from 'axios';

const POSTS_BASE_API_URL = "/api/posts"

/**Error handler */
export function showErr(msg) {
  return {type: SHOW_ERR, msg}
}

/**Get titles list for all posts from backend
 * 
 * [{id, title, description, votes}]
 */
export function getPostsTitlesFromAPI() {
  return async function(dispatch) {
    try{
      let res = await axios.get(`${POSTS_BASE_API_URL}/`);
      dispatch(gotPostsTitles(res.data));
    } catch(err) {
      dispatch(showErr(err.response.data));
    }
  }
}

/**Action to update store with post titles array */
export function gotPostsTitles(postsTitles) {
  return {
    type: GET_POSTS_TITLES,
    postsTitles
  }
}

/**Add new post */
export function addPost(post) {
  return{
    type: ADD_POST,
    post
  }
}


/**Update Post */
export function updatePost(updatePostID, updatePost) {
  return {
    type: UPDATE_POST,
    updatePostID,
    updatePost
  }
}


export function deletePost(deletePostID) {
  return {
    type: DELETE_POST,
    deletePostID
  }
}



export function addComment(postId, addComment) {
  //addComment comment using id, formData
  return {
    type: ADD_COMMENT,
    addComment,
    postId
  }
}


export function deleteComment(commentId, postId) {
  //delete comment using id
  return {
    type: DELETE_COMMENT,
    commentId, 
    postId
  }
}



