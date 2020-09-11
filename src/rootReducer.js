import {
  GET_POSTS_TITLES,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes'

import { v4 as uuid } from "uuid";

  /**
   * State = {
   * posts: {
   *  id: {title, description, body, comments}
   * }
   * titles: [{id, title, description},...]
   * }
   * 
   */
  const DEFAULT_STATE = {
    posts: {},
    titles: []
  }

  function rootReducer(state=DEFAULT_STATE, action){
    console.log("reducer ran; state & action:", state, action)


    switch (action.type){
      case GET_POSTS_TITLES: {
        return {...state, titles: action.postsTitles}
      }


      case ADD_POST:{
        let postsCopy = { ...state.posts };
        const postId = uuid()
        postsCopy[postId] = action.post
 
        return {
          ...state,
          posts : postsCopy,
        }
      }

      case DELETE_POST: {
        let postsCopy = { ...state.posts };
        // TODO: is it necessary to check is postsCopy[id] exists?
        // if(!postsCopy[action.deletePostID]) return state
        console.assert(postsCopy[action.deletePostID], 'Non-Existent Object! Attempted to Delete!')
        delete postsCopy[action.deletePostID];

        return {
          ...state,
          posts: postsCopy
        }
      }

      case UPDATE_POST: {
        let postsCopy = { ...state.posts };
        postsCopy[action.updatePostID] = action.updatePost;

        return {
          ...state,
          posts: postsCopy
        }
      }

      case ADD_COMMENT:{
        // debugger
        // let copiedPosts = {...state.posts}

        let postToAddCommentTo = state.posts[action.postId]

        const commentId = uuid()
        let newComment = { id: commentId, text: action.addComment.text}

        // Adding new comment to relevant post object
        postToAddCommentTo={...postToAddCommentTo, comments: [...postToAddCommentTo.comments, newComment]}

        // Adding post with new comments to state.posts
        let updatePostsWithNewComment={...state.posts, [action.postId]: postToAddCommentTo}
        
        return {
          ...state,
          posts: updatePostsWithNewComment
          /**Do Not Delete */
          // [action.postId]: { ...copyPosts[action.postId], comments: [...post.comments, addComment] }
          //posts: {...state.posts, comments: copyComments}
        }
      }

      // TODO Redux Combine Reducers
      case DELETE_COMMENT: {
        // let copiedPosts = {...state.posts}
        // debugger
        let postToRemoveCommentFrom = {...state.posts[action.postId]};
      
        let revisedComments = postToRemoveCommentFrom.comments.filter( comment => (
          comment.id !== action.commentId
        ))

        postToRemoveCommentFrom.comments=revisedComments;
        console.log('postToRemoveCommentFrom:', postToRemoveCommentFrom.comments);

        let revisedPosts = {...state.posts, [action.postId]: postToRemoveCommentFrom}
        return {
          ...state,
          posts: revisedPosts
          // posts: copiedPosts
        }
      }

      default:
        return state;
    }
  }
  
  export default rootReducer;