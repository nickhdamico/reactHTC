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
                </div>
                <main>
                  <div>
                      <ul>
                        {this.props.youTubeResponse.map((video, i) => {
                            return(
                                <div>
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

          );
  }
}



const styles = {
  base : {
    background: 'rgba(31,33,36, 0.9)',
    position: 'relative',
    WebkitBoxShadow: '0px 5px 11px 0px rgba(50, 50, 50, 0.08)',
    boxShadow: '0px 5px 11px 0px rgba(50, 50, 50, 0.08)',
    padding: '285px 0 210px',
    minHeight : '100px'

  },
  container : {
    marginRight : 'auto',
    marginLeft : 'auto',
    paddingLeft : '15px',
    paddingRight : '15px',
    width : '1170px',
  },

  title : {
    textAlign: 'center',
  	color: '#FFF',
  	lineHeight: '65px',
  	zIndex: 0,
  	textTransform: 'uppercase',
  	fontSize: '55px',
  	float:'none'
    // float: 'left',
    // height:'50px',
    // marginTop:'10px',
    // fontSize: '30px',
    // lineHeight: '20px',
    // marginBottom: '5px',
    // textAlign: 'center',
    // marginTop:'5px',
    // color : '#fff'

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
    width : '300px',
    minHeight :'300px',
    backgroundColor : 'white',
    float : 'left',
    margin : '10px'
  },
  hide : {
    display : 'none'
  },
  show : {
    display : 'inline'
  }
}

export default connect(mapStateToProps)(SearchLayout);
