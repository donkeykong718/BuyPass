import React, { useContext, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import GglResModal from "./GglResModal";

import { BrandContext, GLoadingContext, ModalContext } from "../page";

import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const rainforestKey = process.env.NEXT_PUBLIC_RAINFOREST_KEY;
const baseURL = `https://api.rainforestapi.com/request?`;
const amazon_domain = `amazon.com`;

export default function AmazonCard({ result }) {
  const { modal, setModal } = useContext(ModalContext);
  const { brand, setBrand } = useContext(BrandContext);
  const { gLoading, setGLoading } = useContext(GLoadingContext);

  const { asin, image, link, title, price, rating, ratings_total, unit_price } =
    result;

  let itemPrice;
  let dollars;
  let cents;

  if (price) {
    itemPrice = parseInt(price.raw.slice(1));
    dollars = Math.trunc(itemPrice);
    cents = itemPrice - Math.trunc(itemPrice);
  }

  const handleClick = async () => {
    setGLoading(true);
    setModal(true);
    try {
      const res = await fetch(
        `${baseURL}api_key=${rainforestKey}&type=product&amazon_domain=${amazon_domain}&asin=${asin}`
      );
      const productObject = await res.json();
      console.log(productObject);

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
              ({ratings_total} reviews)
            </span>
          </div>
        </div>

        {price && (
          <div className="mt-2">
            <div>
              <span className="absolute pt-1 text-xs">{price.symbol}</span>
              <span className="text-2xl ml-1.5">{dollars}</span>
              <span className="absolute">
                <span className="relative text-xs">
                  {cents === 0 ? (
                    <>00</>
                  ) : (
                    <>
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

        <div className="flex border-2 justify-center align-middle">
          <Link href={link} target="_blank">
            <button className="flex-auto inline-block bg-[#ffd81469] border-[#FCD200] text-sm px-2 my-2 text-center align-middle rounded-lg shadow-[0_2px_5px_0_rgba(213,217,217,.5)] text-slate-400">
              Buy on Amazon
            </button>
          </Link>
          <button
            onClick={handleClick}
            className="flex-auto inline-block bg-[#FFD814] border-[#FCD200] text-sm px-2 my-2 text-center align-middle rounded-lg shadow-[0_2px_5px_0_rgba(213,217,217,.5)]"
          >
            <span className="font-bold">BUYPASS </span>Amazon
          </button>
        </div>
      </div>
    </div>
  );
}
