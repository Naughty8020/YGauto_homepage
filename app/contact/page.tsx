import type { Metadata } from "next";
import CallIcon from "@mui/icons-material/Call";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "YG autoへのお問い合わせページです。お電話でのご相談や各種お問い合わせに対応しています。",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "お問い合わせ | YG auto",
    description:
      "お車に関するご相談やお問い合わせは、YG autoまでお気軽にご連絡ください。",
    url: "/contact",
  },
};

export default function Contact() {
  return (
    <div className="pt-28 md:pt-40 min-h-screen text-slate-800  leading-relaxed space-y-4">
      <main className="max-w-5xl mx-auto py-8 md:py-12 px-6">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-7 h-px bg-sub-600 shrink-0" />
            <SupportAgentIcon className="text-sub-600" sx={{ fontSize: { xs: 16, md: 18 } }} />
            <span className="text-[0.65rem] font-extrabold tracking-[0.25em] uppercase text-sub-600">
              CONTACT
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-gray-400">
            <h1 className="text-[2rem] md:text-[2.5rem] font-extrabold text-gray-950 leading-[1.05] tracking-tight">
              ご予約・お問い合わせ
            </h1>
            <p className="text-sm text-gray-700 leading-[1.9] max-w-xs font-light md:pb-1">
              お急ぎの方も、まずは一度お電話ください。
              <br className="hidden md:block" />
              専門スタッフが丁寧に対応させていただきます。
            </p>
          </div>
        </header>

        <section className="max-w-4xl mx-auto  md:mt-20 mb-10 md:mb-32">
          <div className=" rounded-none p-8 md:p-20 border border-slate-500 text-center">
            <div className="mb-10">
              <span className="text-sub-600 font-bold tracking-[0.2em] text-xs py-2 px-5 bg-sub-50 border border-sub-200 rounded-none">
                CALL US ANYTIME
              </span>
              <h2 className="text-base md:text-2xl font-bold text-gray-900 mt-6">
                お電話でのお問い合わせ・ご相談
              </h2>
            </div>

            <div className="mb-12">
              <a href="tel:0775754089" className="group inline-block">
                <span className="text-3xl md:text-7xl font-black tracking-tighter text-gray-950 group-hover:text-sub-600 transition-colors duration-300">
                  077-575-4089
                </span>
                <div className="h-1.5 w-0 group-hover:w-full bg-sub-600 transition-all duration-500 mx-auto mt-2" />
              </a>
            </div>

            <div className="space-y-4 mb-12">
              <p className="text-slate-700 font-medium">
                受付時間：平日 9:00 〜 18:00
              </p>
              <p className="text-sm text-slate-500">
                ※番号をお確かめのうえ、おかけ間違いのないようお願いいたします。
              </p>
            </div>

            <div className="flex justify-center">
              <a
                href="tel:0775754089"
                className="flex items-center gap-4 bg-sub-600 text-white px-10 py-5 rounded-none border border-sub-600 font-bold text-sm md:text-lg hover:bg-sub-700 hover:border-sub-700 transition-all duration-300"
              >
                <CallIcon className="w-6 h-6" />
                今すぐ電話をかける
              </a>
            </div>
          </div>
        </section>

        {/* <footer className="text-center pb-20">
          <p className="text-gray-400 text-sm mb-4">
            メールでのお問い合わせをご希望の方はこちら
          </p>
          <Link
            href="/contact/form" // 飛ばしたい先のパス（例: app/contact/form/page.tsx なら "/contact/form"）
            className="inline-block text-gray-600 font-bold border-b border-gray-300 hover:text-sub-600 hover:border-sub-600 transition-all pb-1 cursor-pointer"
          >
            お問い合わせフォームへ
          </Link>{" "}
        </footer> */}
      </main>
    </div>
  );
}
