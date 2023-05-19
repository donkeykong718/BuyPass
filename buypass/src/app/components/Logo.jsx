import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" scroll={true}>
      <div className="sticky top-0 flex align-top justify-center w-[100vw] pt-1 pb-7 min-h-fit bg-white z-[99999999]">
        <Image
          // id="logoarrow"
          src="/buypass_logo.png"
          width={500}
          height={500}
          alt="logo"
        />
        {/* <p className="flex-auto font-Bookerly text-4xl sm:text-5xl smd:text-6xl md:text-7xl font-bold ">
        buypass
      </p> */}
      </div>
    </Link>
  );
}
