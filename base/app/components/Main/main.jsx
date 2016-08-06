import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import MainBuscador from './MainBuscador';
import VideoBG from './VideoBG';
import { loadSearch } from './../../actions/search-actions';

class MainComponent extends Component {

  search(event){
      event.preventDefault();
      let query = this.refs.child.getQuery();
      console.log(query);
      
  }

  render(){
    return(
      <div style={styles.mainWrapper}>
          <MainBuscador search={this.search.bind(this)} ref='child'/>
      </div>

    );
  }
}//end MainComponent

const styles = {
  mainWrapper : {
    height: '200px',
    textAlign: 'center',
    width : '100%',
    backgroundColor : 'gray',
    color : 'white'
  }
}

export default Radium(MainComponent);
