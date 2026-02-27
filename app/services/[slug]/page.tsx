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
    <main className="bg-[#F7F6F3] py-14 md:py-24 lg:pt-50 w-full min-h-screen">
      <article className="w-full max-w-[1060px] mx-auto px-5 md:px-10">
     
        <header className="mb-20 md:mb-28">
   
          <div className="flex items-center gap-2.5 mb-7">
            <span className="block w-7 h-px bg-blue-600 shrink-0" />
            <span className="text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-blue-600">
              Service Detail
            </span>
          </div>

          <h1 className="text-[2.6rem] md:text-[2.5rem] font-extrabold text-gray-950 leading-[1.1] tracking-tight mb-10">
            {service?.title || "サービスタイトル"}
          </h1>

          <div className="w-full h-[260px] md:h-[480px] rounded-3xl overflow-hidden shadow-lg relative">
            <img
              src={service?.image}
              alt={service?.title || "サービス画像"}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
          </div>
        </header>

        <div className="space-y-24 md:space-y-32">
          <section>
            <div className="border-t border-[#DDDDD8] pt-12 mb-10">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="block w-7 h-px bg-blue-600 shrink-0" />
                <span className="text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-blue-600">
                  Merit
                </span>
              </div>
              <h2 className="text-[2rem] md:text-[2rem] font-extrabold text-gray-950 tracking-tight leading-tight">
                メリット
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {service.merits.map((merit, index) => (
                <div
                  key={merit.title}
                  className="group relative bg-white rounded-[20px] px-7 pt-9 pb-8 border border-[#EAEAE7] flex flex-col overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-[350ms] ease-out" />

                  <span className="text-[4.5rem] font-extrabold leading-none text-blue-400 tracking-[-0.04em] mb-5 select-none">
                    0{index + 1}
                  </span>
                  <h3 className="text-[1.05rem] font-bold text-gray-900 mb-2.5 leading-[1.55]">
                    {merit.title}
                  </h3>
                  <p className="text-[0.84rem] text-gray-500 leading-[1.9] flex-1">
                    {merit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-[#EAEAE7] px-8 py-7">
              <p className="text-sm md:text-base text-gray-600 leading-[2] font-light">
                {service.meritDescription}
              </p>
            </div>
          </section>

          <section>
            <div className="border-t border-[#DDDDD8] pt-12 mb-16">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="block w-7 h-px bg-blue-600 shrink-0" />
                <span className="text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-blue-600">
                  Feature
                </span>
              </div>
              <h2 className="text-[2rem] md:text-[2rem] font-extrabold text-gray-950 tracking-tight leading-tight">
                特徴
              </h2>
            </div>

            <div className="flex flex-col gap-20 md:gap-28">
              {service.feathers.map((feature, i) => (
                <div
                  key={feature.title}
                  className={`flex flex-col gap-7 items-center md:gap-14 ${
                    i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* テキスト */}
                  <div className="flex-1 w-full flex flex-col justify-center">
                    <span className="text-[4.5rem] font-extrabold leading-none text-blue-400 tracking-tight select-none mb-1">
                      0{i + 1}
                    </span>
                    <h3 className="text-[1.35rem] md:text-[1.65rem] font-bold text-gray-900 mb-4 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-500 leading-[1.95] font-light">
                      {feature.description}
                    </p>
                  </div>

                  <div className="group flex-1 w-full rounded-[20px] overflow-hidden h-[220px] md:h-[360px]">
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

          {service.detail && service.detail.length > 0 && (
            <section>
              <div className="border-t border-[#DDDDD8] pt-12 mb-12">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="block w-7 h-px bg-blue-600 shrink-0" />
                  <span className="text-[0.68rem] font-extrabold tracking-[0.2em] uppercase text-blue-600">
                    Detail
                  </span>
                </div>
                <h2 className="text-[2rem] md:text-[2.6rem] font-extrabold text-gray-950 tracking-tight leading-tight">
                  詳細
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {service.detail.map((detail) => (
                  <div
                    key={detail.title}
                    className="group bg-white rounded-[20px] p-7 border border-[#EAEAE7] flex gap-5 items-start"
                  >
                    <div className="w-20 h-20 rounded-[14px] overflow-hidden shrink-0 bg-[#F0F4FF]">
                      <img
                        src={detail.image}
                        alt={detail.title}
                        className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center flex-1">
                      <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                        {detail.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-[1.9] font-light">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="pb-4">
            <div className="border-t border-[#DDDDD8] pt-12 mb-12">
              <h2 className="text-[2rem] md:text-[2.6rem] font-extrabold text-gray-950 tracking-tight leading-tight">
                他のサービスを見る
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {SERVICES.filter((item) => item.slug !== service.slug).map(
                (item) => (
                  <Link
                    href={`/services/${item.slug}`}
                    key={item.title}
                    className="group flex gap-5 items-center p-5 rounded-[20px] bg-white border border-[#EAEAE7] hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)] hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-24 h-24 rounded-[14px] overflow-hidden shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-[1.07] transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      {item.subTitle && (
                        <span className="text-[0.7rem] font-bold text-gray-400 uppercase tracking-widest mb-1 truncate">
                          {item.subTitle}
                        </span>
                      )}
                      <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug">
                        {item.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 mt-2.5 text-[0.72rem] font-extrabold tracking-[0.12em] uppercase text-blue-600">
                        詳しく見る
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          className="group-hover:translate-x-1 transition-transform duration-250"
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
