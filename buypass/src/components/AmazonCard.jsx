import React, { useContext, useState } from "react";
import { BrandContext } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const rainforestKey = process.env.NEXT_PUBLIC_RAINFOREST_KEY;
const baseURL = `https://api.rainforestapi.com/request?`;
const amazon_domain = `amazon.com`;

export default function AmazonCard({ result }) {
  const { asin, image, link, title, price, rating, ratings_total, unit_price } =
    result;
  const { brand, setBrand } = useContext(BrandContext);

  const handleClick = async () => {
    try {
      const res = await fetch(
        `${baseURL}api_key=${rainforestKey}&type=product&amazon_domain=${amazon_domain}&asin=${asin}`
      );
      const productObject = await res.json();

      const brandName = productObject.product.brand;
      console.log(brandName);
      setBrand(brandName);
    } catch (error) {
      console.log(error);
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
      <div className="image-container mb-2 px-2 text-center bg-[#f7f7f7]">
        <div className="flex pt-[100%] relative cursor-pointer justify-center h-8 w-auto">
          <Image
            loader={() => image}
            src={image}
            width={300}
            height={600}
            alt="product"
            className="absolute top-0 w-auto h-[100%] mx-auto bg-[#f7f7f7]"
          />
        </div>
      </div>

      <div className="px-2 mb-2">
        <div className="mt-2">
          <Link href={link} target="_blank" className="hover:text-[#C7511F]">
            <h2 className="text-s text-ellipsis overflow-hidden">{title}</h2>
            <div className="mt-1 text-[#0F1111] font-bold text-xs">
              ASIN: {asin}
            </div>
          </Link>
        </div>

        <div>
          <div className="border-2 border-blue-300">
            {starArray.map((star) => {
              switch (star) {
                case "full":
                  return (
                    <BsStarFill className="pt-1 align-top inline text-[#FF9900]" />
                  );
                  break;
                case "half":
                  return (
                    <BsStarHalf className="pt-1 align-top inline text-[#FF9900]" />
                  );
                  break;
                case "empty":
                  return (
                    <BsStar className="pt-1 align-top inline text-[#FF9900]" />
                  );
                  break;
              }
            })}
            <span className="ml-1 font-bold">{rating}</span>
            <span className="text-xs text-[#007185] ml-2">
              ({ratings_total} reviews)
            </span>
          </div>
        </div>

        <div className="mt-2">
          <div>
            <span className="top-[-.75em] text-xs">$</span>
            <span className="text-2xl">{Math.trunc(price.value)}</span>
            <span className="absolute">
              <span className="relative text-xs">
                {Math.trunc(
                  (price.value - Math.trunc(price.value)).toFixed(2) * 100
                )}
              </span>
            </span>
            <span className="ml-5 text-[#565959] text-sm">({unit_price})</span>
          </div>
        </div>

        <div className="flex">
          <Link href={link} target="_blank">
            <button className="inline-block bg-[#ffd81469] border-[#FCD200] text-sm px-2 my-2 text-center align-middle rounded-lg shadow-[0_2px_5px_0_rgba(213,217,217,.5)] text-slate-400">
              Buy on Amazon
            </button>
          </Link>
          <button
            onClick={handleClick}
            className="inline-block bg-[#FFD814] border-[#FCD200] text-sm px-2 text-center align-middle rounded-lg shadow-[0_2px_5px_0_rgba(213,217,217,.5)]"
          >
            <span className="font-bold">BUYPASS </span>Amazon
          </button>
        </div>
      </div>
    </div>
  );
}
