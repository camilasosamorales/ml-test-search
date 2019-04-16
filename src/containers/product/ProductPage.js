import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import getProductDetails from '../../endpoints/productDetailApi';
import ProductDetails from './ProductDetail';
import CircularProgress from '@material-ui/core/CircularProgress';

class ProductPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            results: [],
            isFetching: false,
            error: false
        };
    }

    componentDidMount() {
        const { pathname } = this.props.location;
        this.setState({ isFetching: true });
        // const params = new URLSearchParams(pathname);
        // const idProduct = params.get('params');
        const arrayParam = pathname.trim().split('/');
        const idProduct = arrayParam[2];
        getProductDetails(idProduct).
            then((response) => {
                console.log(response);
                this.setState({
                    results: response,
                    isFetching: false
                })
            })
            .catch((error) => {
                console.log('error');
                this.setState({
                    error: true,
                    isFetching: false
                })
            })
            ;

    }

    render() {
        let { results } = this.state;
        return (

            <div className="product-page container">
                {(this.state.isFetching) ?
                    <div className="circle-align product-details"> <CircularProgress size={50} className="circle-position" /> </div>
                    :
                    this.renderProduct(this.state.results)
                }
                {(this.state.results.item) ?
                    <Helmet>
                        <title> {`${results.item.title} - Compra en Mercado Libre`}</title>
                        <meta name="description" content={`Compralo en Mercado Libre a $ ${results.item.price.amount} - Comprá en 12 cuotas - Envío gratis.`} />
                    </Helmet>
                    :
                    <Helmet>
                        <title> {`Compra en Mercado Libre`}</title>
                    </Helmet>
                }

            </div>

        )


    }

    renderProduct = (product) => {
        console.log(product);
        if (this.state.error) {
            return <div><h1>No hay resultados</h1></div>
        }
        else {
            return <ProductDetails product={product} item={product.item} />;

        }

    }
}

export default ProductPage;