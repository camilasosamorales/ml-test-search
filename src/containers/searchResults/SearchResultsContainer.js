import React, { Component } from "react";
import ProductItem from './ProductItem';
import searchProduct from '../../endpoints/searchProductsApi';
import CircularProgress from '@material-ui/core/CircularProgress';



class SearchResultsContainer extends Component {

    
    constructor(props) {
        super(props);
        this.state = { 
            results: []
         };
    }

    componentDidMount() {
        const { search } = this.props.location;
        const params = new URLSearchParams(search);
        searchProduct(params.get('search'))
            .then((results) => {
                this.setState({ results : results.items, oldValue : params })
            });

    }

    componentDidUpdate(){

        const { search } = this.props.location;
        const params = new URLSearchParams(search);
        const newParam = params.get('search');
        const oldParam = this.state.oldValue;

        if(oldParam != newParam){
            searchProduct(newParam)
            .then((results) => {
                this.setState({ results : results.items, oldValue : newParam })
            });
        }
    }

    render() {
        let { results } = this.state;

        return (
            <div className="search-page container">
                <div className="search-page-results">
                {/* <CircularProgress size={50}/> */}
                    {(results && results.length) ? results.map(this.renderProductItem) : null}
                </div>
            </div>
        );
    }

    renderProductItem = (productItem) => {

        return <ProductItem key={productItem.id} productItem={productItem} />
    }


}

export default SearchResultsContainer;

