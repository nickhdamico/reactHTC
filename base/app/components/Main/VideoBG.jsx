import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

class VideoBG extends Component {
  render(){
    return(
      <div style={styles.base}>
        <video style={styles.video} >

        </video>
      </div>
    );
  }
}

const styles = {
  base : {
    float : "right",
    backgroundColor : "green",
    width : '100%',
    minHeight : '400px'
  },
  video : {
    position: 'absolute',
     zIndex: 0,
     background: 'url(../Assets/coder.mp4) no-repeat',
     backgroundSize: '100% 100%',
     top: '0px',
     left: '0px', /* fixed to left. Replace it by right if you want.*/
     minWidth: '100%',
     minHeight: '100%',
     width: 'auto',
     height: 'auto'
  }
}

export default Radium(VideoBG);
