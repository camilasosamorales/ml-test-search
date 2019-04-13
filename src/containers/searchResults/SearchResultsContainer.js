//contenedor de items
import React, {Component} from "react";

class SearchResultsContainer extends React.Component{

    render(){
        return (
            <div className="search-page container">
            <div className="search-page-results">
                {(results && results.length) ? results.map(this.renderItem) : null}
            </div>
        </div>
        )
    };
}