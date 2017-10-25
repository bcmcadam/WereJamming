import React from 'react';

export class Track extends React.Component{
    renderAction() {
        if (this.props.isRemoval) {return <a className="Track-action" onClick={this.removeTrack}>-</a> }{return <a className="Track-action" onClick={this.addTrack}>+</a>}
    }

    render(){
       
        return(
            <div className="Track">
            <div className="Track-information">
              <h3>{this.props.track.name}</h3>
              <p>{this.props.track.artist} | {this.props.track.album}</p>
            </div>
            <a className="Track-action">{renderAction()}</a>
          </div>
        );
    }
}

/* Create a method called renderAction that displays a - anchor tag if the isRemoval property is true, and a + anchor tag if the isRemoval property is false. Set the class name to Track-action. */