import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

class Page extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Hello</h1>
          <Link to="signin">Sign In</Link>  
          <p>Welcome <span id="name-container"></span></p>
          <p>Your Firebase User ID is: <span id="uid-container"></span></p>
          <p>Your profile picture: <img id="profile-pic"/></p>
        </div>
        
      </div> 
    );
  }
}

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    }

    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    var url = new URL(window.location.href);
    var codeParam = url.searchParams.get("code");
    var errorParam = url.searchParams.get("error");
    var stateParam = url.searchParams.get("state");

    if (errorParam && !this.state.error) {
      this.setState({
          error: errorParam
      });
    } else if (!codeParam && !this.state.code && !errorParam) {
      window.location.href  = 'https://us-central1-dune-raider.cloudfunctions.net/redirect';
    } else if (codeParam && !this.state.code) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      var tokenFunctionURL = 'https://us-central1-dune-raider.cloudfunctions.net/token';
      script.src = tokenFunctionURL +
          '?code=' + encodeURIComponent(codeParam) +
          '&state=' + encodeURIComponent(stateParam) +
          '&callback=tokenReceived';
      document.head.appendChild(script);
    }
  }

  render() {
    this.signIn();

    return (
      <div>
        <div className="error">{this.state.error}</div>
      </div>
    );
  }

}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Page}/>
          <Route path="/signin" component={SignIn}/>
        </div>
      </Router>
    );
  }
}

export default App;
