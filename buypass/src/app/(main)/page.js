"use client";

import React, { useState } from "react";
import Headerbox from "../components/Headerbox";
import SearchCol from "../components/SearchCol";
import AmznResCol from "../components/AmznResCol";
import GglResCol from "../components/GglResCol";

export const SearchContext = React.createContext();
export const BrandContext = React.createContext();

export default function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [brand, setBrand] = useState("");

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

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <BrandContext.Provider value={{ brand, setBrand }}>
        <main className="absolute mt-[15vh] flex-col max-h-100 overflow-y-scroll z-0">
          {/* <Headerbox column={columns[0]} /> */}
          <div id="1" className="mb-4 text-center font-Bookerly">
            <h4 className="font-bold">{columns[0].heading}</h4>
            <p className="text-sm">{columns[0].subheading}</p>
          </div>
          <SearchCol className="mb-4" />
          <div id="2" className="mt-8 mb-4 text-center font-Bookerly">
            <h4 className="font-bold">{columns[1].heading}</h4>
            <p className="text-sm">{columns[1].subheading}</p>
          </div>
          {/* <Headerbox column={columns[1]} /> */}
          <AmznResCol />
          <div id="3" className="mt-8 mb-4 text-center font-Bookerly">
            <h4 className="font-bold">{columns[2].heading}</h4>
            <p className="text-sm">{columns[2].subheading}</p>
          </div>
          {/* <Headerbox column={columns[2]} /> */}
          <GglResCol />
        </main>
      </BrandContext.Provider>
    </SearchContext.Provider>
  );
}
