import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const cart=props.cart;
    //add total price
    const total= cart.reduce((total, ls)=>total+ls.price,0);
    //const name= cart.reduce((total, ls)=>total+ls.name,"");
    let name="";
    for(let i = 0;i<cart.length;i++){
        let list = cart[i];
        name =i + 1 + "." +  list.name +name ;
    }

    const formatNumber = num =>{
        const precision=num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="cart">
            <h4>Order Summary</h4>
            <p>Total Enrolled Course: {cart.length}</p>
            <p> <b> Total Cost : </b> {formatNumber(total)}</p>
            <p> Enrolled Course:{name} </p>
        </div>
    );
};

export default Cart;