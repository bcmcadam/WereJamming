import React from 'react';
import './TrackList.css';
import Track from '../track/track.js'


export default class TrackList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        if (this.props.isRemoval){
        return(
         <div className="TrackList">
            {
                        this.props.tracks && this.props.tracks.map(track =>{return <Track key= {track.id} track={track} onAdd= {this.props.onAdd} onRemove= {this.props.onRemove} isRemoval= {this.props.isRemoval}/>;})
			}
        </div>
        );
    }else {
        return(
            <div className="TrackList">
               {
                           this.props.tracks && this.props.tracks.map(track =>{return <Track key= {track.id} track={track} onAdd= {this.props.onAdd} onRemove= {this.props.onRemove}/>;})
               }
           </div>
           );
    }
    }
}