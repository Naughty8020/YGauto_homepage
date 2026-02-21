import { SERVICES } from "@/constants/services";
import { notFound } from "next/navigation";

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
    <main className="min-h-screen bg-gray-50 py-12 md:py-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-6 md:p-12 rounded-3xl shadow-sm">
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            {service.title}
          </h1>
          <div className="w-full h-[250px] md:h-[450px] rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUUzJTgyJUIzJUUzJTgzJUFGJUUzJTgzJUJDJUUzJTgyJUFEJUUzJTgzJUIzJUUzJTgyJUIwJUUzJTgyJUFBJUUzJTgzJTk1JUUzJTgyJUEzJUUzJTgyJUI5fGVufDB8fDB8fHww"
              alt={service.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </header>

        <div className="space-y-12">
          <section className="border-t border-gray-200 mt-16 pt-12">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 inline-block relative pb-2">
                メリット
                <span className="absolute bottom-0 left-0 w-1/2 h-1 rounded-full"></span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="  text-gray-600 flex items-center justify-start mb-2 mr-auto text-md">
                  01
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">速い</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  最適化された処理により、待ち時間を最小限に抑え、スムーズな体験を提供します。
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="  text-gray-600 flex items-center justify-start mb-2 mr-auto text-md">
                  02
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">正確</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  入力データに基づき、ミスなく確実な結果を導き出します。
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="  text-gray-600 flex items-center justify-start mb-2 mr-auto text-md">
                  03
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">高品質</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  細部までこだわった設計で、満足度の高いサービスを実現します。
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                illum suscipit aspernatur totam sint eius dolores odit beatae,
                debitis provident eum adipisci eveniet, quod soluta deleniti
                repudiandae temporibus! A, accusantium.
              </p>
            </div>
          </section>

          <section className=" border-t-1 border-gray-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-4  pb-2 inline-block mt-10">
              特徴
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              illum suscipit aspernatur totam sint eius dolores odit beatae,
              debitis provident eum adipisci eveniet, quod soluta deleniti
              repudiandae temporibus! A, accusantium.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
