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
              『困った』の前に 、まずはご相談ください。
              <br className="hidden md:block" />
              あなたの『知りたい』に、すぐにお答えします。
            </p>
          </div>
        </header>

        {/* --- 電話お問い合わせセクション（スタイル調整版） --- */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-[0.7rem] font-bold tracking-widest text-blue-600 mb-4 bg-blue-50 px-4 py-1 rounded-full">
              お電話でのお問い合わせ
            </p>
            <a 
              href="tel:000-0000-0000" 
              className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-900 hover:text-blue-600 transition-colors duration-300"
            >
              000-0000-0000
            </a>
            <p className="mt-4 text-xs font-medium text-gray-400">
              受付時間：平日 9:00 〜 18:00（土日祝を除く）
            </p>
          </div>
        </div>

        {/* --- フォームセクション（スタイル調整版） --- */}
        <section className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-16 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-[#EEEEEE]">
            <div className="mb-12 text-center">
              <h2 className="text-xl font-extrabold text-gray-900 mb-2">メールフォーム</h2>
              <div className="w-8 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <form action="#" className="space-y-10">
              <div className="relative">
                <label htmlFor="email" className="text-[0.7rem] font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                  Mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full pb-2 bg-transparent border-b border-gray-200 text-gray-900 focus:outline-none focus:border-blue-600 transition-colors placeholder:text-gray-200"
                  placeholder="example@mail.com"
                  required
                />
              </div>

              <div className="relative">
                <label htmlFor="subject" className="text-[0.7rem] font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full pb-2 bg-transparent border-b border-gray-200 text-gray-900 focus:outline-none focus:border-blue-600 transition-colors placeholder:text-gray-200"
                  placeholder="ご用件を選択または入力してください"
                  required
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className="text-[0.7rem] font-bold uppercase tracking-wider text-gray-400 mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full pb-2 bg-transparent border-b border-gray-200 text-gray-900 focus:outline-none focus:border-blue-600 transition-colors placeholder:text-gray-200 resize-none"
                  placeholder="お問い合わせ内容"
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center w-full md:w-auto px-12 py-4 text-xs font-extrabold tracking-[0.2em] text-white bg-gray-950 overflow-hidden transition-all duration-300 hover:bg-blue-600"
                >
                  <span className="relative z-10">SEND MESSAGE</span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
