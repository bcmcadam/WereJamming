import React, { Component } from 'react';
import './App.css';
import SearchBar from '../searchBar/searchBar.js';
import SearchResults from  '../searchResults/SearchResults.js';
import Playlist from '../playList/Playlist.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {searchResults: []};
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName= this.updatePlaylistName.bind(this);
  }
  addTrack(newTrack) {
    var currentTrack;
      if (this.state.playlistTracks.map(track => {return currentTrack = track.id;}).some(function() {currentTrack = newTrack.id})=== false)
      {
        var newList = this.state.playlistTracks.concat(newTrack);
        this.setState({ playlistTracks: newList});
      }
  }
  updatePlaylistName(name){
    this.setState({playlistName: name});
  }
  savePlaylist(){
    
  }
  removeTrack(deleteTrack){
    var filteredPlaylist = this.state.playlistTracks;
    filteredPlaylist.filter(a => a.id !== deleteTrack.id)
    this.setState({playlistTracks: filteredPlaylist });
  }
   render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults= {this.state.searchResults} onAdd= {this.addTrack()} />
            <Playlist playlistName= {this.state.playlistName} playlistTracks= {this.state.playlistTracks} onRemove= {this.removeTrack()} onNameChange= {this.updatePlaylistName()} />
          </div>
        </div>
    </div>
          
    );
  }
}

export default App;
