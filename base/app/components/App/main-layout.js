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
    url : store.searchState.url,
    display : 'styles.hide',
    youTubeResponse : store.searchState.youTubeResponse,
  }
}

export default class MainLayout extends Component {

  componentDidMount(){
  //  componentDidMount = () => {

      const respuesta = store.getState();
      console.log('Respuesta en componente Search-Layout');
      console.log(respuesta);

    //}
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
