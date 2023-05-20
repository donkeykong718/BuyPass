import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" scroll={true}>
      <div className="flex align-top justify-center w-[100vw] pt-1 pb-2  min-h-fit bg-white">
        <Image
          // id="logoarrow"
          className="max-h-[20vh] h-[12vh] md:h-[16vh] mdl:h-[18vh] lg:h-[20vh] w-auto"
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
