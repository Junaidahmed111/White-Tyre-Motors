"use client";
import React, { useState, useEffect } from "react";
import HeaderBar from "./header/HeaderBar";
import Header2 from "./header/Header2";
import Header1 from "./header/Header1";

const Navbar = () => {
  const [showSecondComponent, setShowSecondComponent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSecondComponent(true);
      } else {
        setShowSecondComponent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header1 />
      {!showSecondComponent ? <Header2 /> : <HeaderBar />}
    </div>
  );
};

export default Navbar;
