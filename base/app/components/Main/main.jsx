import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import MainBuscador from './MainBuscador';
import VideoBG from './VideoBG';
import { loadSearch } from './../../actions/search-actions';
import { setUrl} from './../../actions/videos-actions';
import { connect }  from 'react-redux';
import store from './../../store';

const mapStateProps = function(store){
  return {
    title : store.searchState.title,
    url : store.videosState.url
  }
}



//
// const makeUrl = function (q){
//     let urlQuery = q.replace(" ", "+");
//     let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+urlQuery;
//     store.dispatch(setUrl(url));
//   };

class MainComponent extends Component {

// https://www.googleapis.com/youtube/v3/search?part=snippet&q=SQL+INYECTION&k

 search(event){

      event.preventDefault();

      console.log(store.getState());

      let query = this.refs.child.getQuery();

      store.dispatch(loadSearch(query));
      store.dispatch(createUrl(query));
      console.log(store.getState());

      const getQ =   () => {
          const q = store.getState().searchState.title;
          return q;
      };

      store.subscribe(getQ);

      store.dispatch(setUrl('Nice'));

      console.log(store.getState());
  };

  render(){
    return(
      <div style={styles.mainWrapper}>
          <MainBuscador search={this.search.bind(this)}
                        ref='child'/>
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



 export default connect(mapStateProps)(MainComponent);
//export default Radium(MainComponent);
