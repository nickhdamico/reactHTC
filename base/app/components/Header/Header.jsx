import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import HeaderButton from './HeaderButton';
import HeaderLogo from './HeaderLogo';

class HeaderComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    return(
      <div style={styles.header}>
        <HeaderLogo />
        <HeaderButton />
      </div>

    );
  }
}

const styles = {
  header : {
    background: 'rgba(31,33,36, 0.9)',
    color : 'white',
    width :'100%',
    zIndex :'200',
    textDecoration : 'none',
    minHeight : '80px',
    position : 'fixed',
    borderBottom: '3px solid #FC5F45'

  }

}
export default Radium(HeaderComponent);
