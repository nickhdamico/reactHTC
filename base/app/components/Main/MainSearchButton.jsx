import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

class MainSearchButton extends Component {
  render(){
    return(
      <div style={styles.base}>
        <button type="submit "> Buscar</button>
      </div>
    );
  }
}

const styles = {
  base : {
    float : "right",
    backgroundColor : "green"
  }
}

export default Radium(MainSearchButton);
