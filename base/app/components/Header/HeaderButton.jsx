import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';


class HeaderButton extends Component {
  render(){
    return(
        <div>
          <button style={styles.button}>Logo</button>
        </div>
    );
  }
}

const styles  = {
  button :{
    ':hover' : {
        background : 'black',
        color : 'white'
      }
  }
}

export default Radium(HeaderButton);
