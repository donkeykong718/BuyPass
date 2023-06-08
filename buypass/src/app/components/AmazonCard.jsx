import React, { useContext, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { GLoadingContext } from "../page";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const rainforestKey = process.env.NEXT_PUBLIC_RAINFOREST_KEY;
const baseURL = `https://api.rainforestapi.com/request?`;
const amazon_domain = `amazon.com`;

const googleKey = process.env.NEXT_PUBLIC_GOOGLE_KEY;
const googleURL = `https://www.googleapis.com/customsearch/v1`;
const customSearch = process.env.NEXT_PUBLIC_googleCustomSearch;

export default function AmazonCard({ result, searchTerm, mute }) {
  const { gLoading, setGLoading } = useContext(GLoadingContext);

  const [results, setResults] = useState(null);
  const [song, setSong] = useState(null);
  const [playing, setPlaying] = useState(false);

  const { asin, image, link, title, price, rating, ratings_total, unit_price } =
    result;

  useEffect(() => {
    setSong(new Audio("./BezosKills.mp3"));
  }, []);

  useEffect(() => {
    if (song) {
      if (mute && playing) {
        song.pause();
        setPlaying(false);
      } else if (playing) {
        song.play();
      }
    }
  }, [mute]);

  let itemPrice;
  let dollars;
  let cents;

  if (price) {
    itemPrice = price.value;
    dollars = Math.trunc(itemPrice);
    cents = itemPrice - Math.trunc(itemPrice);
  }

  const handleClick = async () => {
    if (!mute) {
      song.play();
      setPlaying(true);
    }

    setGLoading(true);
    let googleLoad = true;
    let brandName;
    while (googleLoad) {
      brandName = await asinSearch(asin);
      brandName ? (googleLoad = false) : (googleLoad = true);
    }
    let googleResults;
    let coLink;
    brandName ? (googleResults = await getResults(brandName)) : googleResults;
    if (googleResults) {
      coLink = googleResults.formattedUrl;
      setGLoading(false);
      window.open(coLink);
      song.pause();
      setPlaying(false);
      song.currentTime = 0;
    }
  };

  const getResults = async (brandName) => {
    const res = await googleSearch(brandName);
    setResults(res);
    return res;
  };

  const googleSearch = async (brandName) => {
    const lowBrandName = brandName.toLowerCase();
    let lowSearchTerm;
    let fullSearch;
    lowSearchTerm = searchTerm ? searchTerm.toLowerCase() : "";

    if (
      lowBrandName.includes(lowSearchTerm) &&
      (lowBrandName.includes(`company`) || lowBrandName.includes(`co.`))
    ) {
      fullSearch = brandName;
    }
    if (
      lowBrandName.includes(lowSearchTerm) &&
      !(lowBrandName.includes(`company`) || lowBrandName.includes(`.co`))
    ) {
      fullSearch = `${brandName} + company`;
    }
    if (
      !lowBrandName.includes(lowSearchTerm) &&
      (lowBrandName.includes(`company`) || lowBrandName.includes(`co.`))
    ) {
      fullSearch = `${brandName} + ${searchTerm}`;
    }
    if (
      !lowBrandName.includes(lowSearchTerm) &&
      !(lowBrandName.includes(`company`) || lowBrandName.includes(`.co`))
    ) {
      fullSearch = `${brandName} + ${searchTerm} + company`;
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

  //AMAZON API CALL TO GET BRANDNAME FROM THE ASIN NUMBER

  const asinSearch = async (asin) => {
    try {
      const res = await fetch(
        `${baseURL}api_key=${rainforestKey}&type=product&amazon_domain=${amazon_domain}&asin=${asin}`
      );
      const productObject = await res.json();

      const brandName = productObject.product.brand;
      return brandName;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleStars = (rating) => {
    for (let i = 0; i < Math.trunc(rating); i++) {
      starArray.push("full");
    }

    switch (true) {
      case rating - Math.trunc(rating) < 0.25:
        starArray.push("empty");
        break;
      case rating - Math.trunc(rating) >= 0.25 &&
        rating - Math.trunc(rating) <= 0.75:
        // halfArray = true;
        starArray.push("half");
        break;
      case rating - Math.trunc(rating) > 0.75:
        starArray.push("full");
        break;
    }

    if (starArray.length < 5) {
      for (let i = 0; i <= 5 - starArray.length; i++) {
        starArray.push("empty");
      }
    }

    return starArray;
  };

  let starArray = [];
  handleStars(rating);

  return (
    <div className="text-[#0F1111] block text-sm max-w-md px-1 h-[100%] my-4 rounded">
      {/* {showModal && (
        <GglResModal
          brand={brand}
          gLoading={gLoading}
          setGLoading={setGLoading}
        />
      )} */}

      <div className="relative mb-2 px-2 text-center bg-[#f7f7f7]">
        <div className="flex pt-[100%] justify-center h-8 w-auto z-0">
          <Image
            src={image}
            loader={() => image}
            unoptimized={true}
            className="absolute top-0 w-auto h-[100%] mx-auto bg-[#f7f7f7]"
            width={300}
            height={600}
            alt="product"
          />
        </div>
      </div>
      <div className="px-2 mb-2">
        <div className="mt-2">
          <Link href={link} target="_blank" className="hover:text-[#C7511F]">
            <h2 className="text-s line-clamp-3 text-ellipsis hover:line-clamp-none">
              {title}
            </h2>
            <div className="mt-1 text-[#0F1111] font-bold text-xs">
              ASIN: {asin}
            </div>
          </Link>
        </div>

        <div>
          {rating ? (
            <div>
              {starArray.map((star) => {
                switch (star) {
                  case "full":
                    return (
                      <BsStarFill className="pt-1 align-top inline text-[#FF9900]" />
                    );
                  // break;
                  case "half":
                    return (
                      <BsStarHalf className="pt-1 align-top inline text-[#FF9900]" />
                    );
                  // break;
                  case "empty":
                    return (
                      <BsStar className="pt-1 align-top inline text-[#FF9900]" />
                    );
                  // break;
                }
              })}
              <span className="mx-1 font-bold">{rating}</span>
              <span className="inline-block text-xs text-[#007185]">
                ({ratings_total} ratings)
              </span>
            </div>
          ) : (
            <p className="text-xs mt-1">No ratings available.</p>
          )}
        </div>

        {price && (
          <div className="mt-2 relative">
            <div classname="relative">
              <span className="absolute pt-1 translate-x-[-2] text-xs">
                {price.symbol}
              </span>
              <span className="text-2xl ml-1.5">{dollars}</span>
              <span className="absolute">
                <span className="relative text-xs">
                  {cents === 0 ? (
                    <>00</>
                  ) : (
                    <>
                      {/* {cents} */}
                      {Math.trunc(
                        (itemPrice - Math.trunc(itemPrice)).toFixed(2) * 100
                      )}
                    </>
                  )}
                </span>
              </span>
              <span className="ml-5 text-[#565959] text-sm">
                {unit_price && <>({unit_price})</>}
              </span>
            </div>
          </div>
        )}

        <div className="flex justify-center align-middle">
          <Link href={link} target="_blank">
            <button className="flex-auto inline-block bg-[#ffd81469] border-[#FCD200] text-sm px-2 m-1 text-center align-middle rounded-lg shadow-[0_2px_5px_0_rgba(213,217,217,.5)] text-slate-400">
              Buy on Amazon
            </button>
          </Link>
          <button
            onClick={handleClick}
            className="flex-auto inline-block bg-[#FFD814] border-[#FCD200] text-sm px-2 m-1 text-center align-middle rounded-lg shadow-[0_2px_5px_0_rgba(213,217,217,.5)]"
          >
            <span className="font-bold">BUYPASS </span>Amazon
          </button>
        </div>
      </div>
    </div>
  );
}
