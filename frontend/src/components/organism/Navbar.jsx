import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import MobileNav from "./NavbarComponents/MobileNav";
import { useLandingStore } from "../../store/useLandingStore";

const Navbar = ({ variant, isFixed = false }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const bgColor =
    variant === "main" || variant === "sub" ? "bg-primary/15" : "bg-white";

  const setHamburger = useLandingStore((state) => state.setHamburger);
  const isHamburgerOpen = useLandingStore((state) => state.isHamburgerOpen);

  useEffect(() => {
    if (isHamburgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isHamburgerOpen]);

  return (
    <>
      <header
        className={`${bgColor} p-2 font-inter border-b-1 border-gray-400 ${isFixed ? "fixed" : "sticky"
          } top-0 w-full backdrop-blur-3xl z-100`}
      >
        <MobileNav variant={variant} navigate={navigate} location={location} />
      </header>

      {variant === "landing" && isHamburgerOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 transition-opacity duration-300 ease-in-out"
          onClick={() => setHamburger()}
        />
      )}

      {variant === "landing" && (
        <div
          className={`fixed top-0 left-0 pt-[52.8px] px-2 w-full ${bgColor} rounded-b-xl z-50 transform transition-transform duration-500 ease-in-out ${isHamburgerOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          <div className="flex flex-col">
            <Link
              className="p-4 font-inter text-h5 text-black/70 text-left"
              to="/about"
              onClick={() => {
                setHamburger();
              }}
            >
              Tentang TIBER
            </Link>
            <Link
              className="p-4 font-inter text-h5 text-black/70 text-left border-b border-black/30"
              to="/hows-it-work"
              onClick={() => {
                setHamburger();
              }}
            >
              Cara Kerja
            </Link>
            <Link
              className="p-4 font-inter text-h5 text-black/70 text-left"
              to="/login"
              onClick={() => {
                setHamburger();
              }}
            >
              Masuk
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
