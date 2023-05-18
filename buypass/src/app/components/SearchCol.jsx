"use client";

import React, { useContext, useState } from "react";
import { SearchContext } from "@/app/(main)/page";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useRouter } from "next/navigation";

export default function SearchCol() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [input, setInput] = useState("");

  const router = useRouter();

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchTerm(input);
    router.push("/#2");
  };

  return (
    <div
      id="searchBox"
      className="col-start-1 bg-[#141920] flex justify-center py-2"
    >
      <div className="w-[75%] rounded-lg py-[1px] focus-within:bg-[#f19e39] focus-within:translate">
        <form onSubmit={handleSearch}>
          <input
            onChange={handleSearchChange}
            type="text"
            className="rounded-l-lg p-2 translate-x-[2px] h-10 w-[100%] z-0 text-sm font-Ember focus:outline-none"
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
