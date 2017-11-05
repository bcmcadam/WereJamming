import React from 'react';
import './TrackList.css';
import Track from '../track/track.js'


export default class TrackList extends React.Component{
    render(){
        return(
         <div className="TrackList">
            {
                        this.props.tracks && this.props.tracks.map(track =>{return <Track key= {track.id} track={track} onAdd= {this.props.onAdd} onRemove= {this.props.onRemove}/>;})
			}
        </div>
        );

    }
}