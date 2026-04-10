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

      if (isOpen) return;

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
  }, [lastScrollY, isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const linkClass = (path: string) =>
    `text-[0.88rem] lg:text-[1rem] font-semibold tracking-[0.14em] uppercase border-b pb-1 transition-all duration-300 ${
      pathname === path
        ? "text-slate-950 border-sub-500"
        : "text-slate-900 border-transparent hover:text-slate-700 hover:border-sub-300"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center pe-4 md:pe-6 pt-0 mt-0 z-100
        transition-all duration-500 ease-in-out
        ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        
      `}
    >
      <div className="flex items-center  pe-4 pt-6 w-auto pb-1 lg:px-6 lg:pt-6 lg:pl-7 gap-2 md:gap-3 lg:gap-4 z-40 shrink-0">
        <Image
          src="/Image1.png"
          alt="Sample Company"
          width={500}
          height={125}
          className="w-48 h-18 md:w-64 md:h-22 lg:w-80 lg:h-30 inline-block object-contain"
          priority
        />
      </div>

      {/* PCメニュー */}
      <nav className="hidden ml-auto md:flex items-center gap-7 px-6 lg:px-8 py-3 rounded-none z-50 shrink-0">
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

      {/* ハンバーガー */}
      <button
        className="md:ml-10 p-1.5 md:p-2 z-50 rounded-none bg-transparent hover:bg-black/10 border border-black/60 transition md:hidden ml-auto shrink-0"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <CloseIcon className="w-7 h-7 md:w-10 md:h-10 text-black" />
        ) : (
          <MenuIcon className="w-7 h-7 md:w-10 md:h-10 text-black" />
        )}
      </button>

      {/* スマホメニュー */}
      <nav
        className={`
          flex flex-col absolute top-0 right-0 w-full h-screen
          bg-slate-100/95 backdrop-blur-xl
          justify-center items-center
          transition-all duration-500 ease-in-out
          ${
            isOpen
              ? "opacity-100 visible translate-y-0 pointer-events-auto"
              : "opacity-0 invisible -translate-y-5 pointer-events-none"
          }
        `}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-sub-200/40 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-slate-300/30 blur-2xl" />
        </div>

        <div
          className="relative z-10 flex flex-col items-center gap-0 w-full px-8 mt-10"
          onClick={toggleMenu}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              className={`
                group relative w-full text-center py-6
                text-2xl font-light tracking-widest uppercase
                border-b border-slate-300/80 last:border-b-0
                transition-all duration-300
                ${
                  pathname === href
                    ? "text-sub-500"
                    : "text-slate-700 hover:text-sub-600"
                }
              `}
              style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
            >
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-px bg-sub-500 group-hover:w-8 transition-all duration-300" />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-px bg-sub-500 group-hover:w-8 transition-all duration-300" />
              {label}
            </Link>
          ))}
        </div>

        <p className="absolute bottom-10 text-white/20 text-xs tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} YG AUTO
        </p>
      </nav>
    </header>
  );
}