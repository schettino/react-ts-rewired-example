import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import Routes from './hot-routes';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Routes />
        </p>
      </div>
    );
  }
}

export default App;
