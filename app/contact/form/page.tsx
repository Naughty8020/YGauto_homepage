import Mail from "../../../components/contact/Mail";


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
              お問い合わせフォーム
            </h1>
            <p className="text-sm text-gray-500 leading-[1.9] max-w-xs font-light md:pb-1">
              電話でのお問い合わせも受け付けております。
              <br className="hidden md:block" />
              専門スタッフが丁寧に対応させていただきます。
            </p>
          </div>
        </header>

      <Mail />
        </main>
    </div>
  );
}
