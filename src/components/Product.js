import React from 'react'

export default function Product(props) {

    const {product, Add} = props;
    return (
        <div>
            <img className="img img-fluid" src = {product.image} alt = {product.name} />
            <div className="info p-3">
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <div>
                <button className="cart" onClick={() => Add(product)}>Add To Cart</button>
            </div>
            </div>
            
        </div>
    )
}
