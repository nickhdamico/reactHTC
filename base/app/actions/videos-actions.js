import * as types from './action-types';


export function setVideoList(videoList){
  return {
    type : types.CREATE_VIDEO_LIST,
    videoList
  }
}
