import { SERVICES } from "@/constants/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import HandymanIcon from "@mui/icons-material/Handyman";
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

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "サービス詳細",
      description: "YG autoのサービス詳細ページです。",
    };
  }

  return {
    title: `${service.title}`,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | YG auto`,
      description: service.description,
      url: `/services/${service.slug}`,
      images: [
        {
          url: service.image,
          alt: service.title,
        },
      ],
    },
  };
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
    <main className="pt-40 md:pt-48 pb-20 md:pb-32 min-h-screen text-gray-950 selection:bg-black selection:text-white">
      <article className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* ── Header ── */}
        <header className="mb-20 md:mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-10 md:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <span className="w-8 md:w-10 h-px bg-sub-500" />
                <HandymanIcon className="text-sub-500" sx={{ fontSize: { xs: 14, md: 16 } }} />
                <span className="block text-[0.6rem] sm:text-[0.65rem] font-light tracking-[0.4em] uppercase text-sub-500">
                  SERVICE DETAIL
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-4xl font-light tracking-[0.1em] md:tracking-[0.2em] uppercase leading-tight">
                {service?.title || "SERVICE TITLE"}
              </h1>
            </div>
            {service?.subTitle && (
              <p className="text-xs sm:text-sm md:text-base text-gray-500 tracking-[0.15em] md:tracking-[0.2em] uppercase font-light mt-4 md:mt-0">
                {service?.subTitle}
              </p>
            )}
          </div>

          <div className="w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1] relative overflow-hidden bg-black/5 rounded-sm md:rounded-none">
            <img
              src={service?.image}
              alt={service?.title || "SERVICE IMAGE"}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </header>

        {/* space-y-20 を space-y-32 にして大きな余白を取る */}
        <div className="space-y-32 md:space-y-48">
          
          {/* ── Merit ── */}
          <section>
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 mb-16 md:mb-20 border-t border-black/10 pt-10 md:pt-12">
              <div className="md:w-1/4 shrink-0">
                <div className="flex items-center gap-3">
                  <span className="w-8 md:w-10 h-px bg-sub-500" />
                  <h2 className="text-[0.65rem] sm:text-xs md:text-sm font-light tracking-[0.4em] uppercase text-sub-500">
                    MERIT
                  </h2>
                </div>
              </div>
              <div className="md:w-3/4">
                <p className="text-lg sm:text-xl md:text-2xl leading-[2] md:leading-relaxed font-light tracking-wide text-gray-800">
                  {service.meritDescription}
                </p>
              </div>
            </div>

            {/* スマホで縦並びのとき、gap-y-16 と広めにすることで窮屈さを解消 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-20">
              {service.merits.map((merit, index) => (
                <div key={merit.title} className="flex flex-col group">
                  {/* アコーディオン風ではなく、数字とタイトルを上下でしっかり分ける */}
                  <div className="flex flex-col mb-4 md:mb-6 border-b border-black/10 pb-6 md:pb-8 relative overflow-hidden">
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-sub-500 group-hover:w-full transition-all duration-700 ease-out" />
                    <span className="text-4xl sm:text-5xl font-light tracking-tighter text-sub-400 mb-4">
                      0{index + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-medium tracking-widest text-gray-900 leading-relaxed">
                      {merit.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-[2.2] font-light">
                    {merit.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Feature ── */}
          {service.feathers && service.feathers.length > 0 && (
            <section>
              <div className="border-t border-black/10 pt-10 md:pt-12 mb-16 md:mb-24">
                <div className="flex items-center gap-3">
                  <span className="w-8 md:w-10 h-px bg-sub-500" />
                  <h2 className="text-[0.65rem] sm:text-xs md:text-sm font-light tracking-[0.4em] uppercase text-sub-500">
                    FEATURES
                  </h2>
                </div>
              </div>

              {/* スマホでのgapを16から24に広げる */}
              <div className="flex flex-col gap-24 md:gap-40">
                {service.feathers.map((feature, i) => (
                  <div
                    key={feature.title}
                    className={`flex flex-col gap-10 md:gap-24 items-center ${
                      i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                  >
                    <div className="flex-1 w-full relative overflow-hidden aspect-[16/9] sm:aspect-[16/9] md:aspect-[4/3] bg-black/5 group">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div className="flex-1 w-full flex flex-col justify-center">
                      <span className="text-[0.6rem] md:text-[0.65rem] font-light tracking-[0.4em] text-sub-500 mb-6 md:mb-8 block">
                        FEATURE // {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wider mb-6 md:mb-8 leading-[1.4] text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-700 leading-[2] font-light max-w-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── Detail ── */}
          {service.detail && service.detail.length > 0 && (
            <section>
              <div className="border-t border-black/10 pt-10 md:pt-12 mb-8 md:mb-12">
                <div className="flex items-center gap-3">
                  <span className="w-8 md:w-10 h-px bg-sub-500" />
                  <h2 className="text-[0.65rem] sm:text-xs md:text-sm font-light tracking-[0.4em] uppercase text-sub-500">
                    DETAILS
                  </h2>
                </div>
              </div>

              <div className="border-t border-black/10">
                {service.detail.map((detail, idx) => (
                  <div
                    key={detail.title}
                    className="group border-b border-black/10 py-8 md:py-10 flex flex-col sm:flex-row sm:items-start md:items-center gap-6 md:gap-10 hover:bg-black/[0.02] transition-colors duration-500"
                  >
                    {/* スマホでも縮めすぎないようにする */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-black/5 overflow-hidden rounded-sm md:rounded-none">
                      <img
                        src={detail.image}
                        alt={detail.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <h3 className="text-sm sm:text-base font-semibold md:font-medium tracking-widest mb-3 text-gray-900">
                        {detail.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 leading-[1.8] md:leading-relaxed font-light md:max-w-2xl">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── Other Services ── */}
          <section className="pb-10">
            <div className="border-t border-black/10 pt-10 md:pt-12 mb-10 md:mb-16 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 md:w-10 h-px bg-sub-500" />
                <h2 className="text-[0.65rem] sm:text-xs md:text-sm font-light tracking-[0.4em] uppercase text-sub-500">
                  OTHER SERVICES
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES.filter((item) => item.slug !== service.slug).map(
                (item) => {
                  const ItemIcon = serviceIconMap[item.slug as keyof typeof serviceIconMap] ?? DirectionsCarIcon;

                  return (
                    <Link
                      href={`/services/${item.slug}`}
                      key={item.title}
                      className="group flex flex-row items-center gap-4 md:gap-6 bg-transparent border border-gray-400 p-4 md:p-6 hover:bg-black/[0.02] hover:border-sub-500 transition-colors duration-500"
                    >
                      <div className="w-20 h-14 md:w-28 md:h-16 shrink-0 overflow-hidden bg-black/5">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col flex-1 pr-2">
                        {item.subTitle && (
                          <span className="text-[0.5rem] md:text-[0.6rem] font-light text-sub-500 uppercase tracking-[0.2em] mb-1 md:mb-1.5">
                            {item.subTitle}
                          </span>
                        )}
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <ItemIcon className="text-sub-500 shrink-0" sx={{ fontSize: { xs: 14, md: 16 } }} />
                            <h3 className="text-xs md:text-sm font-medium tracking-[0.1em] md:tracking-[0.15em] uppercase text-gray-900 truncate">
                              {item.title}
                            </h3>
                          </div>
                          <span className="w-4 md:w-6 h-[1px] shrink-0 bg-sub-300 group-hover:bg-sub-500 group-hover:w-6 md:group-hover:w-8 transition-all duration-500 ml-2" />
                        </div>
                      </div>
                    </Link>
                  );
                },
              )}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
