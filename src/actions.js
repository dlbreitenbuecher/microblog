import {
  GET_POSTS_TITLES,
  GET_POST_DETAIL,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  SHOW_ERROR
} from './actionTypes'
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';
const API_URL = `${BASE_URL}/api/posts`

/**Error handler */
export function showError(msg) {
  return {type: SHOW_ERROR, msg}
}

/**Get titles list for all posts from backend
 * 
 * [{id, title, description, votes}]
 */
export function getPostsTitlesFromAPI() {
  //console.log("getPostsTitlesFromAPI ran")
  return async function(dispatch) {
    try{
      const res = await axios.get(`${API_URL}/`);
      //console.log("this is res form getPostsTitlesFromAPI in actions", res.data)
      dispatch(gotPostsTitles(res.data));
    } catch(err) {
      dispatch(showError(err.response.data));
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


/**Get full detail of post 
 * 
 * {"id", "title", "description", "body", "votes", "comments": [{"id", "text"}, ..]}
*/
export function getFullPostDetailFromAPI(postId){
  //console.log("getFullPostDetailFromAPI ran")
  return async function(dispatch){
    try{
      const res = await axios.get(`${API_URL}/${postId}`);
      dispatch(gotPostDetail(res.data))
    }catch(err){
      dispatch(showError(err.response.data));
    }
  }
}

/**Action to update store with full post detail object */
export function gotPostDetail(fullPostDetail) {
  console.log('what is fullPostDetail', fullPostDetail)
  return {
    type: GET_POST_DETAIL,
    fullPostDetail
  }
}


/**Add new post object to the store */
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


/**Add a new comment to the backend for a paticular post
 * 
 * res.data is a new comment object returned from the backend
 *    { id, text }
 */

export function addCommentWithAPI(postId, text) {
  return async function(dispatch) {
    try {
      const res = await axios.post(`${API_URL}/${postId}/comments`, { text });
      dispatch(addComment(postId, res.data));
    } catch (err) {
      dispatch(showError(err.response.data));
    }
  }
}


export function addComment(postId, comment) {
  //addComment comment using id, formData
  return {
    type: ADD_COMMENT,
    comment,
    postId
  }
}

/**Deletes a comments in the backend for a particular post
 * 
 * res.data = { message: deleted }
 */
export function deleteCommentWithAPI(postId, commentId) {
  return async function (dispatch) {
    try {
      await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
      dispatch(deleteComment(postId, commentId));
    } catch (err) {
      dispatch(showError(err.response.data));
    }
  }
}

export function deleteComment(postId, commentId) {
  //delete comment using id
  return {
    type: DELETE_COMMENT,
    commentId, 
    postId
  }
}



