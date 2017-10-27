import React from 'react';
import TrackList from  '../TrackList/TrackList.js';


export default class Playlist extends React.Component{
    constructor(props){
        super(props);
        this.props.onNameChange= this.props.onNameChange.bind(this);
    }
    handleNameChange(event){
        this.props.onNameChange(EventTarget)
    }
    render(){
        return(
            <div className="Playlist">
                <input defaultValue={'New Playlist'} onChange= {this.handleNameChange()}/>
                     <TrackList tracks= {this.props.playlistTracks} onRemove= {this.props.onRemove} />
                <a className="Playlist-save">SAVE TO SPOTIFY</a>
            </div> 
        );
    }
}