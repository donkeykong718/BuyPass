"use client";

import React, { useState, Suspense } from "react";

import Image from "next/image";

import Logo from "./components/Logo";
import Header from "./components/Header";
// import SearchCol from "./components/SearchCol";
// import AmznResCol from "./components/AmznResCol";
// import GglResModal from "./components/GglResModal";
import Loader from "./components/Loader";
import Results from "./components/Results";

// export const BrandContext = React.createContext();
export const GLoadingContext = React.createContext();
// export const MuteContext = React.createContext();
// export const ModalContext = React.createContext();
// export const SearchContext = React.createContext();
// export const SearchTermContext = React.createContext();

export default function Main() {
  // const [brand, setBrand] = useState(null);
  const [gLoading, setGLoading] = useState(false);
  // const [mute, setMute] = useState(false);
  // const [modal, setModal] = useState(false);
  // const [search, setSearch] = useState(false);
  // const [searchTerm, setSearchTerm] = useState(null);

  return (
    <main className="text-center font-Bookerly">
      {/* <MuteContext.Provider value={{ mute, setMute }}> */}
      <div className="p-1">
        <div className="sticky bg-white min-h-[25%] max-h-[32%]">
          <Logo />
          <Header />
        </div>
      </div>
      <GLoadingContext.Provider value={{ gLoading, setGLoading }}>
        {gLoading && (
          <Loader />
          // <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          //   <iframe
          //     width="560"
          //     height="315"
          //     src="https://www.youtube.com/embed/77cMmCVBT3g?controls=0&amp;start=72"
          //     title="YouTube video player"
          //     frameborder="0"
          //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          //     allowfullscreen
          //   ></iframe>
          // </div>
        )}
        <Results />
      </GLoadingContext.Provider>
      {/* </MuteContext.Provider> */}
      {/* <SearchContext.Provider value={{ search, setSearch }}>
        <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
          <div className=" bg-white h-[10vh] w-[100%] pt-4">
            <SearchCol />
          </div>

          <GLoadingContext.Provider value={{ gLoading, setGLoading }}>
            <ModalContext.Provider value={{ modal, setModal }}>
              <BrandContext.Provider value={{ brand, setBrand }}>

                {modal ? (
                  <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] [z-[999999] bg-white border-2 border-blue-500 p-3 m-auto h-1/2 w-1/3 min-w-fit z-50">
                    <Loader />
                  </div>
                ) : (
                  <></>
                )}
                <AmznResCol />
              </BrandContext.Provider>
            </ModalContext.Provider>
          </GLoadingContext.Provider>
        </SearchTermContext.Provider>
      </SearchContext.Provider> */}
    </main>
  );
}

// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function Page({ children }) {
//   const router = useRouter();

//   useEffect(() => {
//     router.push("/main");
//   }, []);
//   return <>{children}</>;
// }
