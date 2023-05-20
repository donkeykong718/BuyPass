import { SearchContext, SearchTermContext } from "@/app/page";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import AmazonCard from "./AmazonCard";
import data from "../../sample.json" assert { type: "json" };
import Loader from "./Loader";
// import "dotenv/config";

const rainforestKey = process.env.NEXT_PUBLIC_RAINFOREST_KEY;
const baseURL = `https://api.rainforestapi.com/request?`;
const amazon_domain = `amazon.com`;

export default function AmznResCol() {
  const { search, setSearch } = useContext(SearchContext);
  const { searchTerm, setSearchTerm } = useContext(SearchTermContext);
  const [smallBusinesses, setSmallBusinesses] = useState(data);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("The useEffect has been triggered");
    console.log("The searchTerm is: " + searchTerm);
    setLoading(true);
    console.log(`Loading is set to ${loading} (hopefully true)`);
    getResults();
  }, [search]);

  // useEffect(() => {
  //   console.log("Small businesses have changed:", smallBusinesses);
  // }, [smallBusinesses]);

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
          console.log(result);
          console.log("is a small business");
          // let a = [...smallBusinesses, result];
          // console.log("new array with small businesses and results ", a);
          // setSmallBusinesses(a);
          smallBizArray.push(result);
        }
      }
      setSmallBusinesses(smallBizArray);
      // console.log("Small biz:");
      console.log("Small biz:", smallBizArray);

      // console.log("Small businesses:");

      return smallBizArray;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      id="results"
      className="top-[36vh] md:top-[40vh] mdl:top-[44vh] lg:top-[48vh] relative font-Ember z-0"
    >
      {/* {search && ( */}
      <div className="text-left font-bold px-1 ease-in">Results</div>
      {/* )} */}
      {loading && search && <Loader className="ease-in" />}
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {smallBusinesses.map((result, index) => {
            return <AmazonCard result={result} key={index} />;
          })}
        </div>
      )}
    </div>
  );
}
