import React from "react";

export default function Headerbox({ column }) {
  const { id, heading, subheading } = column;

  let numId = parseInt(id);
  console.log(`Starting on column` + parseInt(id));

  console.log(typeof numId);

  return (
    <div
      className="headerbox text-center"
      style={{ gridColumnStart: { numId }, gridRowStart: "1" }}
      id={id}
    >
      <h4 className="m-1 font-bold">{heading}</h4>
      <p className="subheader">{subheading}</p>
    </div>
  );
}
