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
    console.log("The searchTerm is: " + searchTerm);
    setSmallBusinesses([]);
    getResults();
  }, [searchTerm]);

  // useEffect(() => {
  //   console.log("Small businesses have changed:", smallBusinesses);
  // }, [smallBusinesses]);

  const getResults = async () => {
    const res = await amazonSearch(searchTerm);
    setResults(res);
  };

  async function amazonSearch(searchTerm) {
    console.log("AmazonSearch has started");
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

  const testArray = [1, 2, 3, 4, 5];
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
          {/* {smallBizArray[1].asin} */}
          {smallBusinesses.map((result, index) => {
            return <AmazonCard result={result} key={index} />;
          })}
          {/* {testArray.map((number) => {
            return <p className="bg-green-500">{number}</p>;
          })} */}
        </>
      )}
    </div>
  );
}
