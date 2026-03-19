import { SERVICES } from "@/constants/services";
import Link from "next/link";

const page = () => {
  return (
    <main className=" py-14 md:py-24 lg:pt-50 w-full min-h-screen">
      <article className="w-full max-w-[1060px] mx-auto px-5 md:px-10">
        {/* ===== HEADER ===== */}
        <header className="mb-16 md:mb-24">
          {/* ENラベル */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-7 h-px bg-blue-600 shrink-0" />
            <span className="text-[0.65rem] font-extrabold tracking-[0.25em] uppercase text-blue-600">
              Services
            </span>
          </div>

          {/* タイトル + 説明を横並び */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-[#DDDDD8]">
            <h1 className="text-[2.8rem] md:text-[2.5rem] font-extrabold text-gray-950 leading-[1.05] tracking-tight">
              サービス内容
            </h1>
            <p className="text-sm text-gray-500 leading-[1.9] max-w-xs font-light md:pb-1">
              お客様の生活スタイルに寄り添った、
              <br className="hidden md:block" />
              最適なサービスをご提供します。
            </p>
          </div>
        </header>

        {/* ===== HERO IMAGE ===== */}
        <div className="w-full h-[240px] md:h-[460px] rounded-2xl overflow-hidden relative mb-16 md:mb-24">
          <img
            src="/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg"
            alt="サービス画像"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
        </div>

        {/* ===== INTRO TEXT ===== */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-5">
            お客様の心に寄り添った
            <br />
            サービスの提供
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-[1.95] font-light mb-4">
            今の自分に合った「ちょうどいい」は、数年経つとちょうどいいと感じないのかもしれません。
            お客様各々の生活スタイルから少しだけ背伸びした状態が「ちょうどいい」だと、私たちは考えています。
          </p>
          <p className="text-sm md:text-base text-gray-500 leading-[1.95] font-light">
            寒さや暑さ、暮らしにくさに我慢を重ねるのではなく、もっとわがままに、お客様にとっての快適性を追求する。
            無理難題にもアイデアで応える。それが、私たちのサービスです。
          </p>
        </div>

        {/* ===== SERVICE CARDS ===== */}
        <section>
          {/* セクションヘッダー */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10 pb-8 border-b border-[#DDDDD8]">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-7 h-px bg-blue-600 shrink-0" />
                <span className="text-[0.65rem] font-extrabold tracking-[0.25em] uppercase text-blue-600">
                  Our Services
                </span>
              </div>
              <h2 className="text-[1.8rem] md:text-[2.4rem] font-extrabold text-gray-950 tracking-tight leading-tight">
                {SERVICES.length}つのサービス
              </h2>
            </div>
            <p className="text-xs text-gray-400 font-light sm:pb-1 leading-relaxed max-w-[240px]">
              各サービスの詳細は
              <br />
              カードをクリックしてご確認ください。
            </p>
          </div>

          {/* カードグリッド */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICES.map((item, i) => (
              <Link
                href={`/services/${item.slug}`}
                key={item.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-[#EAEAE7] hover:shadow-[0_16px_48px_rgba(37,99,235,0.1)] hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
              >
                {/* 画像エリア */}
                <div className="w-full h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-in-out"
                  />
                </div>

                {/* テキストエリア */}
                <div className="flex items-start justify-between gap-4 px-6 py-5">
                  <div className="flex flex-col min-w-0">
                    {/* インデックス */}
                    <span className="text-[0.65rem] font-extrabold tracking-[0.15em] text-gray-300 mb-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.subTitle && (
                      <span className="text-[0.68rem] font-bold text-gray-400 uppercase tracking-widest mb-1 truncate">
                        {item.subTitle}
                      </span>
                    )}
                    <h3 className="text-base md:text-[1.05rem] font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 mt-3 text-[0.68rem] font-extrabold tracking-[0.12em] uppercase text-blue-600">
                      詳しく見る
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 13 13"
                        fill="none"
                        className="group-hover:translate-x-1 transition-transform duration-300"
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

                  {/* 矢印アイコン（右上） */}
                  <div className="shrink-0 w-9 h-9 rounded-full border border-[#EAEAE7] group-hover:border-blue-600 group-hover:bg-blue-600 flex items-center justify-center transition-all duration-300 mt-0.5">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      className="text-gray-300 group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5 transition-transform"
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
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
};

export default page;
