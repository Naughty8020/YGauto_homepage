import Schedule from "../../components/details/Schedule";

export default function About() {
  return (
    <div className="pt-24 min-h-screen text-slate-800 bg-slate-50/50">
      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto py-12 px-6">
        
        {/* コンセプトセクション */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            愛車と長く、どこまでも元気に。
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-slate-600">
            私たちは、単なる修理工場ではありません。<br />
            お客様一人ひとりのカーライフに寄り添い、安全・快適な走りを支えるパートナーでありたいと考えています。<br />
            最新の設備と、確かな技術力で、あなたの愛車をベストコンディションに導きます。
          </p>
        </section>

        {/* 選ばれる3つの理由 */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold mb-10 text-center text-slate-900">
            当店の3つの特徴
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: "01", title: "徹底した対話", text: "専門用語を使わず、お車の状態を分かりやすくご説明。納得いただけるプランをご提案します。" },
              { id: "02", title: "細部へのこだわり", text: "見えない部分の清掃や点検まで、職人の目線で一切妥協のない作業をお約束します。" },
              { id: "03", title: "迅速な対応", text: "祝日のある週は木曜も営業するなど、お客様の利便性を第一に考えた運営を行っています。" }
            ].map((feature) => (
              <div key={feature.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="text-blue-600 text-4xl mb-4 font-bold opacity-20">{feature.id}</div>
                <h4 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* スケジュール・店舗概要 */}
        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
          <h3 className="text-2xl font-bold mb-10 text-center text-slate-900">
            店舗情報・アクセス
          </h3>

          <div className="max-w-3xl mx-auto">
            <dl className="space-y-6">
              <div className="flex flex-col md:flex-row border-b border-slate-100 pb-4">
                <dt className="w-full md:w-32 font-bold text-slate-500 mb-1 md:mb-0">所在地</dt>
                <dd className="flex-1 text-slate-700 font-medium">
                  〒000-0000 ○○県○○市○○町 1-2-3
                </dd>
              </div>
              <div className="flex flex-col md:flex-row border-b border-slate-100 pb-4">
                <dt className="w-full md:w-32 font-bold text-slate-500 mb-1 md:mb-0">電話番号</dt>
                <dd className="flex-1 text-slate-700 font-medium">012-345-6789</dd>
              </div>
            </dl>

            <div className="mt-12">
              <h4 className="font-bold text-slate-500 mb-6 text-center text-sm uppercase tracking-widest">
                受付スケジュール
              </h4>
              <div className="bg-slate-50 rounded-2xl p-4 md:p-6">
                <Schedule />
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
