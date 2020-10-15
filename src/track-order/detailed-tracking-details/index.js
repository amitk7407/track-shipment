import React from "react";
import classNames from "classnames";

import { getFormattedDate } from "../tracking-details";

import "./index.scss";

const DetailedTrackingDetails = (props) => {
  return (
    <div className="detailed-tracking-details">
      <ul>
        {props.trackingDetails.map((td, i) => {
          const isInverted = i % 2 !== 0;
          return (
            <li key={i} className={classNames({ inverted: isInverted })}>
              <div className={classNames("line", td.status || "pending")}></div>
              <div className="content">
                <h3 className="status">{td.type}</h3>
                <span>{getFormattedDate(td.date)}</span>
                <div className="details">{td.details}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DetailedTrackingDetails;
