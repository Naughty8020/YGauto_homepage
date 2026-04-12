// src/components/details/Prise.tsx

import React from 'react';

// アイテムごとの型定義
export type PriceItem = {
  label: string;
  price: string;
  unit: string;
  note?: string; // 工賃などの補足（任意）
};

// カテゴリーごとの型定義
export type PriceCategory = {
  category: string;
  items: PriceItem[];
};

export default function Prise() {
  // 定義した型を適用
  const priceCategories: PriceCategory[] = [
    {
      category: "エンジンオイル交換",
      items: [
        { label: "国産車（1Lあたり）", price: "1,000〜", unit: "円", note: "工賃 500円〜" },
        { label: "外国車（1Lあたり）", price: "2,500〜", unit: "円", note: "工賃 1,000円〜" },
      ],
    },
    {
      category: "タイヤシーズン交換",
      items: [
        { label: "軽自動車", price: "2,000", unit: "円" },
        { label: "普通車", price: "3,000", unit: "円" },
      ],
    },
    {
      category: "手洗い洗車",
      items: [
        { label: "軽自動車", price: "2,000", unit: "円" },
        { label: "普通車", price: "3,000", unit: "円" },
      ],
    },
    {
      category: "コーティング施工",
      items: [
        { label: "軽自動車", price: "45,000〜", unit: "円" },
        { label: "普通車", price: "68,000〜", unit: "円" },
      ],
    },
  ];

  return (
    <div className="w-full divide-y divide-slate-300">
      {priceCategories.map((group, idx) => (
        <div key={idx} className="p-4 sm:p-6 md:p-8 w-full overflow-hidden">
          <h4 className="text-[1.05rem] md:text-lg font-bold text-slate-900 mb-4 md:mb-5 flex items-center">
            <span className="w-1.5 h-1.5 bg-sub-600 rounded-full mr-2 shrink-0" />
            <span className="truncate">{group.category}</span>
          </h4>
          <div className="space-y-5 md:space-y-4">
            {group.items.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 w-full">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm md:text-base text-gray-800 font-medium">{item.label}</span>
                  {item.note && (
                    <span className="text-[0.65rem] md:text-[0.7rem] bg-sub-50 text-sub-600 px-2 py-0.5 rounded-full font-bold whitespace-nowrap">
                      {item.note}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline justify-end gap-1 border-b border-dotted border-slate-400 sm:border-none w-full sm:w-auto pb-1.5 sm:pb-0 shrink-0">
                  <span className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {item.price}
                  </span>
                  <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase">
                    {item.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
