import React from "react";

export default function Headerbox({ column }) {
  const { id, heading, subheading } = column;

  let order;
  id > 1 ? (order = 1 + Math.pow(2, id - 1)) : (order = 1);

  let numId = parseInt(id);

  return (
    <div style={{ gridColumnStart: { numId }, gridRowStart: "1" }} id={id}>
      <h4 className="m-1 font-bold">{heading}</h4>
      <p className="subheader">{subheading}</p>
    </div>
  );
}
