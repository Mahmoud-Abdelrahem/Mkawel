"use client";

import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      document.getElementById("preloader")?.classList.add("loaded");
    }, 1000);

    const timeout2 = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  if (!isLoading) return null; // Hide preloader when loading is done

  return (
    <div id="preloader">
      <div className="line"></div>
    </div>
  );
};

export default Preloader;
