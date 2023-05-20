"use client";

import React, { useState } from "react";
import Headerbox from "../components/Headerbox";
import SearchCol from "../components/SearchCol";
import AmznResCol from "../components/AmznResCol";
import GglResCol from "../components/GglResCol";

export const SearchTermContext = React.createContext();
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
    <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
      <BrandContext.Provider value={{ brand, setBrand }}>
        {/* <main className="absolute mt-[15vh] flex flex-col max-h-100 overflow-y-scroll sm:mt-[40vh] smd:mt-[45vh] md:mt-[50vh] z-0 md:grid grid-cols-3 grid-rows-3"> */}
        <main className="md:grid grid-cols-3 grid-rows-auto text-center font-Bookerly">
          <div
            id="1"
            className="mb-4 bg-red-500 min-h-fit col-start-1 row-start-1 md:h-[16vh] overflow-hidden md:mb-0"
          >
            <h4 className="font-bold md:text-lg">{columns[0].heading}</h4>
            <p className="text-sm md:text-base">{columns[0].subheading}</p>
          </div>
          <div className="mb-8 bg-orange-500 col-start-1 row-start-2 md:h-[16vh]">
            2
            <SearchCol />
          </div>
          <div
            id="2"
            className="mb-4 bg-yellow-500 min-h-fit col-start-2 row-start-1 md:h-[16vh] md:mb-0"
          >
            3<h4 className="font-bold md:text-lg">{columns[1].heading}</h4>
            <p className="text-sm md:text-base">{columns[1].subheading}</p>
          </div>
          <div className="mb-4 bg-green-500 col-start-1 row-start-3 col-span-3 md:h-fit">
            4
            <AmznResCol />
          </div>
          <div
            id="3"
            className="mb-4 bg-blue-500 col-start-3 row-start-1 md:h-[16vh] md:mb-0"
          >
            5<h4 className="font-bold md:text-lg">{columns[2].heading}</h4>
            <p className="text-sm md:text-base">{columns[2].subheading}</p>
          </div>
          <div className="bg-purple-500 col-start-2 row-start-2 col-span-2 md:h-[32vh]">
            6 <GglResCol />
          </div>
        </main>
        {/* <div
            id="1"
            className="mb-4 flex-auto text-center font-Bookerly max-h-[25vh] md:bg-green-400"
          >
            <h4 className="font-bold md:text-lg">{columns[0].heading}</h4>
            <p className="text-sm md:text-base">{columns[0].subheading}</p>
          </div>
          <SearchCol className="row-start-2 mb-4 md:mb-0 md:bg-blue-400" />

          <div
            id="2"
            className="mt-8 mb-4 text-center font-Bookerly col-start-2 row-start-1 md:mt-0 max-h-[25vh] md:bg-red-400"
          >
            <h4 className="font-bold md:text-lg">{columns[1].heading}</h4>
            <p className="text-sm md:text-base">{columns[1].subheading}</p>
          </div>
          <AmznResCol className="row-start-3 md:bg-orange-400" />
          <div
            id="3"
            className="mt-8 mb-4 text-center font-Bookerly col-start-3 row-start-1 md:mt-0 max-h-[25vh] md:bg-yellow-400"
          >
            <h4 className="font-bold md:text-lg">{columns[2].heading}</h4>
            <p className="text-sm md:text-base">{columns[2].subheading}</p>
          </div>
          <GglResCol className="col-start-2 row-start-2 col-span-2  md:bg-purple-400" /> */}
        {/* </main> */}
      </BrandContext.Provider>
    </SearchTermContext.Provider>
  );
}
