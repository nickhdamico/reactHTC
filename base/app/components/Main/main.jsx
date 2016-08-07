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
    title : store.searchState.title
  }
}

class MainComponent extends Component {

// compontentDidMount(){
//   const search = function(event){
//       event.preventDefault();
//       let query = this.refs.child.getQuery();
//       console.log(query);
//       store.dispatch(loadSearch(query));
//   };
// }

// https://www.googleapis.com/youtube/v3/search?part=snippet&q=SQL+INYECTION&k



 search(event){
      event.preventDefault();
      console.log(store.getState());
      let query = this.refs.child.getQuery();
      store.dispatch(loadSearch(query));
      console.log(store.getState());

      const makeUrl =  function(q){
        let urlQuery = q.replace(" ", "+");
        let url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+urlQuery;
        store.dispatch(setUrl(url));
      };

      makeUrl(query);
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
