import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import * as Pages from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ Pages.Home } />
        <Route path="/about" component={ Pages.About } />
        <Route path="/wealth" component={ Pages.Wealth } />
        <Route path="/health" component={ Pages.Health } />
        <Route path="/contact" component={ Pages.Contact } />
      </div>
    );
  }
}

export default App;
