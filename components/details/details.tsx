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
      <p className="text-center text-6xl md:text-9xl md:mb-3">
        🏎️
      </p>

      <div className="relative w-full h-auto min-h-[600px] bg-black [clip-path:ellipse(150%_100%_at_50%_100%)] md:[clip-path:ellipse(120%_100%_at_50%_100%)] lg:[clip-path:ellipse(110%_100%_at_50%_100%)] z-10 pb-10 md:pb-16">

        <div className="relative z-20 flex flex-col items-center pt-6 md:pt-16 px-4">

          <div className="flex items-center justify-center my-6 mb-6 gap-3 lg:gap-7 z-50">
            <Image
              src="/Image1.png"
              alt="Sample Company"
              width={300}
              height={50}
              className="w-40 h-15 lg:w-130 lg:h-40 inline-block"
            />
          </div>

          <div className="w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden">

            <div className="p-3 md:p-6">
              <h2 className="text-2xl md:text-3xl ml-3 mt-3 font-bold text-slate-800 mb-6 flex items-center">
                <span className="w-2 h-8 bg-sky-500 rounded-full mr-4"></span>
                会社概要
              </h2>

              <dl className="divide-y divide-slate-100">
                {companyInfo.map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row py-1.5">
                    <dt className="md:w-1/3 ml-5 font-bold text-slate-500 text-sm md:text-lg mb-1 md:mb-0">
                      {item.label}
                    </dt>
                    <dd className="md:w-2/3 ml-7 text-slate-800 md:text-lg leading-relaxed">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="p-3 md:p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4">アクセス</h3>
              <Map />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
