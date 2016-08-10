import * as types from '../actions/action-types';

const initialState = {
  title : '',
  url : '',
  display : 'styles.hide'
};

const searchReducer = function(state = initialState , action){

  switch(action.type){

    case types.LOAD_SEARCH:
      return Object.assign({}, state , {
          title : action.title
      });

    case types.CREATE_URL:
      return Object.assign({} , state,{
        url : action.url,
        display : 'styles.show'
      });

    case types.RESET_SEARCH:
        return Object.assign({} , state, {
          title : ''
        });
  }

  return state;

}

export default searchReducer;
