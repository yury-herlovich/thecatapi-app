import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Menu from './components/menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <aside>
            <Menu/>
          </aside>
          <main></main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
