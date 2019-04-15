import React, { Component } from "react";
import ProductItem from './ProductItem';
import searchProduct from '../../endpoints/searchProducts'


class SearchResultsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { results: [] };
    }

    componentDidMount() {
        const { search } = this.props.location;
        const params = new URLSearchParams(search);
        console.log(params.get('search'));
        searchProduct(params.get('search'))
            .then((results) => {
                // console.log(results);
                this.setState({ results : results.items })
            });

    }

    render() {
        let { results } = this.state;

        return (
            <div className="search-page container">
                <div className="search-page-results">
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

