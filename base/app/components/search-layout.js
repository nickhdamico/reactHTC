import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import VideoList from './video-list';
import Video from './video';
import { connect }  from 'react-redux';
import store from './../store';


const mapStateToProps = function(store){
  return {
    title : store.searchState.title,
    url : store.videosState.url
  }
}


class SearchLayout extends Component {


  render(){
    return(
      <div style={styles.base}>
        <div style={styles.wrapper}>
          <main>
            {this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

const styles = {
  base : {
    backgroundColor : 'pink',
    minHeight : '900px'
  },
  wrapper : {
    position : 'absolute',
    top : 250,
    left : 100,
    width : '80%',
    minHeight : '500px',
    backgroundColor : 'blue'
  }
}

export default connect(mapStateToProps)(SearchLayout);
