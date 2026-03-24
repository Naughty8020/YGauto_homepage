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
    <div className="min-h-screen">
      <p className="text-center text-5xl sm:text-6xl md:text-9xl">
        🏎️
      </p>

      <div className="relative w-full min-h-[320px] sm:min-h-[600px] bg-black [clip-path:ellipse(180%_100%_at_50%_100%)] md:[clip-path:ellipse(100%_100%_at_50%_100%)] lg:[clip-path:ellipse(110%_100%_at_50%_100%)] z-10 pb-4 sm:pb-10 md:pb-16">

        <div className="relative z-20 flex flex-col items-center pt-1 sm:pt-6 md:pt-16 px-6 sm:px-8">

          <div className="flex items-center justify-center my-1 sm:my-4 gap-2 sm:gap-3 lg:gap-7 z-50">
            <Image
              src="/Image1.png"
              alt="Sample Company"
              width={300}
              height={50}
              className="w-30 h-13 sm:w-25 sm:h-10 lg:w-130 lg:h-40 mt-8 mb-3 inline-block"
            />
          </div>

          {/* カード */}
          <div className="w-full max-w-sm sm:max-w-xl md:max-w-2xl bg-white rounded-lg sm:rounded-[2rem] shadow-lg sm:shadow-2xl overflow-hidden">

            <div className="p-2 sm:p-6">
              <h2 className="text-sm sm:text-2xl md:text-3xl ml-2 sm:ml-3 font-bold text-slate-800 mb-2 sm:mb-6 flex items-center">
                <span className="w-1 h-4 sm:w-2 sm:h-8 bg-sky-500 rounded-full mr-2 sm:mr-4"></span>
                会社概要
              </h2>

              <dl className="divide-y divide-slate-100">
                {companyInfo.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row py-0.5 sm:py-1">
                    <dt className="md:w-1/3 ml-2 sm:ml-5 font-bold text-slate-500 text-[10px] sm:text-sm md:text-lg mb-0 md:mb-0">
                      {item.label}
                    </dt>
                    <dd className="md:w-2/3 ml-2 sm:ml-7 text-slate-800 text-[10px] sm:text-sm md:text-lg leading-tight">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="p-2 sm:p-6">
              <h3 className="text-xs sm:text-xl font-bold text-slate-800 mb-1 sm:mb-4">
                アクセス
              </h3>
              <Map />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
