import Map from '../details/Map';
import Image from 'next/image';
import BusinessIcon from '@mui/icons-material/Business';
import Link from 'next/link';

export default function Details() {
  const companyInfo = [
    { label: "会社名", value: "YGauto" },
    { label: "設立", value: "2025年10月" },
    { label: "所在地", value: "〒141-0032 滋賀県野洲市比留田134" },
    { label: "定休日", value: "日曜日" },
    { label: "営業時間", value: "午前9時30分〜 午後6時00分" },
    { label: "電話番号", value: "077-575-4089" },
  ];

  const businessContents = [
    "新車・新古車・中古車販売",
    "買取",
    "一般修理・車検・カスタム",
    "事故修理・板金・塗装",
    "ロードサービス",
    "コーティングフィルム",
    "各種保険",
    "レッカー",
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16">
        <div className="mb-6 md:mb-12">
          <div className="flex items-center gap-2 md:gap-3 mb-4">
            <span className="block w-5 md:w-7 h-px bg-sub-600 shrink-0" />
            <BusinessIcon className="text-sub-600" sx={{ fontSize: { xs: 14, md: 16 } }} />
            <span className="text-[0.6rem] md:text-[0.65rem] font-extrabold tracking-[0.25em] uppercase text-sub-600">
              Company Details
            </span>
          </div>

          <div className="flex flex-row items-end justify-between gap-3 md:gap-4 pb-5 md:pb-8 border-b border-slate-300">
            <h2 className="text-lg sm:text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              会社概要・アクセス
            </h2>
            <div className="w-32 sm:w-48 md:w-auto md:pb-1 shrink-0">
              <Image
                src="/Image1.png"
                alt="YGauto"
                width={300}
                height={50}
                className="w-full md:w-56 h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-300">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-slate-200 p-4 sm:p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <span className="block w-4 h-px bg-sub-600 shrink-0" />
                <h3 className="text-[0.68rem] md:text-xs font-bold tracking-[0.2em] uppercase text-sub-600">
                  Company Info
                </h3>
              </div>
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

              <div className="mt-6 pt-5 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <span className="block w-4 h-px bg-sub-600 shrink-0" />
                  <h3 className="text-[0.68rem] md:text-xs font-bold tracking-[0.2em] uppercase text-sub-600">
                    事業内容
                  </h3>
                </div>
                <ul className="space-y-2">
                  {businessContents.map((content) => (
                    <li
                      key={content}
                      className="flex items-start gap-2 text-xs md:text-sm text-slate-800 leading-relaxed"
                    >
                      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center border border-sub-500 text-[10px] text-sub-600">
                        ✓
                      </span>
                      {content}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 md:mt-6 flex justify-end">
                  <Link
                    href="/about#price-list"
                    className="inline-flex items-center gap-2 text-[11px] md:text-xs font-bold tracking-[0.15em] uppercase text-lime-700 border-b border-lime-300 pb-1.5 hover:text-lime-800 hover:border-lime-600 transition-colors"
                  >
                    価格一覧を見る
                  </Link>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 p-4 sm:p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <span className="block w-4 h-px bg-sub-600 shrink-0" />
                <h3 className="text-[0.68rem] md:text-xs font-bold tracking-[0.2em] uppercase text-sub-600">
                  Access
                </h3>
              </div>
              <Map />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
