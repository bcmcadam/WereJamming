import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../searchbar/searchBar.js';
import SearchResults from  '../searchResults/searchResults.js';
import Playlist from '../playList/playList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state.searchResults = [];
    this.addTrack = this.addTrack.bind(this);
  }
  addTrack(newTrack) {
      if (this.state.playlistTracks.map(track => 
        {
          return currentTrack = track.id;
        }
        ).some(function() {currentTrack = newTrack.id}
      )=== false){
              var newList = this.state.playlistTracks.concat(newTrack);

              this.setState({ playlistTracks: newList});

        }
  }
  
  render() {
    return (
  <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults searchResults= {this.state.searchResults} onAdd= {this.addTrack()} />
        <Playlist playlistName= {this.state.playlistName} playlistTracks= {this.state.playlistTracks} />
      </div>
    </div>
</div>
          
    );
  }
}

export default App;
