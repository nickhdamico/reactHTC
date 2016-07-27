import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

class MainComponent extends Component {
  constructor(props){
    super(props);
      this.state = {
      }
  }
  render(){
    return(
        <div style={styles.mainWrapper}>
            <h1>Hola </h1>
        </div>
    );
  }
}//end MainComponent

const styles = {
  mainWrapper : {
    height: '600px',
    textAlign: 'center',
    width : '900px',
    backgroundColor : 'blue',
    color : 'white'
  }
}

export default Radium(MainComponent);
