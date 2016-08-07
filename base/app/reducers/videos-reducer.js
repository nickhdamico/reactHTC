import * as types from '../actions/action-types';

const initialState = {
  url : '',
  videoList : []
};

const videosReducer = function(state = initialState, action){

  switch(action.types){
    case types.CREATE_URL:
      return Object.assign({} , state,{
        url : action.url
      });

    case types.CREATE_VIDEO_LIST:
      return Object.assign({} , state , {
        videoList : action.videoList
      });
  }

  return state;

}

export default videosReducer;
