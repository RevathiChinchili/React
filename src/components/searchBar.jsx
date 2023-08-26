import { Component } from "react";

class SearchBar extends Component{
   
    
    render(){
        return (
            <div className="search">
                <input
                className={this.props.className}
                type={this.props.searchType} // "Search"
                placeholder={this.props.placeHolder}
                onChange={this.props.onSearchHandler}
                
                />
            </div>
        )
    }
}

export default SearchBar;