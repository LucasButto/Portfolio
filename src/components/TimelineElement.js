import React from "react";

const TimelineElement = ({ title, subTitle, description }) => {
  return (
    <div>
      <h3 className="vertical-timeline-element-title">{title}</h3>

      <p>{description}</p>
    </div>
  );
};

export default TimelineElement;
