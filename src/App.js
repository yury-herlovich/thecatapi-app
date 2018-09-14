import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Images from './components/Images';
import Favorites from './components/Favorites';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <aside>
            <Menu/>
          </aside>
          <main>
            <Route path="/images" component={Images}/>
            <Route path="/favorites" component={Favorites}/>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
