import React, {useState, useEffect} from 'react';
import ImageHelper from './helper/ImageHelper';
import { Redirect } from 'react-router-dom';
import { addItemTCart, removeItemFromCart } from './helper/cartHelper';

const Card = ({ 
  product, 
  addtoCart = true, 
  removeFromCart = false, 
  setReload = f => f, 
  // function(f){return f}
  reload = undefined 
}) => {
  
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count)


  const cradTitle = product ? product.name: "Product Name Not Available"
  const cradDescription = product ? product.description : "Default Description"
  const cradPrice = product ? product.price: "Default"
  


  const addToCart = () =>{
    addItemTCart(product, () => setRedirect(true))   
  }

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />
    }
  }

    const showAddToCart = (addtoCart) => {
        return(
            addtoCart && (
                <button
                onClick={addToCart}
                className="btn btn-block btn-outline-success mt-2 mb-2"
              >
                Add to Cart
              </button>
            )
        )
    }
    

    const showRemoveFromCart = (removeFromCart) => {
        return(
            removeFromCart && (
                <button
                onClick={() => {
                  removeItemFromCart(product._id);
                  setReload(!reload)
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>
            )
        )
    }

    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cradTitle}</div>
        <div className="card-body">
          {getARedirect(redirect)}
          <ImageHelper product={product}/>
          <p className="lead bg-success font-weight-normal text-wrap">
            {cradDescription}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">$ {cradPrice }</p>
          <div className="row">
            <div className="col-12">
              {showAddToCart(addtoCart)}
            </div>
            <div className="col-12">
             {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Card;