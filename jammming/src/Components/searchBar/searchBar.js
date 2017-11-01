import React from 'react';


export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.search= this.search.bind(this);
        this.state= {searchTerm: ""};
    }
    search(){
        this.props.onSearch(this.state.searchTerm);
    }
    handleTermChange(event){
        this.setState({searchTerm: EventTarget});
    }
  render() {
    return(
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
            <a>SEARCH</a>
        </div> 
    );
}
}
