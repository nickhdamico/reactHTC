import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

class HeaderComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){

    return(
      <div style={styles.base}>
        <button style={styles.button}>Logo</button>
      </div>
    );
  }
}

const styles = {
  base : {
    background : 'red',
    color : 'white',
    width :'40%',
  },
  button :{
    ':hover' : {
        background : 'yellow',
        color : 'white'
      }
  }
}
export default Radium(HeaderComponent);
