import React from 'react';

export class track extends React.Component{
    render(){
        return(
            <div className="Track">
            <div className="Track-information">
              <h3><!-- track name will go here --></h3>
              <p><!-- track artist will go here--> | <!-- track album will go here --></p>
            </div>
            <a className="Track-action"><!-- + or - will go here --></a>
          </div>
        );
    }
}

/* Create a method called renderAction that displays a - anchor tag if the isRemoval property is true, and a + anchor tag if the isRemoval property is false. Set the class name to Track-action. */