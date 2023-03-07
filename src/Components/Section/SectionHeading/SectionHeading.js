import React from "react";
import "./SectionHeading.css";

const SectionHeading = ({ heading, subheading }) => {
  return (
    <div className="section-heading text-center m-0 mb-3">
      <p>{subheading}</p>
      <h2 className="">{heading}</h2>
    </div>
  );
};

export default SectionHeading;
