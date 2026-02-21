import { SERVICES } from "@/constants/services";
import { notFound } from "next/navigation";
import Link from "next/link";

// Next.jsのImageコンポーネントを使用する場合はnext.config.jsの設定が必要なため、
// 今回は一時的に標準のimgタグでスタイリングしています。
// import Image from "next/image";

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
    <main className="bg-white py-12 md:py-24 w-full min-h-screen">
      <article className="w-full mx-auto bg-white p-6 md:p-12 rounded-3xl border border-gray-100">
        <header className="mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-8">
            {service?.title || "サービスタイトル"}
          </h1>
          <div className="w-full h-[250px] md:h-[450px] rounded-2xl overflow-hidden shadow-md">
            <img
              src={service?.image}
              alt={service?.title || "サービス画像"}
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
          </div>
        </header>

        <div className="space-y-20">
          <section className="flex flex-col">
            <div className="mb-10 pt-16 text-center md:text-left flex flex-col items-center md:items-start border-t-1 border-gray-300">
              <span className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-1">
                Merit
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block relative pb-2">
                メリット
                <span className="absolute bottom-0 left-0 w-1/3 h-1  rounded-full"></span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full">
              {service.merits.map((merit, index) => (
                <div
                  key={merit.title}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-start hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-blue-300 font-extrabold text-3xl mb-4 italic">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {merit.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {merit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-6 md:p-8">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {service.meritDescription}
              </p>
            </div>
          </section>

          <section className="border-t border-gray-300 pt-16">
            <div className="mb-10 text-center md:text-left flex flex-col items-center md:items-start">
              <span className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-1">
                Feature
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block relative pb-2">
                特徴
                <span className="absolute bottom-0 left-0 w-1/3 h-1"></span>
              </h2>
            </div>

            <div className="space-y-16 md:space-y-24 mt-12">
              {service.feathers.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col md:flex-row gap-8 md:gap-16 items-center"
                >
                  <div className="flex-1 w-full flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {service.detail && service.detail.length > 0 && (
            <section className="border-t border-gray-200 pt-16">
              <div className="mb-10 text-center md:text-left flex flex-col items-center md:items-start">
                <span className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-1">
                  Detail
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block relative pb-2">
                  詳細
                  <span className="absolute bottom-0 left-0 w-1/3 h-1 "></span>
                </h2>
              </div>

              <div className="mt-8 flex flex-row gap-12 md:gap-20 ">
                {service.detail.map((detail) => (
                  <div
                    key={detail.title}
                    className=" flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start snap-center"
                  >
                    <div className="flex-none">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md border-4 border-white group">
                        <img
                          src={detail.image}
                          alt={detail.title}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    <div className="flex-1 w-full flex flex-col justify-center text-center md:text-left pt-2 md:pt-4">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 leading-tight">
                        {detail.title}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="border-t border-gray-200 pt-16">
            <div className="mb-10 text-center md:text-left flex flex-col items-center md:items-start">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block relative pb-2">
                他のサービスをもっと知る
                <span className="absolute bottom-0 left-0 w-1/3 h-1 "></span>
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full">
              {SERVICES.filter((item) => item.slug !== service.slug).map(
                (item) => (
                  <Link
                    href={`/services/${item.slug}`}
                    key={item.title}
                    className="group flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start p-4 md:p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className=" flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start snap-center">
                      <div className="flex-none">
                        <div className="w-32 h-32 md:w-40 md:h-40  overflow-hidden shadow-md border-4 border-white group">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </div>

                      <div className="flex-1 w-full flex flex-col justify-center text-center md:text-left pt-2 md:pt-4">
                        <h4 className="text-xs md:text-sm font-bold text-gray-800 mb-3 leading-light">
                          {item.subTitle}
                        </h4>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 leading-tight">
                          {item.title}
                        </h3>
                        <span className="border-1 border-gray-600 rounded-2xl text-xl md:text-2xl text-gray-800 text-center ">
                          →
                        </span>
                      </div>
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
