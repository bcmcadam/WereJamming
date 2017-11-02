import React from 'react';
import Track from '../track/track.js'


export default class TrackList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
         <div className="TrackList">
            {
                        this.props.tracks && this.props.tracks.map(track =>{return <Track key= {track.id} track={track} onAdd= {this.props.onAdd} onRemove= {this.props.onRemove}/>;
						}
					    )
			}
        </div>
        );

    }
}