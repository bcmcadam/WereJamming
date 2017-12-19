import React from 'react';
import './track.css';

export default class Track extends React.Component{
    constructor(props){
        super(props);
        this.removeTrack= this.removeTrack.bind(this);
        this.addTrack= this.addTrack.bind(this);
        this.playPreview= this.playPreview.bind(this);
        this.preview = new Audio(this.props.track.previewUrl);
        
    }
    
    renderAction() {
        if (this.props.isRemoval) 
            {return <a className="Track-action" onClick={this.removeTrack}>-</a> }
        else {
            {return <a className="Track-action" onClick={this.addTrack}>+</a>}
        }
    }
    addTrack(){
        this.props.onAdd(this.props.track);
    }
    removeTrack(){
        this.props.onRemove(this.props.track);
    }
    playPreview(){
        
        if (this.preview.paused)
        {
            this.preview.play();
        }else{
            this.preview.pause();
        }
    }
    render(){
       
        return(
            <div className="Track">
            <div className="Track-information">
              <h3>{this.props.track.Name}</h3>
              <p>{this.props.track.Artist} | {this.props.track.Album} | <button onClick= {this.playPreview}>preview</button></p>
            </div>
            <a className="Track-action">{this.renderAction()}</a>
          </div>
        );
    }
}

/* Create a method called renderAction that displays a - anchor tag if the isRemoval property is true, and a + anchor tag if the isRemoval property is false. Set the class name to Track-action. */