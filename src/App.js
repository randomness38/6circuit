import React, { Component } from 'react';
import '../src/sass/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row fullpage">
            <div className="subNav col-1 bg1">
              subNav
            </div>
            <div className="col bg2">
              <div className="row main">
                <div className="col-12 bg4 header">header</div>
                <div className="col-12 content">content</div>
              </div>
            </div>
            <div className="col-1 bg3 copyright">
              copyright
            </div>

          </div>
          <div className="row md-nav">
            <div className="col-6 bg4 md-home">home</div>
            <div className="col-6 md-header">header</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
