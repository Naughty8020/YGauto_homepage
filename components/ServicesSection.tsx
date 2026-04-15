import Image from "next/image";
import Link from "next/link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import { Service, SERVICES } from "@/constants/services";

export default function ServicesSection() {
  return (
    <section className="py-10 md:py-24  text-black overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-5 sm:px-6 lg:px-12">
        {/* エレガントなタイトル領域 */}
        <div className="flex flex-col gap-4 md:gap-6 md:flex-row md:items-end justify-between mb-5 md:mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2 md:mb-4">
              <span className="w-8 md:w-10 h-px bg-sub-500" />
              <MiscellaneousServicesIcon className="text-sub-500" sx={{ fontSize: { xs: 14, md: 16 } }} />
              <span className="text-[11px] md:text-sm font-normal md:font-light tracking-[0.3em] text-sub-600 md:text-sub-500 uppercase block">
                Our Services
              </span>
            </div>
  <h1 className="text-[2rem] md:text-[4rem] font-mono  text-gray-950 leading-[1.1] tracking-tight">
              サービス内容
            </h1>

          </div>
          <div className="md:max-w-md lg:max-w-lg">
            <p className="text-[13px] md:text-sm text-gray-800 md:text-gray-700 leading-relaxed font-normal md:font-light text-justify">
              安心・安全なカーライフをお届けするために。販売から車検・整備、板金塗装まで、クルマに関するあらゆるサポートをハイクオリティにご提供します。
            </p>
          </div>
        </div>


        {/* 極めてミニマルで洗練されたハイエンド・レイアウト */}
        <div className="flex flex-col gap-20 md:gap-40  border-t border-gray-5R0 pt-10 ">
          {SERVICES.map((service: Service, index: number) => {
            const number = String(index + 1).padStart(2, "0");
            const isReverse = index % 2 === 1;

            return (
              <div
                key={service.slug}
                className={`flex flex-col ${
                  isReverse ? "md:flex-row-reverse" : "md:flex-row"
                } justify-between md:items-center gap-8 md:gap-20 lg:gap-32 group`}
              >
                {/* --- 画像エリア --- */}
                {/* ギミックを排除し、純粋に美しいプロポーションを追求 */}
                <div className="w-full md:w-1/2 lg:w-5/12 shrink-0">
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="block relative w-full aspect-[16/9] md:aspect-[16/10] lg:aspect-[4/3] overflow-hidden bg-[#f8f8f8]"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] md:grayscale group-hover:grayscale-0"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    />
                  </Link>
                </div>

                {/* --- テキストエリア --- */}
                <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center px-4 sm:px-0 lg:px-12">
                  {/* エレガントなナンバリングと罫線 */}
                  <div className="flex items-center gap-4 mb-6 md:mb-10">
                    <span className="text-[11px] md:text-xs font-normal md:font-light tracking-[0.3em] text-sub-600 md:text-sub-400">
                      NO. {number}
                    </span>
                    <div className="h-[1px] bg-gray-200 flex-grow max-w-[80px] md:max-w-[120px] transition-all duration-[1s] group-hover:bg-sub-500 group-hover:max-w-[150px]"></div>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal md:font-light tracking-widest text-black mb-6 md:mb-10">
                    {service.title}
                  </h3>

                  <p className="text-[14px] md:text-base leading-[2.1] md:leading-[2.4] text-gray-900 md:text-gray-800 font-normal md:font-light mb-8 md:mb-12 text-justify">
                    {service.description}
                  </p>

                  <div className="flex justify-start">
                    <Link
                      href={`/services/${service.slug}`}
                      className="group/btn inline-flex items-center gap-4 text-[11px] md:text-xs font-normal md:font-light tracking-[0.2em] text-sub-700 md:text-sub-600 uppercase pb-3 border-b border-sub-300 md:border-sub-200 hover:text-sub-700 hover:border-sub-700 transition-colors"
                    >
                      <span className="tracking-[0.3em]">詳しく見る</span>
                      <ArrowForwardIosIcon 
                        sx={{ fontSize: 9 }} 
                        className="transition-transform duration-500 group-hover/btn:translate-x-1" 
                      />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
