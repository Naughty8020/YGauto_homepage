import { SERVICES } from "@/constants/services";
import Link from "next/link";

const page = () => {
  return (
    <div className="pt-28 md:pt-40 min-h-screen text-slate-800 bg-slate-50/50">
      <main className="max-w-5xl mx-auto py-8 md:py-12 px-4 md:px-6">
        {/* ===== HEADER ===== */}
        <header className="mb-10 md:mb-24">
          {/* ENラベル */}
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <span className="block w-5 md:w-7 h-px bg-blue-600 shrink-0" />
            <span className="text-[0.6rem] md:text-[0.65rem] font-extrabold tracking-[0.2em] md:tracking-[0.25em] uppercase text-blue-600">
              Services
            </span>
          </div>

          {/* タイトル + 説明を横並び */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-6 pb-8 md:pb-12 border-b border-[#DDDDD8]">
            <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-gray-950 leading-[1.1] tracking-tight">
              サービス内容
            </h1>
            <p className="text-xs md:text-sm text-slate-500 leading-[1.8] md:leading-[1.9] max-w-xs font-light md:pb-1">
              お客様の生活スタイルに寄り添った、
              <br className="hidden md:block" />
              最適なサービスをご提供します。
            </p>
          </div>
        </header>

        {/* ===== HERO IMAGE ===== */}
        <div className="w-full h-[180px] md:h-[460px] rounded-2xl overflow-hidden relative mb-10 md:mb-24">
          <img
            src="/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg"
            alt="サービス画像"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
        </div>

        {/* ===== INTRO TEXT ===== */}
        <div className="mb-10 md:mb-20 max-w-2xl">
          <h2 className="text-lg md:text-2xl font-bold text-slate-900 leading-snug mb-3 md:mb-5">
            お客様の心に寄り添った
            <br />
            サービスの提供
          </h2>
          <p className="text-xs md:text-base text-slate-600 leading-[1.9] md:leading-[1.95] font-light mb-3 md:mb-4">
            今の自分に合った「ちょうどいい」は、数年経つとちょうどいいと感じないのかもしれません。
            お客様各々の生活スタイルから少しだけ背伸びした状態が「ちょうどいい」だと、私たちは考えています。
          </p>
          <p className="text-xs md:text-base text-slate-600 leading-[1.9] md:leading-[1.95] font-light">
            寒さや暑さ、暮らしにくさに我慢を重ねるのではなく、もっとわがままに、お客様にとっての快適性を追求する。
            無理難題にもアイデアで応える。それが、私たちのサービスです。
          </p>
        </div>

        {/* ===== SERVICE CARDS ===== */}
        <section>
          {/* セクションヘッダー */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 md:gap-3 mb-6 md:mb-10 pb-6 md:pb-8 border-b border-[#DDDDD8]">
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <span className="block w-5 md:w-7 h-px bg-blue-600 shrink-0" />
                <span className="text-[0.6rem] md:text-[0.65rem] font-extrabold tracking-[0.2em] md:tracking-[0.25em] uppercase text-blue-600">
                  Our Services
                </span>
              </div>
              <h2 className="text-[1.5rem] md:text-[2.4rem] font-extrabold text-gray-950 tracking-tight leading-tight">
                {SERVICES.length}つのサービス
              </h2>
            </div>
            <p className="text-[0.68rem] md:text-xs text-slate-400 font-light sm:pb-1 leading-relaxed max-w-[240px]">
              各サービスの詳細は
              <br />
              カードをクリックしてご確認ください。
            </p>
          </div>

          {/* カードグリッド */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {SERVICES.map((item, i) => (
              <Link
                href={`/services/${item.slug}`}
                key={item.slug}
                className="group relative flex flex-row md:flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
              >
                {/* 画像エリア：スマホ=左側固定幅、PC=上部全幅 */}
                <div className="w-28 shrink-0 md:w-full md:h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-in-out"
                  />
                </div>

                {/* テキストエリア */}
                <div className="flex flex-col flex-1 px-4 md:px-6 py-3 md:py-5 gap-1.5 md:gap-2.5 justify-center md:justify-start">
                  {/* インデックス + subTitle */}
                  <div className="flex items-center gap-2">
                    <span className="text-[0.65rem] md:text-[0.75rem] font-extrabold tracking-[0.15em] text-slate-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.subTitle && (
                      <span className="text-[0.65rem] md:text-[0.75rem] font-bold text-slate-400 uppercase tracking-widest truncate">
                        {item.subTitle}
                      </span>
                    )}
                  </div>

                  {/* タイトル行：スマホ=縦積み、PC=横並び */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-3 gap-1.5">
                    <h3 className="text-sm md:text-xl font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 md:gap-2 text-[0.65rem] md:text-[0.8rem] font-extrabold tracking-[0.1em] uppercase text-blue-600 whitespace-nowrap md:shrink-0">
                      詳しく見る
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 13 13"
                        fill="none"
                        className="group-hover:translate-x-1 transition-transform duration-300 md:w-3 md:h-3"
                      >
                        <path
                          d="M1 6.5h11M7.5 1.5l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default page;
