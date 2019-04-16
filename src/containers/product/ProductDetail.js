import React from 'react';

const ProductDetails = (props) => {

    let { product } = props;
    let { item } = props;
    var idProduct;

    return (
        // <h1>{'Hola'}</h1>
        <div className="product-details">
            <div className="row">
                <div className="col">
                    <div className="product-details-gallery">
                        <img src={product.picture} alt='Product' />
                    </div>

                    <div className="product-details-description">
                        <div className="product-details-description-title">
                            Descripción del producto
                    </div>
                        <p className="product-details-description-text">
                            {product.description}
                        </p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="product-details-sidebar">
                        <div className="product-details-sidebar-info">
                            {product.condition}
                            {product.sold_quantity !== 0
                                ? ` - ${product.sold_quantity} vendidos`
                                : ''}
                        </div>

                        <h4 className="product-details-sidebar-title">
                            {(item) ? item.title : ''}
                        </h4>

                        <div className="product-details-sidebar-price">
                            $ {(item) ? item.price.amount.toLocaleString() : ''}
                        </div>


                        {(item) ?
                            <a href={'/items/' + item.id}>
                                <button className="btn btn-primary btn-block product-details-sidebar-purchase-btn">
                                    Comprar
                                </button>
                            </a> :
                            <a href='/'>
                                <button className="btn btn-primary btn-block product-details-sidebar-purchase-btn">
                                    Comprar
                                </button>
                            </a>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;