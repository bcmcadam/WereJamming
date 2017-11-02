import React, { Component } from 'react';
import './App.css';
import SearchBar from '../searchBar/searchBar.js';
import SearchResults from  '../searchResults/SearchResults.js';
import Playlist from '../playList/Playlist.js';
import Spotify from '../../util/Spotify.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={searchResults: [{name: "" , artist:"" , album:""}, {name:"" , artist:"", album:""}]};
    this.state= {playlistTracks: []};
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName= this.updatePlaylistName.bind(this);
    this.savePlaylist= this.savePlaylist.bind(this);
    this.search= this.search.bind(this);
  }

  updatePlaylistName(name){
    this.setState({playlistName: name});
  }
  savePlaylist(){
    var unsavedList= [];
   return unsavedList= this.state.playlistTracks.map(track => {return track.uri});
   Spotify.savePlaylist(unsavedList);
   this.setState({playlistName: 'New Playlist'});
   this.setState({searchResults: []});
  }
  removeTrack(deleteTrack){
    var filteredPlaylist = this.state.playlistTracks;
    filteredPlaylist.filter(a => a.id !== deleteTrack.id);
    this.setState({playlistTracks: filteredPlaylist });
  }

  search(term){
      Spotify.search(term).then(searchResults => {
			this.setState({searchResults: searchResults});	
		});
  }
  addTrack(newTrack) {    
    let tracks= this.state.playlistTracks.map(track => {return track.id})
    if (tracks.some(e => e = newTrack.id)=== false)
      {
        let newList = this.state.playlistTracks.concat(newTrack);
        this.setState({ playlistTracks: newList });
      }
  }

   render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults= {this.state.searchResults} onAdd= {this.addTrack} />
            <Playlist playlistName= {this.state.playlistName} playlistTracks= {this.state.playlistTracks} onRemove= {this.removeTrack} onNameChange= {this.updatePlaylistName} onSave = {this.savePlaylist} />
          </div>
        </div>
    </div>
          
    );
  }
}

export default App;
