import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import Youtube from 'react-youtube';

class Video extends Component {

  render(){
    return(
      <div style={styles.base}>
          <div style={styles.container}>
            <Youtube
            videoId={this.props.params.videoId}
            />
          </div>
      </div>
    );
  }
}

const styles = {
  base: {
    background: 'rgba(31,33,36, 0.9)',
    position: 'relative',
    WebkitBoxShadow: '0px 5px 11px 0px rgba(50, 50, 50, 0.08)',
    boxShadow: '0px 5px 11px 0px rgba(50, 50, 50, 0.08)',
    padding: '180px 0 180px',
    minHeight : '100px'
  },
  container : {
    marginRight : 'auto',
    marginLeft : 'auto',
    width : '700px'
  }
}

export default Radium(Video);
