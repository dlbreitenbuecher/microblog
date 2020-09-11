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



