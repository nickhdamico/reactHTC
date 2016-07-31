/*import React from 'react';
import  {Router} from 'react-router';
import  {Route } from 'react-router';
import {browserHistory} from 'react-router';
import {IndexRoute}  from 'react-router';

// Layouts

import MainLayout from '../App/main-layout';
import SearchLayout from '../search-layout';

// Pages

import VideoList from '../video-list';
import Video from '../video';

export default class Ruteo extends Component  {
  render(){
    return(
      <Router history={browserHistory}>
        <Route component={MainLayout}>
          <Route path="/" component={Video}></Route>
          <Route path="videos">
            <Route component={SearchLayout}>
              <IndexRoute component={VideoList} />
            </Route>
            <Route path=":videoId" component={Video} />
          </Route>
        </Route>
      </Router>
    );
  }
}
*/
