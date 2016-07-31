import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

class SearchLayout extends Component {

  render(){
    return(
      <div style={styles.base}>
        <div style={styles.wrapper}>
        
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

export default Radium(SearchLayout);
