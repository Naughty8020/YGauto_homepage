import { SERVICES } from "@/constants/services";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PaidIcon from "@mui/icons-material/Paid";
import BuildIcon from "@mui/icons-material/Build";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const serviceIconMap = {
  sales: DirectionsCarIcon,
  purchase: PaidIcon,
  inspection: BuildIcon,
  coating: AutoAwesomeIcon,
  roadservice: LocalShippingIcon,
} as const;

export const metadata: Metadata = {
  title: "サービス一覧（整備・車検・販売）",
  description:
    "滋賀県野洲市のYG autoが提供するサービス一覧。車両販売・買取、車検・整備、コーティング、レッカー・ロードサービスまで幅広く対応します。",
  keywords: ["野洲市 整備", "野洲市 車検", "野洲市 自動車修理", "中古車販売"],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "サービス一覧（整備・車検・販売） | YG auto",
    description:
      "滋賀県野洲市のYG autoが提供するサービス一覧。整備・車検・修理・販売まで一貫してサポートします。",
    url: "/services",
  },
};

const page = () => {
  return (
    <div className="pt-28 md:pt-40 min-h-screen text-slate-800  ">
      <main className="max-w-5xl mx-auto py-8 md:py-12 px-4 md:px-6">
        {/* ===== HEADER ===== */}
        <header className="mb-10 md:mb-13">
          {/* ENラベル */}
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <span className="block w-5 md:w-7 h-px bg-sub-600 shrink-0" />
            <MiscellaneousServicesIcon className="text-sub-600" sx={{ fontSize: { xs: 14, md: 16 } }} />
            <span className="text-[0.6rem] md:text-[0.65rem] font-extrabold tracking-[0.2em] md:tracking-[0.25em] uppercase text-sub-600">
              Services
            </span>
          </div>

          {/* タイトル + 説明を横並び */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-6 pb-8 md:pb-12 border-b border-gray-400">
            <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-gray-950 leading-[1.1] tracking-tight">
              サービス一覧
            </h1>
            <p className="text-xs md:text-sm text-gray-700 leading-[1.8] md:leading-[1.9] max-w-xs font-light md:pb-1">
              お客様の生活スタイルに寄り添った、
              <br className="hidden md:block" />
              最適なサービスをご提供します。
            </p>
          </div>
        </header>

        <div className="flex justify-center items-center w-full"> 
  
  {/* <div className="w-full max-w-3xl h-[180px] md:h-[300px] rounded-none overflow-hidden relative mb-10 md:mb-24 flex-shrink-0">
    <Image
      src="/Image1.png"
      alt="サービス画像"
      fill
      priority 
      className="object-cover object-center"
    />
  </div> */}

</div>
        {/* ===== INTRO TEXT ===== */}
        <div className="mb-10 md:mb-20 w-full max-w-none">
          <h2 className="text-lg md:text-2xl font-bold text-slate-900 leading-snug mb-3 md:mb-5">
            お客様の心に寄り添った
            サービスの提供
          </h2>
          <p className="text-xs md:text-base text-gray-900 md:text-gray-800 leading-[1.9] md:leading-[1.95] font-normal md:font-light mb-3 md:mb-4">
            今の自分に合った「ちょうどいい」は、数年経つとちょうどいいと感じないのかもしれません。
            <br />
            お客様各々の生活スタイルから少しだけ背伸びした状態が「ちょうどいい」だと、私たちは考えています。
          </p>
          <p className="text-xs md:text-base text-slate-700 md:text-slate-600 leading-[1.9] md:leading-[1.95] font-normal md:font-light">
            寒さや暑さ、暮らしにくさに我慢を重ねるのではなく、もっとわがままに、お客様にとっての快適性を追求する。
            <br />
            無理難題にもアイデアで応える。
            それが、私たちのサービスです。
          </p>
        </div>

        {/* ===== SERVICE CARDS ===== */}
        <section>
          {/* セクションヘッダー */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 md:gap-3 mb-4 md:mb-8 pb-4 md:pb-6 border-b border-gray-400">
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-1.5 md:mb-2.5">
                <span className="block w-5 md:w-7 h-px bg-sub-600 shrink-0" />
                <MiscellaneousServicesIcon className="text-sub-600" sx={{ fontSize: { xs: 14, md: 16 } }} />
                <span className="text-[0.6rem] md:text-[0.65rem] font-extrabold tracking-[0.2em] md:tracking-[0.25em] uppercase text-sub-600">
                  Our Services
                </span>
              </div>
              <h2 className="text-[1.25rem] md:text-[2.2rem] font-extrabold text-gray-950 tracking-tight leading-tight">
                {SERVICES.length}つのサービス
              </h2>
            </div>
            <p className="text-[0.68rem] md:text-xs text-gray-700 font-light sm:pb-1 leading-relaxed max-w-[240px]">
              各サービスの詳細は
              <br />
              カードをクリックしてご確認ください。
            </p>
          </div>

          {/* カードグリッド */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
            {SERVICES.map((item, i) => {
              const CardIcon = serviceIconMap[item.slug as keyof typeof serviceIconMap] ?? DirectionsCarIcon;

              return (
                <Link
                  href={`/services/${item.slug}`}
                  key={item.slug}
                  className="group relative flex flex-row md:flex-col overflow-hidden rounded-none  border border-slate-500 hover:border-green-600 transition-colors duration-300"
                >
                {/* 画像エリア：スマホ=左側固定幅、PC=上部全幅 */}
                <div className="relative w-22 h-22 shrink-0 md:w-full md:h-40 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 88px, 40vw"
                    className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-in-out"
                  />
                </div>

                {/* テキストエリア */}
                <div className="flex flex-col flex-1 px-2.5 md:px-5 py-2 md:py-4 gap-1 md:gap-2 justify-center md:justify-start">
                  {/* インデックス + subTitle */}
                  <div className="flex items-center gap-2">
                    <span className="text-[0.56rem] md:text-[0.75rem] font-extrabold tracking-[0.15em] text-sub-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.subTitle && (
                      <span className="text-[0.56rem] md:text-[0.75rem] font-bold text-gray-500 uppercase tracking-widest truncate">
                        {item.subTitle}
                      </span>
                    )}
                  </div>

                  {/* タイトル行：スマホ=縦積み、PC=横並び */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-3 gap-1.5">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <CardIcon className="text-sub-500 shrink-0" sx={{ fontSize: { xs: 14, md: 18 } }} />
                      <h3 className="text-[0.84rem] md:text-lg font-medium text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1 md:gap-2 text-[0.56rem] md:text-[0.75rem] font-extrabold tracking-[0.1em] uppercase text-sub-600 whitespace-nowrap md:shrink-0">
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
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default page;
