import React from "react";
import "./App.scss";

import TrackOrder from "./track-order";

const App = () => {
  const data = {
    orderDetails: [
      {
        trackingDetails: [
          {
            type: "Ordered",
            date: "10/15/2020",
            details: "Your order has been placed",
            status: "completed",
          },
          {
            type: "Packed",
            date: "10/15/2020",
            details: "",
          },
          {
            type: "Shipped",
            date: "",
            details: "",
          },
          {
            type: "Delievered",
            date: "",
            details: "",
          },
        ],
        productDetails: {
          noOfSpecification: 2,
          productName: "Samsung product 1",
          productSpecification: {
            Color: "red",
            Type: "Smartphone",
            Dimension: "300x200",
          },
          image: "https://picsum.photos/200/300",
          price: "100.00",
        },
      },
      {
        trackingDetails: [
          {
            type: "Ordered",
            date: "10/15/2020",
            details: "Your order has been placed",
            status: "completed",
          },
          {
            type: "Packed",
            date: "10/16/2020",
            details: "",
          },
          {
            type: "Shipped",
            date: "",
            details: "",
          },
          {
            type: "Delievered",
            date: "",
            details: "",
          },
        ],
        productDetails: {
          noOfSpecification: 2,
          productName: "Samsung product 2",
          productSpecification: {
            Color: "red",
            Type: "Smartphone",
            Dimension: "300x200",
          },
          image: "https://picsum.photos/200/300",
          price: "100.00",
        },
      },
    ],
  };

  return (
    <div className="app">
      <header></header>
      <TrackOrder {...data} />
    </div>
  );
};

export default App;
