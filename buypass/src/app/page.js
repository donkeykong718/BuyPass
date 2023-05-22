"use client";

import React, { useState } from "react";
import SearchCol from "./components/SearchCol";
import AmznResCol from "./components/AmznResCol";
import GglResCol from "./components/GglResModal";

export const BrandContext = React.createContext();
export const GLoadingContext = React.createContext();
// export const ModalContext = React.createContext();
export const SearchContext = React.createContext();
export const SearchTermContext = React.createContext();

export default function Main() {
  const [brand, setBrand] = useState("");
  const [gLoading, setGLoading] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("honey");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
        {/* <main className="absolute mt-[15vh] flex flex-col max-h-100 overflow-y-scroll sm:mt-[40vh] smd:mt-[45vh] md:mt-[50vh] z-0 md:grid grid-cols-3 grid-rows-3"> */}
        <main className="relative text-center font-Bookerly">
          {/* md:grid grid-cols-3 grid-rows-auto  */}

          {/* <div
            id="1"
            className="mb-4 min-h-fit col-start-1 row-start-1 md:h-[16vh] overflow-hidden md:mb-0"
          >
            <h4 className="font-bold md:text-lg">{columns[0].heading}</h4>
            <p className="text-sm md:text-base">{columns[0].subheading}</p>
          </div> */}

          <div className="fixed top-[22%] sm:top-[24%] smd:top-[26%] md:top-[28%] mdl:top-[30%] lg:top-[32%] bg-white h-[10vh] w-[100%] lg:h-fit pt-4 col-start-1 row-start-2 col-span-3 md:h-[16vh] z-10">
            <SearchCol />
          </div>

          {/* <div
            id="2"
            className="mb-4 min-h-fit col-start-2 row-start-1 md:h-[16vh] md:mb-0"
          >
            <h4 className="font-bold md:text-lg">{columns[1].heading}</h4>
            <p className="text-sm md:text-base">{columns[1].subheading}</p>
          </div> */}
          <div className="top-[32%] sm:top-[34%] smd:top-[36%] md:top-[38%] mdl:top-[40%] lg:top-[42%] bg-red-500 sm:bg-orange-500 smd:bg-yellow-500 md:bg-green-500 mdl:bg-blue-500 lg:bg-purple-500">
            <BrandContext.Provider value={{ brand, setBrand }}>
              {/* <ModalContext.Provider value={{ showModal, setShowModal }}> */}
              <GLoadingContext.Provider value={{ gLoading, setGLoading }}>
                {/* <div className="top-[40vh] mb-4 col-start-1 row-start-3 col-span-3 md:h-fit"> */}
                <AmznResCol />
                {/* </div> */}
                {/* <div
            id="3"
            className="mb-4 col-start-3 row-start-1 md:h-[16vh] md:mb-0"
          >å
            <h4 className="font-bold md:text-lg">{columns[2].heading}</h4>
            <p className="text-sm md:text-base">{columns[2].subheading}</p>
          </div> */}

                {/* {showModal && <GglResCol />} */}
              </GLoadingContext.Provider>
              {/* </ModalContext.Provider> */}
            </BrandContext.Provider>
          </div>

          {/* <div className="h-[100vh]"></div> */}
        </main>
        {/* <div
            id="1"
            className="mb-4 flex-auto text-center font-Bookerly max-h-[25vh] md:bg-green-400"
          >
            <h4 className="font-bold md:text-lg">{columns[0].heading}</h4>
            <p className="text-sm md:text-base">{columns[0].subheading}</p>
          </div>
          <SearchCol className="row-start-2 mb-4 md:mb-0 md:bg-blue-400" />

          <div
            id="2"
            className="mt-8 mb-4 text-center font-Bookerly col-start-2 row-start-1 md:mt-0 max-h-[25vh] md:bg-red-400"
          >
            <h4 className="font-bold md:text-lg">{columns[1].heading}</h4>
            <p className="text-sm md:text-base">{columns[1].subheading}</p>
          </div>
          <AmznResCol className="row-start-3 md:bg-orange-400" />
          <div
            id="3"
            className="mt-8 mb-4 text-center font-Bookerly col-start-3 row-start-1 md:mt-0 max-h-[25vh] md:bg-yellow-400"
          >
            <h4 className="font-bold md:text-lg">{columns[2].heading}</h4>
            <p className="text-sm md:text-base">{columns[2].subheading}</p>
          </div>
          <GglResCol className="col-start-2 row-start-2 col-span-2  md:bg-purple-400" /> */}
        {/* </main> */}
      </SearchTermContext.Provider>
    </SearchContext.Provider>
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
