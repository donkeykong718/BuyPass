import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="logocontain">
      <Image
        id="logoarrow"
        src="/arrowonly.png"
        width={667}
        height={146}
        alt="logo"
      />
      <p className="logo">buypass</p>
    </div>
  );
}
