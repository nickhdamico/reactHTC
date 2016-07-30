import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

class MainSearchInput extends Component {
  render(){
    return(
      <div style={styles.base}>
        <input style={styles.textBox} type="text" placeholder="ingresa tu pregunta"></input>
      </div>
    );
  }
}

const styles = {
  base : {
    float : "left",
    backgroundColor : "pink"
  },
  textBox : {
    width : '442px',
  }
}

export default Radium(MainSearchInput);
