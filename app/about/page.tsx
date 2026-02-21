import Schedule from "../../components/details/Schedule"; // 先ほどのスケジュールを別ファイル化想定
import Footer from "../../components/Footer";

export default function About() {
  return (
    <div className=" pt-50 min-h-screen text-slate-800">
      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto py-12 px-6">
        {/* コンセプトセクション */}
        <section className="mb-20 text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            愛車と長く、どこまでも元気に。
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto text-slate-600">
            私たちは、単なる修理工場ではありません。
            お客様一人ひとりのカーライフに寄り添い、安全・快適な走りを支えるパートナーでありたいと考えています。
            最新の設備と、確かな技術力で、あなたの愛車をベストコンディションに導きます。
          </p>
        </section>

        {/* 選ばれる3つの理由 */}
        <section className="mb-20">
          <h3 className="text-2xl font-bold mb-10 text-center">
            当店の3つの特徴
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-blue-600 text-4xl mb-4 font-bold">01</div>
              <h4 className="text-xl font-bold mb-3">徹底した対話</h4>
              <p className="text-slate-600 text-sm">
                専門用語を使わず、お車の状態を分かりやすくご説明。納得いただけるプランをご提案します。
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-blue-600 text-4xl mb-4 font-bold">02</div>
              <h4 className="text-xl font-bold mb-3">細部へのこだわり</h4>
              <p className="text-slate-600 text-sm">
                見えない部分の清掃や点検まで、職人の目線で一切妥協のない作業をお約束します。
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-blue-600 text-4xl mb-4 font-bold">03</div>
              <h4 className="text-xl font-bold mb-3">迅速な対応</h4>
              <p className="text-slate-600 text-sm">
                祝日のある週は木曜も営業するなど、お客様の利便性を第一に考えた運営を行っています。
              </p>
            </div>
          </div>
        </section>

        {/* スケジュール・店舗概要 */}
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
          <h3 className="text-2xl font-bold mb-8 text-center">
            店舗情報・アクセス
          </h3>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row border-b border-slate-100 pb-4">
              <dt className="w-32 font-bold text-slate-500">所在地</dt>
              <dd className="flex-1 text-slate-700">
                〒000-0000 ○○県○○市○○町 1-2-3
              </dd>
            </div>
            <div className="flex flex-col md:flex-row border-b border-slate-100 pb-4">
              <dt className="w-32 font-bold text-slate-500">電話番号</dt>
              <dd className="flex-1 text-slate-700">012-345-6789</dd>
            </div>

            <div className="pt-4">
              <dt className="font-bold text-slate-500 mb-4 text-center">
                受付スケジュール
              </dt>
              <Schedule />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
