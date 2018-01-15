import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Home from './Home';
import Topics from './Topics';
import Loading from './Loading';
import DynamicImport from 'DynamicImport';

const Home = () => (
  <h1>Home Page</h1>
);

const Topics = () => (
  <h1>Topics Page</h1>
);

const Settings = (props) => (
  <DynamicImport load={() => import('./Settings') }>
    { (Component) => Component === null ? <Loading /> : <Component {...props} /> }
  </DynamicImport>
);


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
            <li><Link to='/settings'>Settings</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/topics' component={Topics} />
          <Route path='/settings' component={Settings} />
        </div>
      </Router>
    );
  }
}

export default App;