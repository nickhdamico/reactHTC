import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import { Link } from 'react-router';
import { loadSearch } from './../actions/search-actions';
import { setUrl, setVideoList } from './../actions/videos-actions';
import { connect }  from 'react-redux';
import store from './../store';
import axios from 'axios';

//Esta clase la creamos con importando los componetes MainSearchInput y MainSearchButton

// https://developers.google.com/apis-explorer/?hl=es#p/youtube/v3/youtube.search.list?part=snippet&q=SQL+INYECTION&_h=8&
// url youtube GET https://www.googleapis.com/youtube/v3/search?part=snippet&q=SQL+INYECTION&key={YOUR_API_KEY}


const mapStateToProps = function(store){
  return {
    title : store.searchState.title,
    url : store.videosState.url
  }
}


class VideoList extends Component {


  createUrlList(){
    const state = store.getState();

    const url = state.searchState.url;

  }


  render(){
    return(
      <div >
          <ul>
            <li style={styles.li}><button onClick={this.createUrlList.bind()}>getState</button></li>
            <li style={styles.li}><Link to="videos/2">Video 2</Link></li>
            <li style={styles.li}><Link to="videos/3">Video 3</Link></li>
            <li style={styles.li}><Link to="videos/4">Video 4</Link></li>
            <li style={styles.li}><Link to="videos/5">Video 5</Link></li>
            <li style={styles.li}><Link to="videos/6">Video 6</Link></li>
          </ul>
      </div>
    );
  }
}



const styles = {
  li : {
    width : '300px',
    minHeight :'300px',
    backgroundColor : 'white',
    float : 'left',
    margin : '10px'
  },

}


export default connect(mapStateToProps)(VideoList);
//export default Radium(VideoList);
