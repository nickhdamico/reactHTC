import React from 'react';
import ReactDOM from 'react-dom';
import  {Router} from 'react-router';
import  {Route } from 'react-router';
import {browserHistory} from 'react-router';
import {IndexRoute}  from 'react-router';
import { Provider} from 'react-redux';
import store from './store';

// Layouts

import MainLayout from './components/App/main-layout';
import SearchLayout from './components/search-layout';

// Pages
import Buscador from './components/Main/main';
import VideoList from './components/video-list';
import Video from './components/video';

//import Ruteo from './components/App/router';

const content = document.getElementById('content');

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={MainLayout}>
          <Route path="/" component={Buscador} >
              <IndexRoute component={SearchLayout} />
          </Route>
          <Route path="/videos" component={Buscador} >
              <IndexRoute component={SearchLayout} />
          </Route>
          {/*<Route path="/videos" component={SearchLayout}  />*/}
          <Route path="/videos/:videoId" component={Buscador} >
            <IndexRoute component={Video} />
          </Route>

      </Route>
    </Router>
  </Provider>
    ), content);
