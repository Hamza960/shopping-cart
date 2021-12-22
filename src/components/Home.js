import React from 'react';
import Product from './Product';

export default function Home(props){
    
    const {products, Add} = props;

    return <div className = "col-md-9 mt-5">
        
        <h2>Product List</h2>
            <div className = "row">
                
                {products.map((product) => (
                    <div className="col-md-4">
                        <div className="card mt-4">
                    <Product key = {product.id} product = {product} Add = {Add}/>
                    </div>
                    </div>
                ))}
               
            </div>
        
    </div>
}