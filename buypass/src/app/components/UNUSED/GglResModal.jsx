import React, { useContext, useEffect, useState } from "react";

import Link from "next/link";

import Loader from "./Loader";
import GResults from "./GResults";

import {
  BrandContext,
  GLoadingContext,
  ModalContext,
  SearchTermContext,
} from "@/app/page";

import { extractThumbnail } from "../utilities/extractThumbnail";
import { extractIcon } from "../utilities/extractIcon";
import { fetchHtml } from "../utilities/fetchHtml";

import { AiOutlineClose } from "react-icons/ai";

const googleKey = process.env.NEXT_PUBLIC_GOOGLE_KEY;
const googleURL = `https://www.googleapis.com/customsearch/v1`;
const customSearch = process.env.NEXT_PUBLIC_googleCustomSearch;

export default function GglResModal() {
  const { brand, setBrand } = useContext(BrandContext);
  const { gLoading, setGLoading } = useContext(GLoadingContext);
  const { modal, setModal } = useContext(ModalContext);
  const { searchTerm, setSearchTerm } = useContext(SearchTermContext);

  const [results, setResults] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    brand ? getResults() : console.log("No brand");
  }, [brand]);

  const getResults = async () => {
    const res = await googleSearch(brand);
    console.log(res);
    setResults(res);
    setGLoading(false);
  };

  useEffect(() => {
    async function getImages(url) {
      const html = await fetchHtml(url);
      const thumbnail_src = html ? extractThumbnail(html) : null;
      const icon_src = extractIcon(url);
      console.log("Extract icon returns:");
      console.log(icon_src);

      setThumbnail(thumbnail_src);
      setIcon(icon_src);
    }
    results ? getImages(results.formattedUrl) : console.log("No results yet");
  }, [results]);

  const googleSearch = async (brand) => {
    const lowBrandName = brand.toLowerCase();
    let lowSearchTerm;
    let fullSearch;
    lowSearchTerm = searchTerm ? searchTerm.toLowerCase() : "";

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

  const handleClick = () => {
    setModal(false);
  };

  return (
    <div className="absolute mt-20 h-fit w-fit p-4 min-h-[33vh] min-w-[33vw] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-sans bg-white border-2 shadow-[100px_100px_100px_9999999px_rgba(0,0,0,0.7)] z-50">
      <div className="flex justify-end">
        <button
          onClick={() => {
            handleClick();
          }}
          // onClick={setModal(false)}
          className="cursor-pointer -mt-2 -mr-2"
        >
          <AiOutlineClose />
        </button>
      </div>

      {gLoading ? (
        <Loader />
      ) : (
        <GResults thumbnail={thumbnail} brand={brand} results={results} />
      )}

      <div className="flex mt-4 font-bold justify-around">
        <Link href="/">
          <button
            onClick={() => {
              handleClick();
            }}
            className="py-3 px-6 rounded-2xl bg-[#4285F4] text-[#f7f7f7] shadow-sm"
          >
            New Search
          </button>
        </Link>
      </div>
    </div>
  );
}
