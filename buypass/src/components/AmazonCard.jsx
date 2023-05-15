import React, { useContext } from "react";
import { SearchContext } from "@/app/page";
import Image from "next/image";

export default function AmazonCard(result) {
  const { asin, image, link, title, price, rating, ratings_total } = result;

  return (
    <div className="amazoncard">
      <Image src={image} alt="product" />
      <p className="title content">{title}</p>
      <p className="content">
        {price} | {rating} star rating ({ratings_total}){" "}
      </p>
      <div className="buttonBox content">
        <button style={{ color: "gray" }}>Buy on Amazon</button>
        <button
          style={{
            fontWeight: "bold",
            backgroundColor: "blue",
            color: "white",
          }}
        >
          BUYPASS Amazon
        </button>
      </div>
    </div>
  );
}
