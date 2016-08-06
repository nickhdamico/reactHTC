import React from 'react';
import ReactDOM from 'react-dom';
import  {Router} from 'react-router';
import  {Route } from 'react-router';
import {browserHistory} from 'react-router';
import {IndexRoute}  from 'react-router';

// Layouts

import MainLayout from './components/App/main-layout';
import SearchLayout from './components/search-layout';

// Pages

import VideoList from './components/video-list';
import Video from './components/video';

//import Ruteo from './components/App/router';

const content = document.getElementById('content');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={MainLayout}>
        <Route path="/" component={SearchLayout}>
            <IndexRoute component={Video} />
            <Route path="/videos" component={VideoList}  />
            <Route path="/videos/:videoId" component={Video} />
        </Route>
    </Route>
  </Router>
), content);
