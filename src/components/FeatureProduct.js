import React from 'react';
import "../style/feature.css";
import {useProductContext}  from "../context/Productcontext";
import Product from './Product';


const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
    

  if (isLoading) {
    return <div> ......Loading </div>;
  }
  return (
    <>
        <div className="container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feature Services</div>
        <div className="grid grid-three-column">
        {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>

    </>
  ) 
}

export default FeatureProduct;