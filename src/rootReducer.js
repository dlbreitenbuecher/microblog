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
        let postCopy = { ...state.posts }
        const postId = uuid()
        postCopy[postId] = action.post
 
        return {
          ...state,
          posts : postCopy,

        }
      }
      default:
        return state;
    }
  }
  
  export default rootReducer;