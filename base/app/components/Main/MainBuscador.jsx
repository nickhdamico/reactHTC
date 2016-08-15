import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import { loadSearch } from './../../actions/search-actions';
import { Link } from 'react-router';


//Esta clase la creamos con importando los componetes MainSearchInput y MainSearchButton

// https://developers.google.com/apis-explorer/?hl=es#p/youtube/v3/youtube.search.list?part=snippet&q=SQL+INYECTION&_h=8&
// url youtube GET https://www.googleapis.com/youtube/v3/search?part=snippet&q=SQL+INYECTION&key={YOUR_API_KEY}


class MainBuscador extends Component {

  getQuery(){
    return this.refs.search.value;
  }

  render(){
    return(
      <div style = {styles.searchWrapper}>
          <form onSubmit={this.props.search} >
            <input style={styles.textBox} type="text"  ref="search" placeholder="ingresa tu pregunta"></input>
            <button style={styles.button} type="submit "> Buscar</button>
          </form>
      </div>
    );
  }
}

const styles = {
  searchWrapper : {
      background: '#FC5F45',
      position: 'absolute',
      width: '100%',
      textAlign:'center',
      top : '81px',
      height : '60px',
      position : 'fixed',
      fontSize: '14px',
      zIndex: 200
  },
  button : {
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: '9px 35px 9px 35px',
    borderRadius: '4px',
    margin: '10px',
    border: 'none',
    backgroundColor: 'rgba(31,33,36, 0.9)',
    boxShadow: 'none',
    textShadow: 'none',
    fontWeight: 400,
    verticalAlign: 'middle',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    fontSize: '15px',
    color: '#FFF'
  },
  baseBox : {
    float : "left",
    backgroundColor : "pink"
  },
  textBox : {
    width:' 550px',
    borderRadius: '4px',
    height: '30px',
    paddingTop: '1px',
    marginTop: '15px',
    border: '1px solid #cf4f3a',
    textTransform: 'uppercase',
    color: 'rgba(31,33,36, 0.9)',
    fontWeight: 400,
    fontSize: '14px',
    textAlign: 'center'

  }
}


export default Radium(MainBuscador);
