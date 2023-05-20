import React from "react";

export default function Headerbox({ column }) {
  const { id, heading, subheading } = column;

  // let order;
  // id > 1 ? (order = 1 + Math.pow(2, id - 1)) : (order = 1);

  // let numId = parseInt(id);

  return (
    <div id={id}>
      {/* style={{ gridColumnStart: { numId }, gridRowStart: "1" }}  */}
      <h4 className="font-bold text-xs sm:text-sm smd:text-base md:text-lg lg:text-xl">
        {heading}
      </h4>
      <p className="subheader text-[10px] sm:text-xs smd:text-sm md:text-base lg:text-lg">
        {subheading}
      </p>
    </div>
  );
}
