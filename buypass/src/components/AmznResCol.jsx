import { SearchContext } from "@/app/page";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import AmazonCard from "./AmazonCard";
// import "dotenv/config";

const rainforestKey = process.env.NEXT_PUBLIC_RAINFOREST_KEY;
const baseURL = `https://api.rainforestapi.com/request?`;
const amazon_domain = `amazon.com`;

export default function AmznResCol() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [smallBusinesses, setSmallBusinesses] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    console.log("The useEffect has been triggered");
    console.log("The searchTerm is" + searchTerm);
    const getResults = async () => {
      const results = await amazonSearch(searchTerm);
      setResults(results);
    };
    getResults();
  }, [searchTerm]);

  async function amazonSearch(searchTerm) {
    console.log("AmazonSearch has started");
    console.log(rainforestKey);
    try {
      const res = await fetch(
        `${baseURL}api_key=${rainforestKey}&type=search&amazon_domain=${amazon_domain}&search_term=${searchTerm}`
      );
      const json = await res.json();
      console.log(json);
      const searchResults = json.search_results;

      console.log("The search results are:");
      console.log(searchResults);

      for (const result of searchResults) {
        if (result.is_small_business === true) {
          setSmallBusinesses([smallBusinesses + result]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      {smallBusinesses.length === 0 ? (
        <div className="newAmazonCard">
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
        <>
          {smallBusinesses.map((result, index) => {
            <AmazonCard result={result} key={index} />;
          })}
        </>
      )}
    </div>
  );
}
