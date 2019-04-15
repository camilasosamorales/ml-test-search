import React from 'react'
import { shippingLogo } from '../../images/ic_shipping.png';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
    console.log(props.productItem);
    return (
        <div className="product-item">
            <div className="product-item-image">
                {/* <Link to={`/product/${props.product.id}`}> */}
                <span className="product-item-image-view" style={{ backgroundImage: `url(${props.productItem.picture})` }} />
                {/* </Link> */}
            </div>
            <div className="product-item-body">
                <div className="product-item-body-price">
                    <Link to={`/items/${props.productItem.id}`}>
                        ${props.productItem.price.amount.toLocaleString()}
                    </Link>
                    {props.productItem.free_shipping ? <img className='item-shipping' src={shippingLogo} alt='shipping' /> : null}
                </div>

                <div className="product-item-body-title">
                    {props.productItem.title}
                </div>
            </div>

            <div className="product-item-location">
                {props.productItem.address}
            </div>
        </div>
    )


}

export default ProductItem;