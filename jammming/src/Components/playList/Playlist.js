import React from 'react';
import TrackList from  '../TrackList/TrackList.js';


export class Playlist extends React.Component{
    render(){
        return(
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                     <Tracklist tracks= {this.props.playlistTracks} />
                <a className="Playlist-save">SAVE TO SPOTIFY</a>
            </div> 
        );
    }
}