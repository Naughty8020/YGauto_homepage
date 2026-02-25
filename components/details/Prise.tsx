  export default function Prise() {
    return (
      <section className="mb-20">
  <h3 className="text-2xl font-bold mb-10 text-center text-slate-900">
    料金の目安
  </h3>

  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
    {[
      { title: "オイル交換", price: "¥3,000〜", desc: "車種・使用オイルにより異なります。" },
      { title: "タイヤ交換（1本）", price: "¥1,500〜", desc: "バランス調整込み。" },
      { title: "車検（基本料金）", price: "¥45,000〜", desc: "法定費用・部品代は別途。" },
      { title: "バッテリー交換", price: "¥6,000〜", desc: "バッテリー代＋工賃込み。" },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-bold text-slate-800">
            {item.title}
          </h4>
          <span className="text-blue-600 font-bold text-lg">
            {item.price}
          </span>
        </div>
        <p className="text-sm text-slate-600">
          {item.desc}
        </p>
      </div>
    ))}
  </div>

  <p className="text-center text-xs text-slate-500 mt-6">
    ※ 上記は目安価格です。車種・状態により料金が変動する場合があります。
  </p>
</section>
    );
  }
