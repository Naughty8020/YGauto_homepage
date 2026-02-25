export default function Schedule() {
  const days = ["月", "火", "水", "木", "金", "土", "日祝"];

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 px-4"> {/* 左右に余白を追加 */}
      <div className="overflow-x-auto border border-slate-300 rounded-lg">
        <table className="w-full border-collapse text-center min-w-[600px]">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-300">
              <th className="py-4 px-4 font-bold text-slate-700 whitespace-nowrap">診療時間</th>
              {days.map((day) => (
                <th key={day} className={`py-4 px-2 border-l border-slate-300 ${day === "日祝" ? "text-red-500" : "text-slate-700"}`}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="border-b border-slate-300">
              <td className="py-4 px-4 font-medium whitespace-nowrap bg-slate-50">9:30 - 12:30</td>
              <td className="py-4 border-l border-slate-300">●</td>
              <td className="py-4 border-l border-slate-300">●</td>
              <td className="py-4 border-l border-slate-300">●</td>
              <td className="py-4 border-l border-slate-300">●</td>
              <td className="py-4 border-l border-slate-300">●</td>
              <td className="py-4 border-l border-slate-300">●</td>
              <td className="py-4 border-l border-slate-300 text-slate-400">×</td>
            </tr>
            <tr>
              <td className="py-4 px-4 font-medium whitespace-nowrap bg-slate-50">14:30 - 18:30</td>
              <td className="py-4 border-l border-slate-300">●</td>
              <td className="py-4 border-l border-slate-300">●</td>
              <td className="py-4 border-l border-slate-300">●</td>
              <td className="py-4 border-l border-slate-300">●</td>
              <td className="py-4 border-l border-slate-300">●</td>
              <td className="py-4 border-l border-slate-300">●</td>
              <td className="py-4 border-l border-slate-300 text-slate-400">×</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-left text-sm text-slate-600 leading-relaxed px-1">
        <p className="flex items-start">
          <span className="mr-1 text-red-500">※</span>
          <span>祝日のある週の場合は、定休日の木曜日も休まず営業・振替受付けいたします。</span>
        </p>
      </div>
    </div>
  );
}
