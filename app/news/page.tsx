import { getNewsList } from "@/lib/microcms";
import type { Metadata } from "next";
import Link from "next/link";
import NewspaperIcon from "@mui/icons-material/Newspaper";

export const metadata: Metadata = {
  title: "お知らせ・ブログ",
  description:
    "滋賀県野洲市のYG autoからのお知らせ、キャンペーン情報、整備に関するブログ記事をお届けします。",
  keywords: ["YG auto お知らせ", "野洲市 自動車 ニュース", "車検 キャンペーン"],
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: "お知らせ・ブログ | YG auto",
    description:
      "YG autoの最新情報やキャンペーン、整備のお役立ち記事をご覧いただけます。",
    url: "/news",
  },
};

/**
 * カテゴリごとのスタイルマップ
 */
const categoryStyle: Record<string, string> = {
  お知らせ:
    "bg-slate-100 text-slate-700 border-slate-300",
  キャンペーン:
    "bg-sub-50 text-sub-700 border-sub-200",
  ブログ:
    "bg-sky-50 text-sky-700 border-sky-200",
  メディア:
    "bg-amber-50 text-amber-700 border-amber-200",
};

/**
 * 日付を "YYYY.MM.DD" 形式にフォーマット
 */
function formatDate(iso: string): string {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${dd}`;
}

export default async function NewsPage() {
  const { contents: newsItems } = await getNewsList();

  return (
    <div className="pt-28 md:pt-40 min-h-screen text-slate-800 leading-relaxed">
      <main className="max-w-5xl mx-auto py-8 md:py-12 px-4 md:px-6">
        {/* ===== HEADER ===== */}
        <header className="mb-10 md:mb-16">
          {/* EN ラベル */}
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <span className="block w-5 md:w-7 h-px bg-sub-600 shrink-0" />
            <NewspaperIcon
              className="text-sub-600"
              sx={{ fontSize: { xs: 14, md: 16 } }}
            />
            <span className="text-[0.6rem] md:text-[0.65rem] font-extrabold tracking-[0.2em] md:tracking-[0.25em] uppercase text-sub-600">
              News
            </span>
          </div>

          {/* タイトル + 説明 */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-6 pb-8 md:pb-12 border-b border-gray-400">
            <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-gray-950 leading-[1.1] tracking-tight">
              お知らせ・ブログ
            </h1>
            <p className="text-xs md:text-sm text-gray-700 leading-[1.8] md:leading-[1.9] max-w-xs font-light md:pb-1">
              YG autoの最新情報や
              <br className="hidden md:block" />
              お役立ち記事をお届けします。
            </p>
          </div>
        </header>

        {/* ===== NEWS LIST ===== */}
        <section>
          {newsItems.length === 0 ? (
            <p className="text-center text-gray-500 py-16 text-sm">
              現在お知らせはありません。
            </p>
          ) : (
            <ul className="divide-y divide-gray-300">
              {newsItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/news/${item.id}`}
                    className="group flex flex-col md:flex-row md:items-start gap-2 md:gap-6 py-6 md:py-8 transition-colors duration-300 hover:bg-gray-100/60 -mx-4 md:-mx-6 px-4 md:px-6"
                  >
                    {/* 日付 + カテゴリ */}
                    <div className="flex items-center gap-3 md:gap-4 shrink-0 md:w-56 md:pt-0.5">
                      <time
                        dateTime={item.date}
                        className="text-xs md:text-sm font-medium text-gray-500 tracking-wider tabular-nums"
                      >
                        {formatDate(item.date)}
                      </time>
                      <span
                        className={`text-[0.6rem] md:text-[0.65rem] font-bold px-2.5 py-0.5 border rounded-none tracking-wider ${categoryStyle[item.category[0]] ?? "bg-slate-100 text-slate-700 border-slate-300"}`}
                      >
                        {item.category[0]}
                      </span>
                    </div>

                    {/* タイトル + 抜粋 */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-sm md:text-base font-bold text-slate-900 leading-snug group-hover:text-sub-600 transition-colors duration-300 mb-1 md:mb-2">
                        {item.title}
                      </h2>
                      <p className="text-xs md:text-sm text-gray-600 leading-[1.8] line-clamp-2 font-light">
                        {item.excerpt}
                      </p>
                    </div>

                    {/* 矢印アイコン（PC のみ） */}
                    <div className="hidden md:flex items-center shrink-0 pt-1">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 13 13"
                        fill="none"
                        className="text-gray-400 group-hover:text-sub-600 group-hover:translate-x-1 transition-all duration-300"
                      >
                        <path
                          d="M1 6.5h11M7.5 1.5l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
