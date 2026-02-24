import Map from '../details/Map';
import Schedule from '../details/Schedule';
import Image from 'next/image';

export default function Details() {
  const companyInfo = [
    { label: "会社名", value: "YGauto" },
    { label: "設立", value: "2025年10月" },
    { label: "所在地", value: "〒141-0032 滋賀県野洲市比留田134" },
    { label: "定休日", value: "日曜日" },
    { label: "営業時間", value: "午前9時30分〜 午後6時00分" },
    { label: "電話番号", value: "077-575-4089" },
  ];

  return (
    <div className="min-h-screen ">
      <p className="text-center text-6xl md:text-9xl md:mb-3 ">
        🚒
      </p>

      {/* 曲線背景コンテナ */}
      <div className="relative w-full h-auto min-h-[1500px] bg-gray-100 [clip-path:ellipse(150%_100%_at_50%_100%)] md:[clip-path:ellipse(120%_100%_at_50%_100%)] lg:[clip-path:ellipse(110%_100%_at_50%_100%)]    z-10 pb-32">

        <div className="relative z-20 flex flex-col items-center pt-10 md:pt-20 px-4">

          {/* ロゴ・ヘッダーエリア */}
          <div className="flex items-center justify-center mb-20 mt-20 gap-3 lg:gap-7 z-50">
                        <Image
              src="/YGauto.jpg"
              alt="Sample Company"
              width={180}
              height={45}
              className="w-32 h-auto lg:w-100"
            />
          </div>

          {/* 全てを包むメインカード */}
          <div className="w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden">

            {/* 上部：会社概要 */}
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 flex items-center">
                <span className="w-2 h-8 bg-sky-500 rounded-full mr-4"></span>
                会社概要
              </h2>

              <dl className="divide-y divide-slate-100">
                {companyInfo.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row py-5">
                    <dt className="md:w-1/3 font-bold text-slate-500 text-sm md:text-lg mb-1 md:mb-0">
                      {item.label}
                    </dt>
                    <dd className="md:w-2/3 text-slate-800 md:text-lg leading-relaxed">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>



            {/* 下部：地図・アクセス */}
            <div className="p-8 md:p-12">
              <h3 className="text-xl font-bold text-slate-800 mb-6">アクセス</h3>
              <Map />
              <p className="mt-4 text-sm text-slate-500 text-center font-medium">
                JR山手線 大崎駅より徒歩5分（アートヴィレッジ大崎セントラルタワー内）
              </p>
            </div>

          </div>
          {/* カード終了 */}

        </div>
      </div>
    </div>
  );
}
