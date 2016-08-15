import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

class HeaderLogo extends Component {
    render(){
      return(
        <div >
          <img type="image" style={base.img} src={require('./../Assets/logoHTC.png')}  />
        </div>
      );
    }
}

const base = {
  img : {
  float: 'left',
	background: 'logo.png',
	height: '80px',
	marginTop: '1px',
	paddingLeft: '20px',
	marginLeft: '20px',
	cursor:'pointer'
  }
}

export default Radium(HeaderLogo);
