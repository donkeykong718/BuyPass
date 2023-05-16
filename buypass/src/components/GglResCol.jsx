import React, { useContext, useEffect, useState } from "react";
import { BrandContext, SearchContext } from "@/app/page";

const googleKey = process.env.NEXT_PUBLIC_GOOGLE_KEY;
const googleURL = `https://www.googleapis.com/customsearch/v1`;
const customSearch = process.env.NEXT_PUBLIC_googleCustomSearch;

export default function GglResCol() {
  const { brand, setBrand } = useContext(BrandContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [results, setResults] = useState("");

  useEffect(() => {
    getResults();
  }, [brand]);

  const getResults = async () => {
    const res = await googleSearch(brand);
    setResults(res);
  };

  const googleSearch = async (brand) => {
    const lowBrandName = brand.toLowerCase();
    const lowSearchTerm = searchTerm.toLowerCase();
    let fullSearch = ``;

    if (
      lowBrandName.includes(lowSearchTerm) &&
      (lowBrandName.includes(`company`) || lowBrandName.includes(`co.`))
    ) {
      fullSearch = brand;
    }
    if (
      lowBrandName.includes(lowSearchTerm) &&
      !(lowBrandName.includes(`company`) || lowBrandName.includes(`.co`))
    ) {
      fullSearch = `${brand} + company`;
    }
    if (
      !lowBrandName.includes(lowSearchTerm) &&
      (lowBrandName.includes(`company`) || lowBrandName.includes(`co.`))
    ) {
      fullSearch = `${brand} + ${searchTerm}`;
    }
    if (
      !lowBrandName.includes(lowSearchTerm) &&
      !(lowBrandName.includes(`company`) || lowBrandName.includes(`.co`))
    ) {
      fullSearch = `${brand} + ${searchTerm} + company`;
    }

    const enFullSearch = encodeURIComponent(fullSearch);

    try {
      const res = await fetch(
        `${googleURL}?q=${enFullSearch}&cx=${customSearch}&key=${googleKey}&num=10`
      );
      const results = await res.json();

      const brandSearchResult = results.items;

      const exlArr = [
        `amazon`,
        `walmart`,
        `kmart`,
        `target`,
        `walgreens`,
        `cvs`,
        `samsclub`,
        `costco`,
        `ebay`,
        "rei",
      ];
      let exclude = true;

      while (exclude === true) {
        if (
          exlArr.some((element) =>
            brandSearchResult[0].formattedUrl.includes(element)
          )
        ) {
          brandSearchResult.shift();
        } else exclude = false;
      }
      return brandSearchResult[0];
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-start-3">
      {brand != "" ? (
        <div className="border-2 border-gree-500">
          <div>{results.title}</div>
          <div>{results.snippet}</div>
          <div>{results.formattedUrl}</div>
        </div>
      ) : (
        <>This is where Google goes.</>
      )}
      <></>
    </div>
  );
}
