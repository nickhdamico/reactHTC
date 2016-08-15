import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';
import VideoList from './video-list';
import HeaderComponent from './Header/Header';
import Video from './video';
import { connect }  from 'react-redux';
import store from './../store';
import { Link } from 'react-router';
import Youtube from 'react-youtube';



const mapStateToProps = function(store){
  return {
    title : store.searchState.title,
    url : store.searchState.url,
    display : 'styles.hide',
    youTubeResponse : store.searchState.youTubeResponse,
  }
}

class SearchLayout extends Component {

  componentDidMount = () => {

    const respuesta = store.getState();
    console.log('Respuesta en componente Search-Layout');
    console.log(respuesta);

  }

  createUrlList(){
    const state = store.getState();
    const url = state.searchState;
    console.log(url.youTubeResponse);
  }


  render(){
    return(
        <div style={styles.base}>
            <div style={styles.container}>
                <div style={styles.title}>
                    <h1>Learn to code through the error</h1>
                      <div style={styles.subTitle}>
                          <span>Type your error, watch your solution </span>
                      </div>
                      <main>
                        <div style={styles.listContainer}>
                            <ul>
                              {this.props.youTubeResponse.map((video, i) => {
                                  return(
                                      <div >
                                        <li key={i} style={styles.li}>
                                          <Link  to= {'videos/' + video.id.videoId}>
                                              <img src={video.snippet.thumbnails.medium.url}></img>
                                          </Link>
                                        </li>
                                      </div>
                                    );
                                })
                              }
                              {/*<li style={styles.li}><button onClick={this.createUrlList.bind()}>getState</button></li>
                              <li style={styles.li}><Link to="videos/3">{this.props.title}</Link></li>*/}
                            </ul>
                        </div>
                    </main>
                </div>
            </div>
        </div>

          );
  }
}



const styles = {
  base : {
    background: 'black',
    position: 'relative',
    WebkitBoxShadow: '0px 5px 11px 0px rgba(50, 50, 50, 0.08)',
    boxShadow: '0px 5px 11px 0px rgba(50, 50, 50, 0.08)',
    padding: '200px 0 50px',
    // minHeight : '100px'

  },
  container : {
    marginRight : 'auto',
    marginLeft : 'auto',
    paddingLeft : '15px',
    paddingRight : '15px',
    width : '1170px',
    position: 'relative'
  },

  title : {
    textAlign: 'center',
  	color: '#FFF',
  	lineHeight: '65px',
  	zIndex: 0,
  	textTransform: 'uppercase',
  	fontSize: '55px',
  	float:'none'
  },
  subTitle :{
    textAlign: 'center',
    color: '#FFF',
    lineHeight: '65px',
    zIndex: 0,
    textTransform: 'lowercase',
    fontSize: '25px',
    float:'none'
  },

  wrapper : {
    position : 'absolute',
    top : 250,
    left : 100,
    width : '80%',
    height : 'auto',
    backgroundColor : 'blue'
  },
  li : {
    width : '400px',
    minHeight :'200px',
    backgroundColor : 'back',
    float : 'left',
    margin: '10px',
    padding : '28px 20px 20px 20px',
    backgroundColor: 'black'
  },
  hide : {
    display : 'none'
  },
  show : {
    display : 'inline'
  },
  listContainer : {
    background: 'rgba(31,33,36, 0.9)',
    WebkitBoxShadow: '0px 5px 11px 0px rgba(50, 50, 50, 0.08)',
    boxShadow: '0px 5px 11px 0px rgba(50, 50, 50, 0.08)',
    // padding: '50px 50px 8000px',
     minHeight : '800px',
     marginLeft : '30px',
     paddingLeft:' 120px'
  }

}

export default connect(mapStateToProps)(SearchLayout);
