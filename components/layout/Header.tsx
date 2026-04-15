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

  const isActivePath = (path: string) => {
    if (path === "/") return pathname === "/";
    if (path === "/services") {
      return pathname === "/services" || pathname.startsWith("/services/");
    }
    return pathname === path;
  };

  const linkClass = (path: string) =>
    `text-[0.88rem] lg:text-[1rem] font-semibold tracking-[0.14em] uppercase border-b pb-1 transition-all duration-300 ${
      isActivePath(path)
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
      <div className="flex items-center  pe-4 pt-6 w-auto pb-1  lg:pt-6  gap-2 md:gap-3 lg:gap-4 z-40 shrink-0">
        <Image
          src="/Image1.png"
          alt="Sample Company"
          width={500}
          height={150}
          className="w-48 h-18 md:w-64 md:h-22 lg:w-100 lg:h-32 inline-block object-contain"
          priority
        />
      </div>

      {/* PCメニュー */}
      <nav className="hidden ml-auto md:flex items-center gap-7 px-6 lg:px-8 py-3 rounded-none z-50 shrink-0">
        <Link href="/" className={linkClass("/")}>
          ホーム
        </Link>
        <Link href="/about" className={linkClass("/about")}>
          会社案内・料金
        </Link>
        <Link href="/services" className={linkClass("/services")}>
          サービス一覧
        </Link>
        <Link href="/contact" className={linkClass("/contact")}>
          ご予約・お問い合わせ
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
          flex flex-col absolute top-0 right-0 w-full h-screen bg-gray-300
          transition-all duration-400 ease-out
          ${
            isOpen
              ? "opacity-100 visible translate-y-0 pointer-events-auto"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
          }
        `}
      >
        <div
          className="relative z-10 flex flex-col items-center gap-0 w-full px-6 pt-48"
          onClick={toggleMenu}
        >
          {[
            { href: "/", label: "ホーム" },
            { href: "/about", label: "会社案内・料金" },
            { href: "/services", label: "サービス一覧" },
            { href: "/contact", label: "ご予約・お問い合わせ" },
          ].map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              className={`
                group relative w-full max-w-xl py-5 text-center uppercase
                text-base font-semibold tracking-[0.14em]
                border-b border-black/10 first:border-t
                transition-colors duration-300
                ${
                  isActivePath(href)
                    ? "text-sub-600"
                    : "text-slate-900 hover:text-sub-600"
                }
              `}
              style={{ transitionDelay: isOpen ? `${i * 60}ms` : "0ms" }}
            >
              <span className="absolute left-0 bottom-0 h-px w-0 bg-sub-500 transition-all duration-300 group-hover:w-full" />
              {label}
            </Link>
          ))}
        </div>

        <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-black/40 text-[10px] tracking-[0.28em] uppercase">
          © {new Date().getFullYear()} YG AUTO
        </p>
      </nav>
    </header>
  );
}