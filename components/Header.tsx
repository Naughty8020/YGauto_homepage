"use client";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen((prev) => !prev);

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-[100]
        flex items-center justify-between
        px-3 py-2
        sm:px-5 sm:py-3
        md:px-6 md:py-3
        lg:px-10 lg:py-4
        transition-transform duration-300
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="flex items-center  ps-2 pe-7 pt-4 w-150 pb-2 lg:px-6 lg:pt-4  lg:pl-7 gap-2 md:gap-3 lg:gap-4 z-50">
        <div className="font-shippori   text-3xl md:text-4xl lg:text-5xl font-bold text-black z-50">
          <Image
            src="/Image1.png"
            alt="Sample Company"
            width={300}
            height={50}
            className="w-25 h-10 lg:w-130 lg:h-35 inline-block "
          />
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-5 lg:gap-8 bg-black px-8 py-3 lg:px-12 lg:py-4 rounded-full shadow z-50">
        <Link
          href="/"
          className="text-white text-sm lg:text-base font-medium hover:text-gray-300 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-white text-sm lg:text-base font-medium hover:text-gray-300 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          href="/services"
          className="text-white text-3xl hover:text-gray-200"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="text-white text-sm lg:text-base font-medium hover:text-gray-300 transition-colors duration-200"
        >
          お問合わせ
        </Link>
      </nav>

      <button
        className="md:hidden z-50 p-1.5 rounded-lg bg-black hover:bg-gray-800 transition-colors duration-200"
        onClick={toggleMenu}
        aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
      >
        {isOpen ? (
          <CloseIcon className="text-white" style={{ fontSize: "1.5rem" }} />
        ) : (
          <MenuIcon className="text-white" style={{ fontSize: "1.5rem" }} />
        )}
      </button>

      <nav
        className={`
          md:hidden
          fixed inset-0 bg-black text-white
          flex flex-col justify-center items-center gap-8
          transition-all duration-500 ease-in-out
          ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"}
        `}
      >
        {[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/services", label: "Services" },
          { href: "/contact", label: "Contact" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-2xl sm:text-3xl font-medium hover:text-gray-400 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
