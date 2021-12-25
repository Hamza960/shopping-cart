import React from 'react'

export default function Product(props) {
    
    const {product, Add} = props;
    return (
        <div>
            <div className = "row">
                <div className="col-md-6">
                    <img className="img img-fluid" src = {product.image} alt = {product.name} /> 
                    
                </div>
                <div className="col-md-6">
                <div className="info p-3">
                <h4>{product.name}</h4>
                <h5>₹{product.price}</h5>
                <div>
                    <button className="cart" onClick={() => Add(product)}>Add To Cart</button>
                </div>
                </div> 
                </div>
                
                
            </div>
            
        </div>
    )
}
