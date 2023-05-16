import React, { useContext } from "react";
import { SearchContext } from "@/app/page";
import Image from "next/image";
import Link from "next/link";

export default function AmazonCard({ result }) {
  const { asin, image, link, title, price, rating, ratings_total, unit_price } =
    result;

  console.log("This card is for:");
  console.log(result);
  console.log("asin:" + asin);
  console.log("image:" + image);
  console.log("link:" + link);
  console.log("price:" + price.value);
  console.log("rating:" + rating);
  console.log("ratings_total:" + ratings_total);

  return (
    <div className="newAmazonCard box-border text-[#0F1111] block text-sm border-[#f5f5f5] max-w-md">
      <div className="inner-col px-1 h-100%">
        <div className="mb-2">
          <div className="relative rounded">
            <div className="mb-3">
              <div className="image-container mb-2 px-2 pt-7 relative text-center">
                <span>
                  <Link
                    href={link}
                    target="_blank"
                    className="visited:text-[#007185] cursor-pointer"
                  >
                    <div className="pt-[100%] cursor-pointer align-center">
                      <Image
                        loader={() => image}
                        src={image}
                        width={249}
                        height={600}
                        alt="product"
                        className="absolute top-0 right-0 cursor-pointer visited:text-[#007185] mx-auto max-h-[100%] max-w-[100%] align-top"
                      />
                    </div>
                  </Link>
                </span>
              </div>

              <div className="px-2 mb-2">
                <div className="mt-2">
                  <h2 className="text-xs text-ellipsis overflow-hidden font-bold">
                    <Link
                      href={link}
                      target="_blank"
                      className="visited:text-[#007185] cursor-pointer font-normal"
                    >
                      <span className="text-base">{title}</span>
                    </Link>
                  </h2>
                  <div>
                    <div className="text-sm text-[#565959]">
                      <div className="mt-1 text-[#0F1111]">
                        <span className="font-bold">ASIN: {asin}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <span>
                      <span>
                        <Link href={link} target="_blank">
                          <i>
                            <span>{rating} out of 5 stars</span>
                          </i>
                          <i></i>
                        </Link>
                      </span>
                    </span>
                    <span>
                      <Link href={link} target="_blank">
                        <span>{ratings_total}</span>
                      </Link>
                    </span>
                  </div>
                </div>

                <div>
                  <div>
                    <Link href={link} target="_blank">
                      <span>
                        <span>${price.value}</span>
                        <span>
                          <span>$</span>
                          <span>
                            {price.value}
                            <span>.</span>
                          </span>
                        </span>
                        <span>{price.value}</span>
                      </span>
                      <span>{unit_price}</span>
                    </Link>
                  </div>
                </div>

                <div>
                  <span>
                    <div>
                      <div>
                        <form>
                          <input />
                          <input />
                          <input />
                          <input />
                          <input />
                          <input />
                          <input />
                          <span>
                            <div>
                              <div>
                                <span>
                                  <span>
                                    <button></button>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </span>
                        </form>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  {
    /* <div className="buttonBox content">
        <button style={{ color: "gray" }}>Buy on Amazon</button>
        <button
          style={{
            fontWeight: "bold",
            backgroundColor: "blue",
            color: "white",
          }}
        >
          BUYPASS Amazon
              </button> */
  }
}
