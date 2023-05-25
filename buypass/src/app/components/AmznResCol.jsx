import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";

import Loader from "./Loader";
import AmazonCard from "./AmazonCard";

import { SearchContext, SearchTermContext } from "@/app/page";
import data from "../../sample.json" assert { type: "json" };

const rainforestKey = process.env.NEXT_PUBLIC_RAINFOREST_KEY;
const baseURL = `https://api.rainforestapi.com/request?`;
const amazon_domain = `amazon.com`;

// export const ModalContext = React.createContext();

export default function AmznResCol() {
  const { search, setSearch } = useContext(SearchContext);
  const { searchTerm, setSearchTerm } = useContext(SearchTermContext);

  const [smallBusinesses, setSmallBusinesses] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log("The useEffect has been triggered");
    console.log("The searchTerm is: " + searchTerm);
    setLoading(true);
    console.log(`Loading is set to ${loading} (hopefully true)`);
    getResults();
  }, [search]);

  const getResults = async () => {
    const res = await amazonSearch(searchTerm);
    setResults(res);
    setLoading(false);
    console.log(`Loading is set to ${loading} (hopefully false)`);
  };

  async function amazonSearch(searchTerm) {
    console.log(`AmazonSearch has started for ${searchTerm}`);
    try {
      const res = await fetch(
        `${baseURL}api_key=${rainforestKey}&type=search&amazon_domain=${amazon_domain}&search_term=${searchTerm}`
      );
      const json = await res.json();
      const searchResults = json.search_results;

      console.log("The search results are:");
      console.log(searchResults);

      const smallBizArray = [];

      for (const result of searchResults) {
        if (result.is_small_business === true) {
          smallBizArray.push(result);
        }
      }
      setSmallBusinesses(smallBizArray);
      console.log("Small biz:", smallBizArray);

      return smallBizArray;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="results" className="mt-4 font-Ember z-0 overflow-y-scroll">
      {/* {search && ( */}
      <div className="sticky text-left font-bold px-1 ease-in">Results</div>
      {/* )} */}
      {loading && search && <Loader />}
      {searchTerm != "" && smallBusinesses.length === 0 && !loading ? (
        <div>
          <p>There are no small businesses selling {searchTerm} on Amazon.</p>
          <div>
            <Link
              href="https://www.sba.gov/business-guide/10-steps-start-your-business"
              target="_blank"
            >
              Maybe you could start one!
            </Link>
          </div>
        </div>
      ) : (
        // <ModalContext.Provider value={{ showModal, setShowModal }}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {smallBusinesses.map((result, index) => {
            return <AmazonCard result={result} key={index} />;
          })}
        </div>
        // </ModalContext.Provider>
      )}
    </div>
  );
}
