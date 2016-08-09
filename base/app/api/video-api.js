import axios from 'axios';
import store from './../store.js';
import { loadSearch, createUrl} from './../actions/search-actions';
import { setVideoList } from './../actions/videos-actions';



/*
* Get query and create Url
*/

export function search(event){

     event.preventDefault();

     console.log(store.getState());

     let query = this.refs.child.getQuery();

     store.dispatch(loadSearch(query));

     const videoUrl = () => {
         let query = store.getState().searchState.title;
         query = query.split(" ").join("+");

         return "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + query;
     }

     const myQuery = videoUrl();

     store.dispatch(createUrl(myQuery));

     console.log(store.getState());
 };
