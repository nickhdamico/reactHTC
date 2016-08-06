import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

//Esta clase la creamos con importando los componetes MainSearchInput y MainSearchButton

// https://developers.google.com/apis-explorer/?hl=es#p/youtube/v3/youtube.search.list?part=snippet&q=SQL+INYECTION&_h=8&
// url youtube GET https://www.googleapis.com/youtube/v3/search?part=snippet&q=SQL+INYECTION&key={YOUR_API_KEY}


class MainBuscador extends Component {

  constructor(props){
      super(props);
        this.state ={

        }
  }

  render(){
    return(
      <div style = {styles.searchWrapper}>
          <input style={styles.textBox} type="text" placeholder="ingresa tu pregunta"></input>
            <button type="submit "> Buscar </button>
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
  },
  button : {
    float : "right",
    backgroundColor : "green"
  },
  baseBox : {
    float : "left",
    backgroundColor : "pink"
  },
  textBox : {
    width : '442px',
  }
}


export default Radium(MainBuscador);
