import * as types from './action-types';

export function loadSearch(title){
  return{
    type : types.LOAD_SEARCH,
    title
  };
}

export function createUrl(url){
  return {
    type : types.CREATE_URL,
    url
  };
}
