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
    subheading: "...then go straight to the source!",
  },
];

export default function Header() {
  return (
    <div
      className="max-h-[20vh] grid grid-cols-3 font-Bookerly mx-1 mt-3 pb-3 text-center line-clamp-2 z-50"
      // row-start-1 col-start-1
      // col-span-3 grid grid-cols-3 gap-4 mt-10
    >
      {columns.map((column, index) => (
        <Headerbox column={column} key={index} />
      ))}
    </div>
  );
}
