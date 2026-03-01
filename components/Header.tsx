"use client";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

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

  const linkClass = (path: string) =>
    `text-3xl transition ${
      pathname === path
        ? "text-yellow-400 font-bold"
        : "text-white hover:text-gray-300"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center pe-2 md:pe-6 pt-0 mt-0 z-[100] ${
        isVisible ? "" : "hidden"
      }`}
    >
      <div className="flex items-center ps-2 pe-7 pt-4 w-150 pb-2 lg:px-6 lg:pt-4 lg:pl-7 gap-2 md:gap-3 lg:gap-4 z-50">
        <Image
          src="/Image1.png"
          alt="Sample Company"
          width={300}
          height={50}
          className="w-25 h-10 lg:w-130 lg:h-35 inline-block"
        />
      </div>

      {/* PCメニュー */}
      <nav className="hidden ml-auto md:flex space-x-9 bg-black px-20 py-4 rounded-full shadow z-50">
        <Link href="/" className={linkClass("/")}>
          Home
        </Link>
        <Link href="/about" className={linkClass("/about")}>
          About
        </Link>
        <Link href="/services" className={linkClass("/services")}>
          Services
        </Link>
        <Link href="/contact" className={linkClass("/contact")}>
          お問合わせ
        </Link>
      </nav>

      {/* ハンバーガー */}
      <button
        className="md:ml-10 mt-6 p-2 z-50 rounded-lg bg-black hover:bg-gray-200 transition md:hidden ml-auto"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <CloseIcon className="w-10 h-10 text-white" />
        ) : (
          <MenuIcon className="w-10 h-10 text-white" />
        )}
      </button>

      {/* SPメニュー */}
      <nav
        className={`
          flex flex-col absolute top-0 right-0 bg-black text-white w-full h-screen justify-center items-center space-y-6
          transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5"}
        `}
      >
        <Link href="/" className={linkClass("/")}>
          Home
        </Link>
        <Link href="/about" className={linkClass("/about")}>
          About
        </Link>
        <Link href="/services" className={linkClass("/services")}>
          Services
        </Link>
        <Link href="/contact" className={linkClass("/contact")}>
          Contact
        </Link>
      </nav>
    </header>
  );
}