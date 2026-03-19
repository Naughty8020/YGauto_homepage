import Schedule from "../../components/details/Schedule";
import Prise from "../../components/details/Prise";

export default function About() {
  return (
    <div className="pt-40 min-h-screen text-slate-800 bg-slate-50/50">
      <main className="max-w-5xl mx-auto py-12 px-6">
        <header className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-7 h-px bg-blue-600 shrink-0" />
            <span className="text-[0.65rem] font-extrabold tracking-[0.25em] uppercase text-blue-600">
              ABOUT
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-[#DDDDD8]">
            <h1 className="text-[2.8rem] md:text-[2.5rem] font-extrabold text-gray-950 leading-[1.05] tracking-tight">
              会社案内
            </h1>
            <p className="text-sm text-gray-500 leading-[1.9] max-w-xs font-light md:pb-1">
<<<<<<< HEAD
              滋賀県野洲市を拠点に、
              <br className="hidden md:block" />
              お客様のカーライフを全力でサポートします。
=======
              お客様の生活スタイルに寄り添った、
              <br className="hidden md:block" />
              最適なサービスをご提供します。
>>>>>>> 1867ccb (fix(servises):change letter and place)
            </p>
          </div>
        </header>

        {/* コンセプトセクション */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">代表挨拶</h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-slate-600">
<<<<<<< HEAD
            このたびはYGautoホームページをご覧いただきありがとうございます。 
            <br />
            当店ではお車を通じてお客様一人ひとりと向き合い、個人店ならではの 
            <br />
            親身なお付き合いができればと思っております。 
            <br />
            初めてご来店される方、車のことがあまり詳しくない方でも
            <br />
            丁寧にご対応させて頂きますので、
            どんな小さなことでも一度ご相談ください。 
=======
            私たちは、単なる修理工場ではありません。
            <br />
            お客様一人ひとりのカーライフに寄り添い、安全・快適な走りを支えるパートナーでありたいと考えています。
            <br />
            最新の設備と、確かな技術力で、あなたの愛車をベストコンディションに導きます。
>>>>>>> 1867ccb (fix(servises):change letter and place)
          </p>
        </section>

        {/* 特徴セクション */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold mb-10 text-center text-slate-900">
            当店の3つの強み
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: "01",
<<<<<<< HEAD
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
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="text-blue-400 text-4xl mb-4 font-bold ">
                    {feature.id}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-slate-800">
                    {feature.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              ))}
          </div>
        </section>

        {/* 料金表セクション */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold mb-10 text-center text-slate-900">
            料金のご案内
          </h3>
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <Prise />
          </div>
          <p className="mt-4 text-xs text-slate-400 text-right">※価格は全て税込表示です。お車の状態により変動する場合がございます。</p>
        </section>

        {/* 店舗概要 */}
=======
                title: "徹底した対話",
                text: "専門用語を使わず、お車の状態を分かりやすくご説明。納得いただけるプランをご提案します。",
              },
              {
                id: "02",
                title: "細部へのこだわり",
                text: "見えない部分の清掃や点検まで、職人の目線で一切妥協のない作業をお約束します。",
              },
              {
                id: "03",
                title: "迅速な対応",
                text: "祝日のある週は木曜も営業するなど、お客様の利便性を第一に考えた運営を行っています。",
              },
            ].map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 text-4xl mb-4 font-bold opacity-20">
                  {feature.id}
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-800">
                  {feature.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </section>
        <div className="mt-8">
          <Prise />
        </div>

        {/* スケジュール・店舗概要 */}
>>>>>>> 1867ccb (fix(servises):change letter and place)
        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
          <h3 className="text-2xl font-bold mb-10 text-center text-slate-900">
            店舗情報・アクセス
          </h3>

          <div className="max-w-3xl mx-auto">
            <dl className="space-y-6">
              <div className="flex flex-col md:flex-row border-b border-slate-100 pb-4">
<<<<<<< HEAD
                <dt className="w-full md:w-40 font-bold text-slate-500 mb-1 md:mb-0">
=======
                <dt className="w-full md:w-32 font-bold text-slate-500 mb-1 md:mb-0">
>>>>>>> 1867ccb (fix(servises):change letter and place)
                  所在地
                </dt>
                <dd className="flex-1 text-slate-700 font-medium">
                  〒520-2300 滋賀県野洲市（以下詳細な住所を入力してください）
                </dd>
              </div>
              <div className="flex flex-col md:flex-row border-b border-slate-100 pb-4">
<<<<<<< HEAD
                <dt className="w-full md:w-40 font-bold text-slate-500 mb-1 md:mb-0">
                  営業時間
                </dt>
                <dd className="flex-1 text-slate-700 font-medium">
                  09:30 〜 18:00
                </dd>
              </div>
              <div className="flex flex-col md:flex-row border-b border-slate-100 pb-4">
                <dt className="w-full md:w-40 font-bold text-slate-500 mb-1 md:mb-0">
                  定休日
                </dt>
                <dd className="flex-1 text-slate-700 font-medium">
                  日曜、祝日
                </dd>
              </div>
              <div className="flex flex-col md:flex-row border-b border-slate-100 pb-4">
                <dt className="w-full md:w-40 font-bold text-slate-500 mb-1 md:mb-0">
                  古物商許可番号
                </dt>
                <dd className="flex-1 text-slate-700 font-medium text-sm">
                  滋賀県公安委員会 第60103R070011号
                </dd>
              </div>
              <div className="flex flex-col md:flex-row border-b border-slate-100 pb-4">
                <dt className="w-full md:w-40 font-bold text-slate-500 mb-1 md:mb-0">
                  お取引銀行
                </dt>
                <dd className="flex-1 text-slate-700 font-medium">
                  滋賀銀行
=======
                <dt className="w-full md:w-32 font-bold text-slate-500 mb-1 md:mb-0">
                  電話番号
                </dt>
                <dd className="flex-1 text-slate-700 font-medium">
                  012-345-6789
>>>>>>> 1867ccb (fix(servises):change letter and place)
                </dd>
              </div>
            </dl>

            <div className="mt-12">
              <h4 className="font-bold text-slate-500 mb-6 text-center text-sm uppercase tracking-widest">
                営業スケジュール
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
