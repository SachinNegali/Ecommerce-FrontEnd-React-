import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";
import StripeCheckout from "./StripeCheckout";
import { isAutheticated } from "../auth/helper";
import { Link } from "react-router-dom";

const Cart = () => {
  
    const[products, setProducts] = useState([]);
    const[reload, setReload] = useState(false)

    useEffect(()=> {
        setProducts(loadCart());
    }, [reload]);
    
    
const loadAllProducts = () => {
    return(
        <div>
            <h2 className="text-dark">WishList</h2>
            {products.map((product, index) =>  (
                <Card key={index} product={product} removeFromCart={true}
                addtoCart={false}
                setReload={setReload}
                reload={reload}
                 />
                 )
            )}
        </div>
    )
}

const loadCheckout = () => {
    return(
        <div>
            <h2>This section is to load Checkout</h2>
        </div>
    )
}


  return (
    <Base title="My Cart" description="Ready to Checkout">
      <div className="row text-center ">
        <div className="col-md-3 col-lg-3 col-12 mb-4">{loadAllProducts()}</div>
        <div className="col-md-6 col-lg-6 col-12 mt-4 mb-4">
        <StripeCheckout products={products} setReload={setReload}/>
        </div>        
      </div>
    </Base>
  );
} 


export default Cart;