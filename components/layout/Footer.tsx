import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 bg-white text-black py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-12">
        <div className="border border-black/10 px-5 py-6 sm:px-7 sm:py-7 md:px-8 md:py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-center justify-center gap-3 md:justify-start">
                <span className="h-px w-8 bg-sub-500" />
                <p className="text-xs tracking-[0.2em] uppercase text-sub-500">YG AUTO</p>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">© 2026 YG AUTO. All rights reserved.</p>
            </div>

            <a
              href="https://www.instagram.com/p/DTZbFwkEcIH/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex min-h-11 items-center justify-center gap-2 border border-black/15 px-5 py-2 text-xs sm:text-sm uppercase tracking-[0.14em] text-gray-700 hover:text-sub-600 hover:border-sub-500 transition-colors"
            >
              <Instagram size={18} />
              Instagram
            </a>
          </div>

          <nav className="mt-6 grid grid-cols-2 gap-px border border-black/10 bg-black/10 text-[11px] sm:text-sm tracking-[0.14em] uppercase md:mt-7 md:grid-cols-4">
            <Link
              href="/"
              className="bg-white py-3 text-center text-gray-700 transition-colors hover:text-sub-600"
            >
              ホーム
            </Link>
            <Link
              href="/about"
              className="bg-white py-3 text-center text-gray-700 transition-colors hover:text-sub-600"
            >
              会社案内
            </Link>
            <Link
              href="/services"
              className="bg-white py-3 text-center text-gray-700 transition-colors hover:text-sub-600"
            >
              サービス一覧
            </Link>
            <Link
              href="/contact"
              className="bg-white py-3 text-center text-gray-700 transition-colors hover:text-sub-600"
            >
              ご予約・お問い合わせ
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
