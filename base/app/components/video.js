import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

class Video extends Component {

  render(){
    return(
      <div style={styles.base}>
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
