import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="fixed w-[100%] text-center font-Bookerly pt-14 pb-7 text-4xl font-bold min-h-auto bg-white z-[99999999] translate-y-[-8px]">
      <Image
        className="absolute
        flex-auto t-[50%] l-[50%] translate-y-[-50%] scale-[65%] scale-x-75"
        // id="logoarrow"
        src="/arrowonly.png"
        width={667}
        height={146}
        alt="logo"
      />
      <p>buypass</p>
    </div>
  );
}
