import * as types from './action-types';

export function createUrl(url){
  return {
    type : types.CREATE_URL,
    url
  };
}

export function setVideoList(videoList){
  return {
    type : types.CREATE_VIDEO_LIST,
    videoList
  }
}
