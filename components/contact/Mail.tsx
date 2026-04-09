"use client";

export default function Mail() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    const res = await fetch("http://localhost:3000/api/resend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("送信しました！");
    } else {
      alert("送信に失敗しました。");
    }
  };

  return (
    <section className="max-w-3xl mx-auto">
      <div className="bg-white p-8 md:p-16 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-[#EEEEEE]">
        <div className="mb-12 text-center">
          <h2 className="text-xl font-extrabold text-gray-900 mb-2">mail</h2>
          <div className="w-8 h-1 bg-sub-600 mx-auto"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="relative">
            <label
              htmlFor="email"
              className="text-[0.7rem] font-bold uppercase tracking-wider text-gray-400 mb-2 block"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="username"
              className="w-full pb-2 bg-transparent border-b border-gray-200 text-gray-900 focus:outline-none focus:border-sub-600 transition-colors placeholder:text-gray-200"
              placeholder="田中 太郎"
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="email"
              className="text-[0.7rem] font-bold uppercase tracking-wider text-gray-400 mb-2 block"
            >
              Mail Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full pb-2 bg-transparent border-b border-gray-200 text-gray-900 focus:outline-none focus:border-sub-600 transition-colors placeholder:text-gray-200"
              placeholder="example@mail.com"
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="subject"
              className="text-[0.7rem] font-bold uppercase tracking-wider text-gray-400 mb-2 block"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full pb-2 bg-transparent border-b border-gray-200 text-gray-900 focus:outline-none focus:border-sub-600 transition-colors placeholder:text-gray-200"
              placeholder="ご用件を選択または入力してください"
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="message"
              className="text-[0.7rem] font-bold uppercase tracking-wider text-gray-400 mb-2 block"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full pb-2 bg-transparent border-b border-gray-200 text-gray-900 focus:outline-none focus:border-sub-600 transition-colors placeholder:text-gray-200 resize-none"
              placeholder="お問い合わせ内容"
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="group relative inline-flex items-center justify-center w-full md:w-auto px-12 py-4 text-xs font-extrabold tracking-[0.2em] text-white bg-gray-950 overflow-hidden transition-all duration-300 hover:bg-sub-600"
            >
              <span className="relative z-10">SEND MESSAGE</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
