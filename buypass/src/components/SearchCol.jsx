"use client";

import React, { useContext, useState } from "react";
import { SearchContext } from "@/app/page";

export default function SearchCol() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [input, setInput] = useState("");

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchTerm(input);
    console.log(searchTerm);
  };

  return (
    <div id="searchBox" className="col-start-1">
      <form onSubmit={handleSearch}>
        <input onChange={handleSearchChange} type="text" className="search" />
        <button>Search</button>
      </form>
    </div>
  );
}
