"use client";

import React, { useState } from "react";
import SearchCol from "../components/SearchCol";
import AmznResCol from "../components/AmznResCol";
import GglResCol from "../components/GglResCol";

export const SearchContext = React.createContext();

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <main className="grid grid-cols-3 grid-rows-auto gap-4 mt-10">
        <SearchCol />
        <AmznResCol />
        <GglResCol />
      </main>
    </SearchContext.Provider>
  );
}
