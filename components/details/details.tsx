import Map from '../details/Map';
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
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-2 md:gap-3 mb-4">
            <span className="block w-5 md:w-7 h-px bg-sub-600 shrink-0" />
            <span className="text-[0.6rem] md:text-[0.65rem] font-extrabold tracking-[0.25em] uppercase text-sub-600">
              Company Details
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-6 md:pb-8 border-b border-slate-300">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              会社概要・アクセス
            </h2>
            <div className="w-full md:w-auto md:pb-1">
              <Image
                src="/Image1.png"
                alt="YGauto"
                width={300}
                height={50}
                className="w-44 md:w-56 h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-300">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-slate-200 p-4 sm:p-6 md:p-8">
              <h3 className="text-sm md:text-base font-bold tracking-widest uppercase text-slate-700 mb-4 md:mb-6">
                Company Info
              </h3>
              <dl className="divide-y divide-slate-100">
                {companyInfo.map((item, index) => (
                  <div key={index} className="py-2.5 md:py-3">
                    <dt className="text-[11px] md:text-xs font-bold tracking-wide text-slate-500 mb-1">
                      {item.label}
                    </dt>
                    <dd className="text-xs md:text-sm text-slate-800 leading-relaxed">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="md:col-span-3 p-4 sm:p-6 md:p-8">
              <h3 className="text-sm md:text-base font-bold tracking-widest uppercase text-slate-700 mb-4 md:mb-6">
                Access
              </h3>
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
