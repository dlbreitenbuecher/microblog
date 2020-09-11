import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes'

import { v4 as uuid } from "uuid";

  const DEFAULT_STATE = {
    posts: { 
      "234": {
        title: 'Welcome to Microblog!',
        description: 'user guide',
        body: 'Blog to your heart\'s content',
        comments: [{ id: '1', text: 'first' }, { id: '2', text: 'second' }]
      },
        // comments: [{ id: "", text: "" } }]
      'ad12121': {
        id: 2,
        title: "Bluegrass Festival",
        description: 'Archives from our previous years are still available',
        body: 'Check out our live performance archives (since we started streaming in 2012)',
        comments: [{ id: '7', text: 'fitytrst' }, { id: '7', text: 'setytcond' }]
      }
    }
  }


  function rootReducer(state=DEFAULT_STATE, action){
    console.log("reducer ran; state & action:", state, action)


    switch (action.type){
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

        let postToAddCommentTo = {...state.posts[action.postId]}

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