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
        comments: [{ id: 1, text: 'first' }, { id: 2, text: 'second' }]
      },
        // comments: [{ id: "", text: "" } }]
      'ad12121': {
        id: 2,
        title: "Bluegrass Festival",
        description: 'Archives from our previous years are still available',
        body: 'Check out our live performance archives (since we started streaming in 2012)',
        comments: [{ id: 7, text: 'fitytrst' }, { id: 7, text: 'setytcond' }]
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
        let copyPosts = state.posts
        //console.log("copyPosts:", copyPosts)
        //console.log("action.postId:", action.postId)

        let post = copyPosts[action.postId]
        const commentId = uuid()
        
        //console.log("post:", post)
        const addComment = action.addComment

        console.log("action.addComment:", action.addComment)

        let newComments = { id: commentId, text: addComment.text}
        
        console.log("post.comments:", post.comments)
        return {
          ...state,
          [action.postId]: { ...copyPosts[action.postId], comments: [...post.comments, addComment] }
          //posts: {...state.posts, comments: copyComments}
        }
      }

      default:
        return state;
    }
  }
  
  export default rootReducer;