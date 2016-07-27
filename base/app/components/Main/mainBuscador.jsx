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
      <div>
        <MainSearchInput />
        <MainSearchButton />
      </div>

    );
  }
}

class MainSearchInput extends Component {

  render(){
    return(
      <div>
        <input type='text' placeholder="Ingres"/>
      </div>
    );
  }
}

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
