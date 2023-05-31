"use client";

import React, { useContext, useState } from "react";
import { SearchContext, SearchTermContext } from "@/app/page";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function SearchCol() {
  // const { search, setSearch } = useContext(SearchContext);
  const { searchTerm, setSearchTerm } = useContext(SearchTermContext);
  const [input, setInput] = useState("");

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchTerm(input);
    setInput();
    // setSearch(true);
  };

  return (
    <div
      id="searchBox"
      className="bg-[#141920] flex justify-center align-middle py-2"
    >
      <div className="w-[75%] rounded-lg py-[2px] px-[1px] m-auto focus-within:bg-[#f19e39]">
        <form className="flex justify-center" onSubmit={handleSearch}>
          <input
            onChange={handleSearchChange}
            type="text"
            className="rounded-l-lg p-2 translate-x-[2px] h-10 w-[100%] text-sm font-Ember focus:outline-none md:text-base"
            placeholder="Search Amazon"
          />
          <button className="text-[#333333] bg-[#febd69] w-11 h-10 rounded-r-lg text-center translate-x-[-2px] hover:bg-[#f19e39]">
            <HiMagnifyingGlass className="scale-150 m-auto stroke-1" />
          </button>
        </form>
      </div>
    </div>
  );
}
