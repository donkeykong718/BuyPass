"use client";

import React, { useState, Suspense } from "react";

import Logo from "./components/Logo";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Results from "./components/Results";

export const GLoadingContext = React.createContext();

export default function Main() {
  const [gLoading, setGLoading] = useState(false);

  return (
    <main className="text-center font-Bookerly">
      <div className="p-1">
        <div className="sticky bg-white min-h-[25%] max-h-[32%]">
          <Logo />
          <Header />
        </div>
      </div>
      <GLoadingContext.Provider value={{ gLoading, setGLoading }}>
        {gLoading && <Loader />}
        <Results />
      </GLoadingContext.Provider>
    </main>
  );
}
