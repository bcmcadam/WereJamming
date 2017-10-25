import React from 'react';
import track from '../track/track.js'


export class TrackList extends React.Component{
    render(){
        return(
         <div className="TrackList">
            {
                        this.props.tracks.map(track =>
                         {
                            return <Track  key= {track.id} track= {track} />;
						}
					    )
			}
        </div>
        );

    }
}