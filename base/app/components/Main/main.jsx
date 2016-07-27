import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import MainBuscador from './mainBuscador';

class MainComponent extends Component {
  constructor(props){
    super(props);
      this.state = {
      }
  }
  render(){
    return(
      <MainBuscador />
    );
  }
}//end MainComponent

const styles = {
  mainWrapper : {
    height: '600px',
    textAlign: 'center',
    width : '100%',
    backgroundColor : 'blue',
    color : 'white',
    zIndex : '100'
  }
}

export default Radium(MainComponent);
