import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Authentic from './Authentic';

const Page = () => (
  <div className="App">
    <div className="App-header">
      <h1>Hello</h1>
      <a href="https://api.instagram.com/oauth/authorize/?client_id=6efe64d5e7a74f17b607a526b4099869&redirect_uri=https://dune-raider.firebaseapp.com/&response_type=code">
      Log In</a>
      <h1>{this.props.params.code}</h1>
    </div>
  </div>
);

function renderAnalytics() {
  return (
    <p>Hello</p>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/:code" component={Page}/>
        </div>
      </Router>
    );
  }
}

export default App;