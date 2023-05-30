"use client";

import React, { useState } from "react";
import AmznResCol from "../components/AmznResCol";

import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Results() {
  const [input, setInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [newSearch, setNewSearch] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchTerm(input);
    setInput();
    setNewSearch(true);
  };

  return (
    <div>
      <div className="bg-[#141920] flex justify-center align-middle py-2">
        <div className="w-[75%] rounded-lg py-[2px] px-[1px] m-auto focus-within:bg-[#f19e39]">
          <form className="flex justify-center" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
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
      <AmznResCol searchTerm={searchTerm} newSearch={newSearch} />
    </div>
  );
}
