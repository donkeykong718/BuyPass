import React from "react";
import Headerbox from "./Headerbox";

const columns = [
  {
    id: "1",
    heading: "1. Search Global",
    subheading: "Search Amazon's database of 350+ million products...",
  },
  {
    id: "2",
    heading: "2. Find Local",
    subheading: "...for those made by small businesses...",
  },
  {
    id: "3",
    heading: "3. Buy Direct",
    subheading: "...and go straight to the source!",
  },
];

export default function Header() {
  return (
    <div className="topline">
      {columns.map((column, index) => (
        <Headerbox column={column} key={index} />
      ))}
    </div>
  );
}
