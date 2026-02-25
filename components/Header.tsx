"use client";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center pe-2 md:pe-6 pt-0 mt-0 z-[100] ${isVisible ? "" : "hidden"}`}
    >
      <div className="w-full h-4 lg:h-7 bg-white  absolute top-0 left-0"></div>

      <div className="flex items-center bg-white ps-2 pe-7 pt-4 pb-2 lg:px-6 lg:py-7    rounded-br-4xl gap-2 md:gap-3 lg:gap-4 z-50">
        <div className="font-shippori   text-3xl md:text-4xl lg:text-5xl font-bold text-black z-50">
          <Image
            src="/Image1.png"
            alt="Sample Company"
            width={200}
            height={50}
            className="w-25 h-10 lg:w-110 lg:h-30 inline-block "
          />
        </div>
      </div>

      <nav className="hidden ml-auto md:flex space-x-9 bg-black bg-b px-20 py-4 mt-10 rounded-full shadow  z-50">
        <Link href="/" className="text-white text-3xl hover:text-gray-200">
          Home
        </Link>
        <Link href="/about" className="text-white text-3xl hover:text-gray-200">
          About
        </Link>
        <Link href="#" className="text-white text-3xl hover:text-gray-200">
          Services
        </Link>
        <Link
          href="/contact"
          className="text-white text-3xl hover:text-gray-200"
        >
          お問合わせ
        </Link>
      </nav>

      <button
        className=" md:ml-10 mt-6 p-2 z-50  rounded-lg bg-black hover:bg-gray-200 transition md:hidden ml-auto"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <CloseIcon className="w-10 h-10 text-white" />
        ) : (
          <MenuIcon className="ml-auto  w-10 h-10 text-white " />
        )}
      </button>

      <nav
        className={`
   
    flex flex-col absolute top-0 right-0 bg-black text-white w-full h-screen justify-center items-center space-y-6
  
    transition-all duration-500 ease-in-out
    ${
      isOpen
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible -translate-y-5"
    }
  `}
      >
        {" "}
        <Link href="/" className="text-3xl hover:text-gray-400 transition">
          Home
        </Link>
        <Link href="/about" className="text-3xl hover:text-gray-400 transition">
          About
        </Link>
        <Link
          href="/services"
          className="text-3xl hover:text-gray-400 transition"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="text-3xl hover:text-gray-400 transition"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
