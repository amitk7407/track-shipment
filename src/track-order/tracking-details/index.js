import React from "react";
import classNames from "classnames";

import "./index.scss";

export const getFormattedDate = (date) => {
  if (!date) {
    return;
  }
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year },
  ] = dateTimeFormat.formatToParts(new Date(date));
  return `${month}, ${day} ${year}`;
};

const TrackingDetails = (props) => {
  return (
    <div className="tracking-details">
      <ul>
        {props.trackingDetails.map((td, i) => {
          return (
            <li key={i}>
              <div>
                <h3 className="status">{td.type}</h3>
                <div
                  className={classNames("line", td.status || "pending")}
                ></div>
                <span>{getFormattedDate(td.date)}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <a onClick={() => props.viewDetailedStatus(props.id)}>
        {props.isDetailedStatusVisible ? "Hide" : "View Detailed Status"}
      </a>
    </div>
  );
};

export default TrackingDetails;
