import * as types from '../actions/action-types';

const initialState = {
  title : ''
};

const searchReducer = function(state = initialState , action){

  switch(action.type){

    case types.LOAD_SEARCH:
      return Object.assign({}, state , {
          title : action.title
      });

    case types.RESET_SEARCH:
        return Object.assign({} , state, {
          title : ''
        });
  }

  return state;

}

export default searchReducer;
