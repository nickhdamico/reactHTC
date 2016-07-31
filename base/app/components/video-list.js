import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

class VideoList extends Component {

  render(){
    return(
      <div >
          <ul>
            <li style={styles.li}>Video 1</li>
            <li style={styles.li}>Video 2</li>
            <li style={styles.li}>Video 3</li>
            <li style={styles.li}>Video 4</li>
            <li style={styles.li}>Video 5</li>
            <li style={styles.li}>Video 6</li>

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
