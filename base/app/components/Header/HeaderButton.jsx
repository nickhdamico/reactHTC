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
    float: 'left',
    border: '1px solid white',
    borderRadius: '2px',
    marginLeft: '3%',
    padding: '3%',
    fontSize: 'larger',
    color: '#ffffff',
    ':hover' : {
        background : 'black',
          border: '2px solid white',
          color : 'white'
      },
  }
}

export default Radium(HeaderButton);
