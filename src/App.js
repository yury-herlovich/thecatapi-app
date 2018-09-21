import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter } from 'react-router-dom';

import Menu from './components/Menu';
import ImagesContainer from './components/ImagesPage/ImagesContainer';
import FavoritesContainer from './components/FavoritesPage/FavoritesContainer';
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
            <Route path="/images" component={ImagesContainer}/>
            <Route path="/favorites" component={FavoritesContainer}/>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
