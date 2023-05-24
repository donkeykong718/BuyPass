"use client";

import React, { useState } from "react";

import Logo from "./components/Logo";
import Header from "./components/Header";
import SearchCol from "./components/SearchCol";
import AmznResCol from "./components/AmznResCol";
import GglResModal from "./components/GglResModal";

export const BrandContext = React.createContext();
export const GLoadingContext = React.createContext();
export const ModalContext = React.createContext();
export const SearchContext = React.createContext();
export const SearchTermContext = React.createContext();

export default function Main() {
  const [brand, setBrand] = useState(null);
  const [gLoading, setGLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("honey");

  return (
    <main className="fixed top-0 text-center font-Bookerly">
      <div className=" bg-white min-h-[25%] max-h-[32%]">
        <Logo />
        <Header />
      </div>

      <SearchContext.Provider value={{ search, setSearch }}>
        <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
          <div className=" bg-white h-[10vh] w-[100%] pt-4">
            <SearchCol />
          </div>

          <GLoadingContext.Provider value={{ gLoading, setGLoading }}>
            <ModalContext.Provider value={{ modal, setModal }}>
              <BrandContext.Provider value={{ brand, setBrand }}>
                {/* bg-red-500 sm:bg-orange-500 smd:bg-yellow-500 md:bg-green-500 mdl:bg-blue-500 lg:bg-purple-500 */}

                {modal ? (
                  <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] [z-[999999] bg-white border-2 border-blue-500 m-auto h-1/2 w-1/3">
                    Why isn't this showing up?
                    <GglResModal />
                  </div>
                ) : (
                  <></>
                )}

                <AmznResCol />
              </BrandContext.Provider>
            </ModalContext.Provider>
          </GLoadingContext.Provider>
        </SearchTermContext.Provider>
      </SearchContext.Provider>
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
