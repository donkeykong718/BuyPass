"use client";

import React, { useContext, useState } from "react";
import { SearchContext, SearchTermContext } from "@/app/page";
import { HiMagnifyingGlass } from "react-icons/hi2";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

export default function SearchCol() {
  const { searchTerm, setSearchTerm } = useContext(SearchTermContext);
  const { search, setSearch } = useContext(SearchContext);
  const [input, setInput] = useState("");

  // const router = useRouter();

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchTerm(input);
    setSearch(true);
    // router.push("/#results");
  };

  return (
    <div
      id="searchBox"
      className="bg-[#141920] flex justify-center align-middle py-2"
    >
      <div className="w-[75%] rounded-lg py-[1px] m-auto focus-within:bg-[#f19e39] focus-within:translate">
        <form onSubmit={handleSearch}>
          <input
            onChange={handleSearchChange}
            type="text"
            className="rounded-l-lg p-2 translate-x-[2px] h-10 w-[100%] text-sm font-Ember focus:outline-none md:text-base"
            placeholder="Search Amazon"
          />
          {/* <Link href="/#results" scroll={true}> */}
          <button className="text-[#333333] bg-[#febd69] w-11 h-10 rounded-r-lg text-center translate-x-[-2px] hover:bg-[#f19e39]">
            <HiMagnifyingGlass className="scale-150 m-auto stroke-1" />
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}
