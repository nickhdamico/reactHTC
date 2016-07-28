import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

class HeaderLogo extends Component {
    render(){
      return(
        <div >
          <img type="image" style={base.img} src={require('./logo.png')}  />
        </div>
      );
    }
}

const base = {
  img : {
    width : '100px',
    heigt : '100px',
    backgroundColor : 'white',
    float : 'left'
  }
}

export default Radium(HeaderLogo);
