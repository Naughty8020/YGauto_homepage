import Schedule from "../../components/details/Schedule";
import Prise from "../../components/details/Prise";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社案内",
  description:
    "YG autoの会社案内ページです。店舗情報、代表挨拶、当店の強み、アクセス情報をご案内します。",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "会社案内 | YG auto",
    description:
      "滋賀県野洲市のYG autoについて、店舗情報とサービス方針をご紹介します。",
    url: "/about",
  },
};

export default function About() {
  return (
    <div className="pt-28 md:pt-40 min-h-screen text-slate-800  leading-relaxed space-y-4">
      <main className="max-w-5xl mx-auto py-8 md:py-12 px-4 md:px-6">
        <header className="mb-10 md:mb-24">
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <span className="block w-5 md:w-7 h-px bg-sub-600 shrink-0" />
            <span className="text-[0.6rem] md:text-[0.65rem] font-extrabold tracking-[0.2em] md:tracking-[0.25em] uppercase text-sub-600">
              ABOUT
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-6 pb-8 md:pb-12 border-b border-gray-400">
            <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-gray-950 leading-[1.1] tracking-tight">
              会社案内
            </h1>
            <p className="text-xs md:text-sm text-gray-500 leading-[1.8] md:leading-[1.9] max-w-xs font-light md:pb-1">
              滋賀県野洲市を拠点に、
              <br className="hidden md:block" />
              お客様のカーライフを全力でサポートします。
            </p>
          </div>
        </header>

        {/* 代表挨拶 */}
        <section className="mb-12 md:mb-20 text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-slate-900">
            代表挨拶
          </h2>
          <p className="text-sm md:text-lg leading-relaxed max-w-2xl mx-auto text-slate-600">
            このたびはYGautoホームページをご覧いただきありがとうございます。
            <br />
            当店ではお車を通じてお客様一人ひとりと向き合い、個人店ならではの親身なお付き合いができればと思っております。
            <br />
            初めてご来店される方、車のことがあまり詳しくない方でも丁寧にご対応させて頂きますので、
            どんな小さなことでも一度ご相談ください。
          </p>
        </section>

        {/* 強み */}
        <section className="mb-12 md:mb-20">
          <h3 className="text-lg md:text-2xl font-bold mb-6 md:mb-10 text-center text-slate-900">
            当店の3つの強み
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                id: "01",
                title: "自社一貫体制",
                text: "販売から整備、車検、レッカーまで全て自社で完結。中間コストを抑え、高品質なサービスを素早く提供します。",
              },
              {
                id: "02",
                title: "国家資格整備士の技術",
                text: "経験豊富な国家二級整備士が在籍。見えない部分まで職人の目線で一切妥協のない作業をお約束します。",
              },
              {
                id: "03",
                title: "安心の対話型サポート",
                text: "専門用語を使わず、お車の状態を分かりやすくご説明。納得いただけるまで親身にプランをご提案します。",
              },
            ].map((feature) => (
              <div
                key={feature.id}
                className=" px-5 py-6 md:p-8 rounded-none border border-slate-400 transition-colors hover:border-slate-500 flex gap-4 md:block"
              >
                <div className="text-sub-600 text-3xl md:text-4xl font-bold shrink-0 md:mb-4 leading-none pt-0.5">
                  {feature.id}
                </div>
                <div>
                  <h4 className="text-base md:text-xl font-bold mb-1.5 md:mb-3 text-slate-800">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 料金 */}
        <div className="mt-6 md:mt-8">
          <Prise />
        </div>

        {/* 店舗情報 */}
        <section className=" p-5 md:p-12 rounded-none border border-slate-500 mt-10 md:mt-10">
          <h3 className="text-lg md:text-2xl font-bold mb-6 md:mb-10 text-center text-slate-900">
            店舗情報・アクセス
          </h3>

          <div className="max-w-3xl mx-auto">
            <dl className="space-y-4 md:space-y-6">
              <div className="flex flex-col md:flex-row border-b border-slate-300 pb-3 md:pb-4">
                <dt className="w-full md:w-32 font-bold text-slate-500 text-sm mb-0.5 md:mb-0">
                  所在地
                </dt>
                <dd className="flex-1 text-slate-700 font-medium text-sm md:text-base">
                  〒520-2300 滋賀県野洲市野洲市比留田134
                </dd>
              </div>

              <div className="flex flex-col md:flex-row border-b border-slate-300 pb-3 md:pb-4">
                <dt className="w-full md:w-32 font-bold text-slate-500 text-sm mb-0.5 md:mb-0">
                  電話番号
                </dt>
                <dd className="flex-1 text-slate-700 font-medium text-sm md:text-base">
                  077-575-4089
                </dd>
              </div>
            </dl>

            <div className="mt-8 md:mt-12">
              <h4 className="font-bold text-slate-500 mb-4 md:mb-6 text-center text-xs md:text-sm uppercase tracking-widest">
                営業スケジュール
              </h4>
              
                <Schedule />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
