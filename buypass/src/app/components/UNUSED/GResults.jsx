import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function GResults({ thumbnail, brand, results }) {
  return (
    <div className="text-left min-h-fit">
      {thumbnail && (
        <Image
          src={thumbnail}
          loader={() => thumbnail}
          height={400}
          width={400}
          alt="Thumbnail"
          className="w-100vw h-auto shadow-md rounded-lg mb-2"
        />
      )}
      <div className="pb-2 flex text-sm">
        {!(icon == null) && (
          <Image
            loader={() => icon}
            src={icon}
            height={16}
            weight={16}
            alt="favicon"
          />
        )}
        <div>
          <p>{brand}</p>
          <p className="text-[#717377]">{results.formattedUrl}</p>
        </div>
      </div>
      <div className="cursor-pointer text-[#180ea4] text-xl mb-1 hover:underline">
        <Link href={results.formattedUrl} target="_blank">
          {results.title}
        </Link>
      </div>
      <div className="font-Ember text-[#606367]">{results.snippet}</div>
    </div>
  );
}
