import { combineReducers } from 'redux';

// Reducers

import searchReducer from './search-reducer';
import videosReducer from  './videos-reducer';

// Combine Reducers

var reducers = combineReducers({
  searchState : searchReducer,
  videoState : videosReducer
});

export default reducers;
