import React from 'react';

export default function Cart(props){
    const {cartItems, Add, Remove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + shippingPrice;
    return<aside className = "col-md-3">
    <div className="card p-3">
    <h2>Cart</h2>
        <div>
            {cartItems.length === 0 && <div>There seem to be no products</div>}
            {cartItems.map((item) => (
                <div key = {item.id} className="row">
                    <div className="col-md-6">{item.name}</div>
                    <div className="col-md-3">
                        <button onClick={() => Add(item)} className="add">+</button>
                        <button onClick={() => Remove(item)} className="remove">-</button>
                    </div>
                    <div className="col-md-3 price">
                        {item.qty} X ₹{item.price.toFixed(2)}
                    </div>
                    <hr className="mt-3" />
                </div>
                
            ))}
            {cartItems.length !== 0 &&(
                <>
                <div className="row">
                    <div className="col-md-6">Product Price</div>
                    <div className="col-md-6 text-right">₹{itemsPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-md-6">Shipping Price</div>
                    <div className="col-md-6 text-right">₹{shippingPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-md-6"><b>Total Price</b></div>
                    <div className="col-md-6 text-right">₹{totalPrice.toFixed(2)}</div>
                </div>
                </>
            )}
            
        </div>
    </div>
</aside>
}