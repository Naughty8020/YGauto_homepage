import { SERVICES } from "@/constants/services";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <main className="pt-28 md:pt-40 pb-10 sm:pb-14 md:pb-24 min-h-screen text-slate-800 bg-slate-50/50 font-shippori">
      <article className="w-full max-w-[1060px] mx-auto px-4 sm:px-6 md:px-10">
        {/* ── Header ── */}
        <header className="mb-14 sm:mb-20 md:mb-28">
          <div className="flex items-center gap-2.5 mb-5 sm:mb-7">
            <span className="block w-7 h-px bg-blue-600 shrink-0" />
            <span className="text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-blue-600">
              Service Detail
            </span>
          </div>

          <h1 className="text-[1.9rem] sm:text-[2.3rem] md:text-[2.5rem] font-extrabold text-gray-950 leading-[1.15] tracking-tight mb-7 sm:mb-10">
            {service?.title || "サービスタイトル"}
          </h1>

          <div className="w-full h-[200px] sm:h-[300px] md:h-[420px] lg:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg relative">
            <img
              src={service?.image}
              alt={service?.title || "サービス画像"}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
          </div>
        </header>

        <div className="space-y-16 sm:space-y-24 md:space-y-32">
          {/* ── Merit ── */}
          <section>
            <div className="border-t border-[#DDDDD8] pt-10 sm:pt-12 mb-8 sm:mb-10">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="block w-7 h-px bg-blue-600 shrink-0" />
                <span className="text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-blue-600">
                  Merit
                </span>
              </div>
              <h2 className="text-[1.6rem] sm:text-[1.85rem] md:text-[2rem] font-extrabold text-gray-950 tracking-tight leading-tight">
                メリット
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-6 sm:mb-10">
              {service.merits.map((merit, index) => (
                <div
                  key={merit.title}
                  className="group relative bg-white rounded-[20px] px-5 sm:px-7 pt-7 sm:pt-9 pb-6 sm:pb-8 border border-[#EAEAE7] flex flex-col overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                  <span className="absolute top-4 right-5 sm:top-5 sm:right-6 text-[3.5rem] sm:text-[4.5rem] font-extrabold leading-none text-blue-400 tracking-[-0.04em] select-none opacity-20">
                    0{index + 1}
                  </span>
                  <h3 className="text-[0.95rem] sm:text-[1.05rem] font-bold text-gray-900 mb-2 sm:mb-2.5 leading-[1.55] mt-1 sm:mt-2">
                    {merit.title}
                  </h3>
                  <p className="text-[0.82rem] sm:text-[0.84rem] text-gray-500 leading-[1.9] flex-1">
                    {merit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-[#EAEAE7] px-5 sm:px-8 py-5 sm:py-7">
              <p className="text-sm md:text-base text-gray-600 leading-[2] font-light">
                {service.meritDescription}
              </p>
            </div>
          </section>

          {/* ── Feature ── */}
          <section>
            <div className="border-t border-[#DDDDD8] pt-10 sm:pt-12 mb-12 sm:mb-16">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="block w-7 h-px bg-blue-600 shrink-0" />
                <span className="text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-blue-600">
                  Feature
                </span>
              </div>
              <h2 className="text-[1.6rem] sm:text-[1.85rem] md:text-[2rem] font-extrabold text-gray-950 tracking-tight leading-tight">
                特徴
              </h2>
            </div>

            <div className="flex flex-col gap-14 sm:gap-20 md:gap-28">
              {service.feathers.map((feature, i) => (
                <div
                  key={feature.title}
                  className={`flex flex-col gap-6 sm:gap-7 items-center md:gap-14 ${
                    i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="flex-1 w-full flex flex-col justify-center order-2 md:order-none">
                    <h3 className="text-[1.15rem] sm:text-[1.35rem] md:text-[1.65rem] font-bold text-gray-900 mb-3 sm:mb-4 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-500 leading-[1.95] font-light">
                      {feature.description}
                    </p>
                  </div>

                  <div className="group flex-1 w-full rounded-[16px] sm:rounded-[20px] overflow-hidden h-[200px] sm:h-[260px] md:h-[360px] order-1 md:order-none">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-in-out"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Detail ── */}
          {service.detail && service.detail.length > 0 && (
            <section>
              <div className="border-t border-[#DDDDD8] pt-10 sm:pt-12 mb-10 sm:mb-12">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="block w-7 h-px bg-blue-600 shrink-0" />
                  <span className="text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-blue-600">
                    Detail
                  </span>
                </div>
                <h2 className="text-[1.6rem] sm:text-[1.85rem] md:text-[2rem] lg:text-[2.6rem] font-extrabold text-gray-950 tracking-tight leading-tight">
                  詳細
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {service.detail.map((detail) => (
                  <div
                    key={detail.title}
                    className="group bg-white rounded-[20px] p-5 sm:p-7 border border-[#EAEAE7] flex gap-4 sm:gap-5 items-start"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[12px] sm:rounded-[14px] overflow-hidden shrink-0 bg-[#F0F4FF]">
                      <img
                        src={detail.image}
                        alt={detail.title}
                        className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 sm:mb-2 leading-snug">
                        {detail.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 leading-[1.9] font-light">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── Other Services ── */}
          <section className="pb-4">
            <div className="border-t border-[#DDDDD8] pt-10 sm:pt-12 mb-10 sm:mb-12">
              <h2 className="text-[1.6rem] sm:text-[1.85rem] md:text-[2rem] lg:text-[2.6rem] font-extrabold text-gray-950 tracking-tight leading-tight">
                他のサービスを見る
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {SERVICES.filter((item) => item.slug !== service.slug).map(
                (item) => (
                  <Link
                    href={`/services/${item.slug}`}
                    key={item.title}
                    className="group flex gap-4 sm:gap-5 items-center p-4 sm:p-5 rounded-[20px] bg-white border border-[#EAEAE7] hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)] hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[12px] sm:rounded-[14px] overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-[1.07] transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      {item.subTitle && (
                        <span className="text-[0.65rem] sm:text-[0.7rem] font-bold text-gray-400 uppercase tracking-widest mb-1 truncate">
                          {item.subTitle}
                        </span>
                      )}
                      <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 leading-snug">
                        {item.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 mt-2 sm:mt-2.5 text-[0.68rem] sm:text-[0.72rem] font-extrabold tracking-[0.12em] uppercase text-blue-600">
                        詳しく見る
                        <svg
                          width="13"
                          height="13"
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
                  </Link>
                ),
              )}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
