import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    })
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base title="Home Page" description="Backend is deployed in Heroku! Please wait for the contents to appear">
      <div className="row text-center">
     
        {/* <div className="container">
        <h1 className="text-dark float-left">All Products</h1></div> */}
        <div className="container-flex">
        <div className="row">
          
          {products.map((product, index) => {
            return (
              <div key={index} className="col-md-4 col-lg-3 col-6 mb-4">
                <Card product={product}/>
              </div>
            );
          })}
          </div>
        </div>
        </div>
     
    </Base>
  );
} 


