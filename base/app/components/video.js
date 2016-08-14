import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import Youtube from 'react-youtube';

class Video extends Component {

  render(){
    return(
      <div style={styles.base}>
        <h1>Video : {this.props.params.videoId}</h1>
          <YouTube
          videoId={this.props.youTubeResponse[0].id.videoId}
          />
      </div>
    );
  }
}

const styles = {
  base: {
    width : '800px',
    minHeight :'500px',
    backgroundColor : 'white',
    margin : '50px 100px'
  }
}

export default Radium(Video);
