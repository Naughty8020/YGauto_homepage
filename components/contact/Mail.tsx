
export default function Mail() {
  return (
  <section className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-16 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-[#EEEEEE]">
            <div className="mb-12 text-center">
              <h2 className="text-xl font-extrabold text-gray-900 mb-2">mail</h2>
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

  );
}
