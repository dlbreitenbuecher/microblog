import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT} from './actionTypes'


/**Add new post */
export function addPost(post) {
  return{
    type: ADD_POST,
    post
  }
}


/**Update Post */
export function updatePost(updatePost) {
  return {
    type: UPDATE_POST,
    updatePost
  }
}


export function deletePost(deletePost) {
  return {
    type: DELETE_POST,
    deletePost
  }
}



export function addComment(addComment) {
  //addComment comment using id, formData
  return {
    type: ADD_COMMENT,
    addComment
  }
}


export function deleteComment(deleteComment) {
  //delete comment using id
  return {
    type: DELETE_COMMENT,
    deleteComment
  }
}



