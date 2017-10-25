import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../searchbar/searchBar.js';
import SearchResults from  '../searchResults/searchResults.js';
import Playlist from '../playList/playList.js';

class App extends Component {
  render() {
    return (
  <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults />
        <Playlist />
      </div>
    </div>
</div>
          
    );
  }
}

export default App;
