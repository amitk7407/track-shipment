import React from "react";

import "./index.scss";

const ProductDetails = (props) => {
  const productKeys =
    (props.productDetails.productSpecification &&
      typeof props.productDetails.productSpecification === "object" &&
      Object.keys(props.productDetails.productSpecification).filter(
        (ps, i) => i < props.productDetails.noOfSpecification
      )) ||
    [];

  return (
    <div className={props.classname}>
      <img src={props.productDetails.image} />
      <div className="product-details">
        <div className="product-name">{props.productDetails.productName}</div>
        <p>
          {productKeys.map((ps, i) => (
            <React.Fragment key={i}>
              {ps}: {props.productDetails.productSpecification[ps]}
              <br />
            </React.Fragment>
          ))}
        </p>
        <div className="price">&#8377; {props.productDetails.price}</div>
      </div>
    </div>
  );
};

export default ProductDetails;
