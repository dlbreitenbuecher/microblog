import {
  GET_POSTS_TITLES,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_POST_DETAIL
} from './actionTypes'

import { v4 as uuid } from "uuid";
import { updatePost } from './actions';

/**
 * State = {
 * posts: {
 *  id: { id, title, description, body, votes, comments }
 * }
 * titles: [ { id, title, description, votes },... ]
 * }
 * 
 */
let DEFAULT_STATE = {
  posts: {},
  titles: [],
  error: false
}

/**creates post title object to add to state.titles */
function makePostTitleEntry({ id, title, description, votes }) {
  return { id, title, description, votes };
}

function rootReducer(state = DEFAULT_STATE, action) {
  console.log("reducer ran; state & action:", state, action)


  switch (action.type) {
    case Error: {
      return { ...state, error: true }
    }

    case GET_POSTS_TITLES: {
      return { ...state, titles: action.postsTitles }
    }

    case GET_POST_DETAIL: {
      let postCopy = { ...state.posts }
      console.log('this is action.fullPostDetail', action.fullPostDetail)

      postCopy[action.fullPostDetail.id] = action.fullPostDetail
      //get fullPostDetail back from API, use id to get the actual
      //post, then set fullPostDetail object to that copied object and 
      // return
      return {
        ...state,
        posts: postCopy
      }

    }

    case ADD_POST: {
      // Update Posts State
      let postsCopy = { ...state.posts };
      postsCopy[action.post.id] = { ...action.post, comments: [] };

      // Update Titles State
      let titlesCopy = [...state.titles, makePostTitleEntry(action.post)];

      return {
        ...state,
        posts: postsCopy,
        titles: titlesCopy
      }
    }

    case DELETE_POST: {
      // Update Posts state
      let postsCopy = { ...state.posts };

      console.assert(postsCopy[action.deletePostID], 'Non-Existent Object! Attempted to Delete!')
      delete postsCopy[action.deletePostID];

      // Update Titles state
      let updatedTitles = state.titles.filter( title => (
        title.id !== Number(action.deletePostID)
      ));

      return {
        ...state,
        posts: postsCopy,
        titles: updatedTitles
      }
    }

    case UPDATE_POST: {
      // Update Posts state
      let postsCopy = { ...state.posts };
      postsCopy[action.updatePostID] = { ...action.updatePost, comments: postsCopy[action.updatePostID].comments }

      // Update Titles state
      let updatedTitles = state.titles.map( title => (
        title.id === action.updatePost.id
        ? makePostTitleEntry(action.updatePost)
        : title
      ))

      console.log('titlesCopy:', updatedTitles);


      return {
        ...state,
        posts: postsCopy,
        titles: updatedTitles
      }
    }

    case ADD_COMMENT: {
      let postToAddCommentTo = state.posts[action.postId]

      // Adding new comment to relevant post object
      postToAddCommentTo = { ...postToAddCommentTo, comments: [...postToAddCommentTo.comments, action.comment] }

      // Adding post with new comments to state.posts
      let updatePostsWithNewComment = { ...state.posts, [action.postId]: postToAddCommentTo }

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
      let postToRemoveCommentFrom = { ...state.posts[action.postId] };

      let revisedComments = postToRemoveCommentFrom.comments.filter(comment => (
        comment.id !== Number(action.commentId)
      ))

      console.log('revisedComments in root reducer delete:', revisedComments);

      postToRemoveCommentFrom.comments = revisedComments;

      let revisedPosts = { ...state.posts, [action.postId]: postToRemoveCommentFrom }
      return {
        ...state,
        posts: revisedPosts
      }
    }

    default:
      return state;
  }
}

export default rootReducer;