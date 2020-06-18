import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from './main'
import Company from './company/index'
import New from './company/new'
import Detail from './company/detail'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/company/list/:companyTypeId" component={Company} />
          <Route path="/company/new/:companyTypeId" component={New} />
          <Route path="/company/detail/:id" component={Detail} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default App;



