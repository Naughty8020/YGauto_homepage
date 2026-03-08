import Link from 'next/link';

export default function Contact() {
  return (
    <div className="pt-40 min-h-screen text-slate-800 bg-slate-50/50">
      <main className="max-w-5xl mx-auto py-12 px-6">
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-7 h-px bg-blue-600 shrink-0" />
            <span className="text-[0.65rem] font-extrabold tracking-[0.25em] uppercase text-blue-600">
              CONTACT
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-[#DDDDD8]">
            <h1 className="text-[2.8rem] md:text-[2.5rem] font-extrabold text-gray-950 leading-[1.05] tracking-tight">
              お問い合わせ
            </h1>
            <p className="text-sm text-gray-500 leading-[1.9] max-w-xs font-light md:pb-1">
              お急ぎの方も、まずは一度お電話ください。
              <br className="hidden md:block" />
              専門スタッフが丁寧に対応させていただきます。
            </p>
          </div>
        </header>

        <section className="max-w-4xl mx-auto mt-20 mb-32">
          <div className="bg-white rounded-3xl p-8 md:p-20 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] border border-white text-center">
            <div className="mb-10">
              <span className="text-blue-600 font-bold tracking-[0.2em] text-xs py-2 px-5 bg-blue-50 rounded-full">
                CALL US ANYTIME
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-6">
                お電話でのお問い合わせ・ご相談
              </h2>
            </div>

            <div className="mb-12">
              <a
                href="tel:000-0000-0000"
                className="group inline-block"
              >
                <span className="text-4xl md:text-7xl font-black tracking-tighter text-gray-950 group-hover:text-blue-600 transition-colors duration-300">
                  000-0000-0000
                </span>
                <div className="h-1.5 w-0 group-hover:w-full bg-blue-600 transition-all duration-500 mx-auto mt-2 rounded-full" />
              </a>
            </div>

            <div className="space-y-4 mb-12">
              <p className="text-gray-600 font-medium">
                受付時間：平日 9:00 〜 18:00（土日祝を除く）
              </p>
              <p className="text-sm text-gray-400">
                ※番号をお確かめのうえ、おかけ間違いのないようお願いいたします。
              </p>
            </div>

            <div className="flex justify-center">
              <a
                href="tel:000-0000-0000"
                className="flex items-center gap-4 bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-950 transition-all duration-300 shadow-lg shadow-blue-200"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.8-3.9-9-8.7-9v2c3.7 0 6.7 3 6.7 7zm-4 0h2c0-2.8-2.2-5-4.7-5v2c1.5 0 2.7 1.2 2.7 3z"/>
                </svg>
                今すぐ電話をかける
              </a>
            </div>
          </div>
        </section>

        <footer className="text-center pb-20">
          <p className="text-gray-400 text-sm mb-4">
            メールでのお問い合わせをご希望の方はこちら
          </p>
        <Link 
          href="/contact/form" // 飛ばしたい先のパス（例: app/contact/form/page.tsx なら "/contact/form"）
          className="inline-block text-gray-600 font-bold border-b border-gray-300 hover:text-blue-600 hover:border-blue-600 transition-all pb-1 cursor-pointer"
        >
          お問い合わせフォームへ
        </Link>        </footer>
      </main>
    </div>
  );
}
