import React from 'react';


export class SearchBar extends React.Component {
    constructor(props){
		super(props);
	}
  render() {
    return(
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" />
            <a>SEARCH</a>
        </div> 
    );
}
}
