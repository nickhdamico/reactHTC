import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import MainBuscador from './MainBuscador';
import VideoBG from './VideoBG';
import { loadSearch , createUrl, responseYoutube} from './../../actions/search-actions';
import { connect }  from 'react-redux';
import store from './../../store';
import * as videoApi from './../../api/video-api';
import axios from 'axios';
import promise from 'promise';


const mapStateToProps = function(store){
  return {
    title : store.searchState.title,
    url : store.searchState.url,
    display : 'styles.hide',
    youTubeResponse : store.searchState.youTubeResponse,
  }
}

class MainComponent extends Component {

  // videoApi.search(event);  /* cuando ejecute tiro error Unexpected token videoApi.seach(event)*/

 search(event){

    // Capturamos la query

      event.preventDefault();

      console.log(store.getState());

      let query = this.refs.child.getQuery();

      store.dispatch(loadSearch(query));


    // Creamos la Url

      const videoUrl = () => {

          let query = store.getState().searchState.title;

          query = query.split(" ").join("+");

          return "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + query + "&key=AIzaSyBIyzO6I0yihYfNcLqt7hS-3egovMCiH5o";
      }

      const myQuery = videoUrl();

      store.dispatch(createUrl(myQuery));

      console.log(store.getState());

      //Conectamos a Api youtube

      // https://www.googleapis.com/youtube/v3/search?part=snippet&q=sql+injection&key=AIzaSyBIyzO6I0yihYfNcLqt7hS-3egovMCiH5o

       const conectarYT = function(){

        let query = store.getState().searchState.url;

        let results = axios.get(query).then((response, error)  => {

          if(!error){
              let info = response.data.items;

              store.dispatch(responseYoutube(info));

              console.log(store.getState());

            }else {
              console.log(error);
            }
        });

        return results;
      }

      conectarYT();

};//end function Search()


  render(){
    return(
      <div >
          <MainBuscador search={this.search.bind(this)}
                        ref='child'/>
          <main>
            {this.props.children}
          </main>
      </div>

    );
  }
}//end MainComponent

const styles = {
  mainWrapper : {
    height: '100px',
    textAlign: 'center',
    width : '100%',
  }
}

 export default connect(mapStateToProps)(MainComponent);
