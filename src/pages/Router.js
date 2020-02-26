import React, { Component } from 'react';
import { Link, Route, BrowserRouter, Switch, withRouter } from "react-router-dom";
import Companies from './Companies';
import Home from './Home';
import About from './About';
import { domains } from '../constants';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <Link to={domains.home}>
            <button>Home</button>
          </Link>
          <Link to={domains.companies}>
            <button>Company List</button>
          </Link>
        </header>
        <main>
          <Switch>
            <Route exact path={domains.home} component={Home} />
            <Route path={domains.companies} component={Companies} />
            <Route component={() => <Redirect to={domains.home} />} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default Router;
