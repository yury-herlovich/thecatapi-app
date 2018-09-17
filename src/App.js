import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Menu from './components/Menu';
import ImagesView from './components/ImagesView';
import FavoritesView from './components/FavoritesView';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <aside>
            <Menu/>
          </aside>
          <main>
            <Route path="/images" component={ImagesView}/>
            <Route path="/favorites" component={FavoritesView}/>
          </main>
        </div>
    );
  }
}

export default App;
