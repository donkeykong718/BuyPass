import React, { useContext, useEffect, useState } from "react";
import { BrandContext, SearchContext } from "@/app/(main)/page";
import Link from "next/link";
import Image from "next/image";
import { fetchHtml } from "../utilities/fetchHtml";
import { extractThumbnail } from "../utilities/extractThumbnail";

const googleKey = process.env.NEXT_PUBLIC_GOOGLE_KEY;
const googleURL = `https://www.googleapis.com/customsearch/v1`;
const customSearch = process.env.NEXT_PUBLIC_googleCustomSearch;

export default function GglResCol() {
  const { brand, setBrand } = useContext(BrandContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [results, setResults] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    getResults();
  }, [brand]);

  const getResults = async () => {
    const res = await googleSearch(brand);
    setResults(res);
  };

  useEffect(() => {
    async function getThumbnail(url) {
      const html = await fetchHtml(url);
      const thumb = html ? extractThumbnail(html) : null;

      setThumbnail(thumb);
    }
    getThumbnail(results.formattedUrl);
  }, [results]);

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
      console.log(brandSearchResult[0]);
      return brandSearchResult[0];
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row-start-1 col-start-2 col-span-2 p-2 mb-[80vh]">
      {brand != "" ? (
        <div className="font-sans">
          {thumbnail && (
            <Image
              loader={() => thumbnail}
              src={thumbnail}
              height={400}
              width={400}
              alt="Thumbnail"
              className="w-100vw h-auto shadow-md rounded-lg"
            />
          )}
          <div className="py-2 text-sm">
            <p>{brand}</p>
            <p className="text-[#717377]">{results.formattedUrl}</p>
          </div>
          <div className="text-[#180ea4] text-xl mb-1 hover:underline">
            <Link href={results.formattedUrl} target="_blank">
              {results.title}
            </Link>
          </div>
          {/* <Image
            src={results.pagemap.cse_image[0].src}
            width={500}
            height={500}
            alt="local"
          /> */}
          <div className="font-Ember text-[#606367]">{results.snippet}</div>
        </div>
      ) : (
        <>This is where Google goes.</>
      )}
      <></>
      <div className="font-bold text-center mt-[15vh]">
        <Link href="/#1">
          <button className="py-3 px-6 rounded-2xl bg-[#4285F4] text-[#f7f7f7] shadow-md shadow-yellow-500">
            Search Again
          </button>
        </Link>
      </div>
    </div>
  );
}
