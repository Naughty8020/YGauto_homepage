export default function Schedule() {
  const days = ["月", "火", "水", "木", "金", "土", "日祝"];

  return (
    <div className="w-full max-w-4xl mx-auto mt-6 sm:mt-10 px-2 sm:px-4">
      <div className="border border-slate-300 rounded-lg">
        <table className="w-full border-collapse text-center table-fixed text-[10px] sm:text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-300">
              <th className="py-2 px-1 sm:py-4 sm:px-4 font-bold whitespace-nowrap w-28 sm:w-40">
                営業時間
              </th>
              {days.map((day) => (
                <th
                  key={day}
                  className={`py-2 px-1 sm:py-4 sm:px-2 border-l border-slate-300 ${
                    day === "日祝" ? "text-red-500" : ""
                  }`}
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-slate-300">
              <td className="py-2 px-1 sm:py-4 sm:px-4 bg-slate-50 font-medium whitespace-nowrap w-28 sm:w-40">
                9:30 - 12:30
              </td>
              <td className="py-2 border-l border-slate-300">●</td>
              <td className="py-2 border-l border-slate-300">●</td>
              <td className="py-2 border-l border-slate-300">●</td>
              <td className="py-2 border-l border-slate-300">●</td>
              <td className="py-2 border-l border-slate-300">●</td>
              <td className="py-2 border-l border-slate-300">●</td>
              <td className="py-2 border-l border-slate-300 text-slate-400">×</td>
            </tr>

            <tr>
              <td className="py-2 px-1 sm:py-4 sm:px-4 bg-slate-50 font-medium whitespace-nowrap w-28 sm:w-40">
                14:30 - 18:30
              </td>
              <td className="py-2 border-l border-slate-300">●</td>
              <td className="py-2 border-l border-slate-300">●</td>
              <td className="py-2 border-l border-slate-300">●</td>
              <td className="py-2 border-l border-slate-300">●</td>
              <td className="py-2 border-l border-slate-300">●</td>
              <td className="py-2 border-l border-slate-300">●</td>
              <td className="py-2 border-l border-slate-300 text-slate-400">×</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-3 sm:mt-4 text-left text-[10px] sm:text-sm text-slate-600 leading-relaxed px-1">
        <p className="flex items-start">
          <span className="mr-1 text-red-500">※</span>
          <span>
            祝日のある週の場合は、定休日の木曜日も休まず営業・振替受付けいたします。
          </span>
        </p>
      </div>
    </div>
  );
}
