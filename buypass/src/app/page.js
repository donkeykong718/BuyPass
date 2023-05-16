"use client";

import React, { useState } from "react";
import SearchCol from "../components/SearchCol";
import AmznResCol from "../components/AmznResCol";
import GglResCol from "../components/GglResCol";

export const SearchContext = React.createContext();
export const BrandContext = React.createContext();

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [brand, setBrand] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <BrandContext.Provider value={{ brand, setBrand }}>
        <main className="grid grid-cols-3 grid-rows-auto gap-4 mt-10">
          <SearchCol />
          <AmznResCol />
          <GglResCol />
        </main>
      </BrandContext.Provider>
    </SearchContext.Provider>
  );
}
