import React from 'react';
import './searchBar.css';


export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.search= this.search.bind(this);
        this.state= {searchTerm: ''};
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    search(){
        this.props.onSearch(this.state.searchTerm);
    }
    handleTermChange(event){
        this.setState({searchTerm: event.target.value});
    }
  render() {
    return(
        <div className="SearchBar">
            <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
            <a onClick={this.search}>SEARCH</a>
        </div> 
    );
}
}
