import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter } from 'react-router-dom';

import Menu from './components/Menu';
import ImagesView from './components/ImagesView';
import FavoritesView from './components/FavoritesView';
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
            <Route exact path="/" render={() => (
              <Redirect to="/images"/>
            )}/>
            <Route path="/images" component={ImagesView}/>
            <Route path="/favorites" component={FavoritesView}/>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
