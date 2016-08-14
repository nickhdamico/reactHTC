import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import VideoList from './video-list';
import Video from './video';
import { connect }  from 'react-redux';
import store from './../store';
import { Link } from 'react-router';
import Youtube from 'react-youtube';


const mapStateToProps = function(store){
  return {
    title : store.searchState.title,
    url : '',
    display : 'styles.hide',
    youTubeResponse : []
  }
}



class SearchLayout extends Component {

  componentDidMount = () => {



  }

  createUrlList(){
    const state = store.getState();
    const url = state.searchState.url;
    console.log(url);
  }


  render(){
    return(
      <div style={styles.base}>
        <div style={styles.wrapper}>
          <main>
            <div >
                <ul>
                  <li style={styles.li}><button onClick={this.createUrlList.bind()}>getState</button></li>
                  {/*<li style={styles.li}><Link to="videos/2">
                      <Youtube videoId={this.props.title}> </Youtube>
                                                                    </Link></li>*/}
                  <li style={styles.li}><Link to="videos/3">Video 3</Link></li>
                  <li style={styles.li}><Link to="videos/4">Video 4</Link></li>
                  <li style={styles.li}><Link to="videos/5">Video 5</Link></li>
                  <li style={styles.li}><Link to="videos/6">Video 6</Link></li>
                </ul>
            </div>
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
  },
  li : {
    width : '300px',
    minHeight :'300px',
    backgroundColor : 'white',
    float : 'left',
    margin : '10px'
  },
  hide : {
    display : 'none'
  },
  show : {
    display : 'inline'
  }
}

export default connect(mapStateToProps)(SearchLayout);
