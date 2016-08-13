import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from '../Header/Header';
import MainComponent from '../Main/main';
import SearchLayout from '../search-layout';
import generalStyles from './generalStyles';
import Radium from 'radium';
import { connect }  from 'react-redux';
import store from './../../store';


const mapStateToProps = function(store){
  return {
    title : store.searchState.title,
  }
}

export default class MainLayout extends Component {

  componentDidMount(){

  }

  render(){
    return(
      <div className = {generalStyles.reset}>
        <HeaderComponent />
        <MainComponent />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default connect(mapStateToProps)(MainLayout);
