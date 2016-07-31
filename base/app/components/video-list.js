import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import { Link } from 'react-router';

class VideoList extends Component {

  render(){
    return(
      <div >
          <ul>
            <li style={styles.li}><Link to="video/1">Video 1</Link></li>
            <li style={styles.li}><Link to="video/2">Video 2</Link></li>
            <li style={styles.li}><Link to="video/3">Video 3</Link></li>
            <li style={styles.li}><Link to="video/4">Video 4</Link></li>
            <li style={styles.li}><Link to="video/5">Video 5</Link></li>
            <li style={styles.li}><Link to="video/6">Video 6</Link></li>
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
  }
}

export default Radium(VideoList);
