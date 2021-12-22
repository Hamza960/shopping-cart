import React from 'react';

export default function Header(props){
    const {countItems} = props;
    return(
    <header>
        <div className = "container-fluid">
            <div className="row pt-3 pb-3">
                <div className="col-md-10 d-flex">
                    <img src = "images/shopping-logo.png" className="img-fluid" width = "150" alt = ""/>
                    <h3 className="mt-4">Shopper's Point</h3>
                </div>
                <div className="col-md-2 mt-3">
                     {' '}
                    {countItems ? (
                        <button className="count">{countItems}</button>
                    ):('')}
                </div>{' '}
                
            </div>
        </div>
    </header>
    );
}