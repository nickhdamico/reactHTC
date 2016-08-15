import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';


class HeaderButton extends Component {
  render(){
    return(
        <div >
          <ul style={styles.base}>
            <li key="one" style={styles.li}><span>Login</span></li>
            <li key="two" style={styles.li}><span>Registracion</span></li>
          </ul>
        </div>
    );
  }
}

const styles  = {
  base :{
    float: 'right',
    listStyle: 'none',
    display: 'inline',
    width: '350px',
    marginTop: '35px',
    display: '-webkit-inline-box'
  },
  li : {
    padding: '0px 15px',
  	color: '#919495',
  	borderRadius: '4px',
  	marginRight: '5px',
  	/*font-family: 'Titillium Web', sans-serif;*/
  	textTransform: 'uppercase',
  	fontWeight: 'bold',
  	fontSize: '16px',
    ':hover' : {
        background : 'black',
          border: '2px solid white',
          color : '#fff',
      },
  }
}

export default Radium(HeaderButton);
