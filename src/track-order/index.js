import React, { useState } from "react";

import DetailedTrackingDetails from "./detailed-tracking-details";
import ProductDetails from "../product-details";
import TrackingDetails from "./tracking-details";

import "./index.scss";

const TrackOrder = (props) => {
  const [detailedStatusId, setDetailedStatusId] = useState("");

  const viewDetailedStatus = (id) => {
    if (detailedStatusId === id) {
      setDetailedStatusId("");
    } else {
      setDetailedStatusId(id);
    }
  };

  return (
    <div>
      {props.orderDetails.map((od, i) => {
        const id = `track-${i}`;
        return (
          <div className="track-order" key={i}>
            <div className="container">
              <div className="order-status">
                <ProductDetails
                  classname="product-details-track"
                  productDetails={od.productDetails}
                />
                <TrackingDetails
                  id={id}
                  trackingDetails={od.trackingDetails}
                  viewDetailedStatus={viewDetailedStatus}
                  isDetailedStatusVisible={detailedStatusId === id}
                />
              </div>
              {detailedStatusId === id && (
                <DetailedTrackingDetails trackingDetails={od.trackingDetails} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrackOrder;
