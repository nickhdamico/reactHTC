import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

class MainBuscador extends Component {
  constructor(props){
      super(props);
        this.state ={

        }
  }
  render(){
    return(
      <div style = {styles.searchWrapper}>
          <MainSearchInput />
          <MainSearchButton />
      </div>

    );
  }
}

const styles = {
  searchWrapper : {
    backgroundColor : 'yellow',
    top : '150px',
    left : '350px',
    position : 'absolute',
    width : '500px'
  }
}

class MainSearchInput extends Component {

  render(){
    return(
      <div>
        <input type='text' placeholder="Ingresar"/>
      </div>
    );
  }
}
{/*
  const inputStyles = {
    base : {
      width : '200px'
    }
  }
*/}

class MainSearchButton extends Component {
  render(){
    return(
      <div>
        <button >Enviar</button>
      </div>
    );
  }
}

export default Radium(MainBuscador);
