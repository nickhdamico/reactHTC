import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';


class HeaderButton extends Component {
  render(){
    return(
        <div >
          <ul style={styles.base}>
            <li key="one" style={styles.li}>Login</li>
            <li key="two" style={styles.li}>Registracion</li>
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
    width: '200px',
    marginTop: '20px',
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
          color : 'white'
      },
  }
}

export default Radium(HeaderButton);
