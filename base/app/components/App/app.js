import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from '../Header/Header';
import MainComponent from '../Main/main';
import SearchLayout from '../search-layout';
import generalStyles from './generalStyles';
import Radium from 'radium';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div className = {generalStyles.reset}>
        <HeaderComponent />
        <MainComponent />
        <SearchLayout />
      </div>
    );
  }
}
