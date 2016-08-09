import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import MainBuscador from './MainBuscador';
import VideoBG from './VideoBG';
import { loadSearch , createUrl} from './../../actions/search-actions';
import { connect }  from 'react-redux';
import store from './../../store';
import * as videoApi from './../../api/video-api';

const mapStateProps = function(store){
  return {
    title : store.searchState.title,
    url : store.videosState.url
  }
}

class MainComponent extends Component {

  videoApi.search(event)();

 // search(event){
 //
 //      event.preventDefault();
 //
 //      console.log(store.getState());
 //
 //      let query = this.refs.child.getQuery();
 //
 //      store.dispatch(loadSearch(query));
 //
 //      const videoUrl = () => {
 //          let query = store.getState().searchState.title;
 //          query = query.split(" ").join("+");
 //
 //          return "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + query;
 //      }
 //
 //      const myQuery = videoUrl();
 //
 //      store.dispatch(createUrl(myQuery));
 //
 //      console.log(store.getState());
 //  };

  render(){
    return(
      <div style={styles.mainWrapper}>
          <MainBuscador search={this.search.bind(this)}
                        ref='child'/>
      </div>

    );
  }
}//end MainComponent

const styles = {
  mainWrapper : {
    height: '200px',
    textAlign: 'center',
    width : '100%',
    backgroundColor : 'gray',
    color : 'white'
  }
}



 export default connect(mapStateProps)(MainComponent);
