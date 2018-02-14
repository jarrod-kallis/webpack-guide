import React from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users';
// import Pizza from './containers/Pizza';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const Pizza = asyncComponent(() => import('./containers/Pizza'));

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link> | <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route path="/" exact component={Users} />
          <Route path="/pizza" component={Pizza} />
        </div>
      </div>
    );
  }
}

export default App;
