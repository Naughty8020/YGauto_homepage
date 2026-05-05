import { getNewsList, getNewsDetail } from "@/lib/microcms";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

/**
 * 静的パス生成 — microCMS から全記事のIDを取得
 */
export async function generateStaticParams() {
  const { contents } = await getNewsList();
  return contents.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const item = await getNewsDetail(id);
    return {
      title: item.title,
      description: item.excerpt,
      alternates: {
        canonical: `/news/${item.id}`,
      },
      openGraph: {
        title: `${item.title} | YG auto`,
        description: item.excerpt,
        url: `/news/${item.id}`,
      },
    };
  } catch {
    return {
      title: "お知らせ詳細",
      description: "YG autoのお知らせ詳細ページです。",
    };
  }
}

/**
 * カテゴリごとのスタイルマップ
 */
const categoryStyle: Record<string, string> = {
  お知らせ: "bg-slate-100 text-slate-700 border-slate-300",
  キャンペーン: "bg-sub-50 text-sub-700 border-sub-200",
  ブログ: "bg-sky-50 text-sky-700 border-sky-200",
  メディア: "bg-amber-50 text-amber-700 border-amber-200",
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

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const item = await getNewsDetail(id).catch(() => null);

  if (!item) notFound();

  // 一覧を取得して前後の記事を探す
  const { contents: allItems } = await getNewsList();
  const currentIndex = allItems.findIndex((n) => n.id === id);
  const prevItem = currentIndex > 0 ? allItems[currentIndex - 1] : null;
  const nextItem =
    currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

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
              News Detail
            </span>
          </div>

          {/* 日付 + カテゴリ */}
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
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

          {/* タイトル */}
          <div className="pb-8 md:pb-12 border-b border-gray-400">
            <h1 className="text-xl md:text-[2rem] font-extrabold text-gray-950 leading-[1.3] md:leading-[1.2] tracking-tight">
              {item.title}
            </h1>
          </div>
        </header>

        {/* ===== BODY (リッチエディタのHTML) ===== */}
        <article className="mb-16 md:mb-24">
          <div
            className="max-w-3xl prose-article"
            dangerouslySetInnerHTML={{ __html: item.body }}
          />
        </article>

        {/* ===== PREV / NEXT ===== */}
        <nav className="border-t border-gray-300 pt-8 md:pt-12 mb-10 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* 前の記事 */}
            {prevItem ? (
              <Link
                href={`/news/${prevItem.id}`}
                className="group flex items-start gap-3 md:gap-4 py-4 md:py-5 px-4 md:px-6 border border-gray-300 hover:border-sub-500 transition-colors duration-300"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 13 13"
                  fill="none"
                  className="text-gray-400 group-hover:text-sub-600 group-hover:-translate-x-1 transition-all duration-300 mt-1 shrink-0 rotate-180"
                >
                  <path
                    d="M1 6.5h11M7.5 1.5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="min-w-0">
                  <span className="text-[0.6rem] md:text-[0.65rem] font-bold tracking-wider text-gray-400 uppercase block mb-1">
                    Prev
                  </span>
                  <span className="text-xs md:text-sm font-medium text-slate-800 group-hover:text-sub-600 transition-colors duration-300 line-clamp-2 leading-relaxed">
                    {prevItem.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {/* 次の記事 */}
            {nextItem ? (
              <Link
                href={`/news/${nextItem.id}`}
                className="group flex items-start gap-3 md:gap-4 py-4 md:py-5 px-4 md:px-6 border border-gray-300 hover:border-sub-500 transition-colors duration-300 md:text-right md:flex-row-reverse"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 13 13"
                  fill="none"
                  className="text-gray-400 group-hover:text-sub-600 group-hover:translate-x-1 transition-all duration-300 mt-1 shrink-0"
                >
                  <path
                    d="M1 6.5h11M7.5 1.5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="min-w-0">
                  <span className="text-[0.6rem] md:text-[0.65rem] font-bold tracking-wider text-gray-400 uppercase block mb-1">
                    Next
                  </span>
                  <span className="text-xs md:text-sm font-medium text-slate-800 group-hover:text-sub-600 transition-colors duration-300 line-clamp-2 leading-relaxed">
                    {nextItem.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>

        {/* ===== 一覧へ戻る ===== */}
        <div className="flex justify-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm md:text-base font-bold tracking-wider text-sub-600 border border-sub-400 px-8 py-3 hover:bg-sub-600 hover:text-white transition-all duration-300"
          >
            <ArrowBackIcon sx={{ fontSize: { xs: 16, md: 18 } }} />
            お知らせ一覧へ戻る
          </Link>
        </div>
      </main>
    </div>
  );
}
