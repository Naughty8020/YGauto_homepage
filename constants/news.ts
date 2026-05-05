export type NewsCategory = "お知らせ" | "キャンペーン" | "ブログ" | "メディア";

export type NewsItem = {
  id: string;
  date: string; // ISO 8601 形式 (YYYY-MM-DD)
  category: NewsCategory;
  title: string;
  excerpt: string;
  slug: string;
};

/**
 * 仮データ — CMS に移行する際は、この配列をフェッチ結果に差し替えてください。
 */
export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "1",
    date: "2026-05-01",
    category: "お知らせ",
    title: "ゴールデンウィーク期間中の営業日のお知らせ",
    excerpt:
      "GW期間中の営業スケジュールをお知らせいたします。一部休業日がございますので、ご来店前にご確認ください。",
    slug: "gw-schedule-2026",
  },
  {
    id: "2",
    date: "2026-04-20",
    category: "キャンペーン",
    title: "春の車検キャンペーン実施中！早期予約で10%OFF",
    excerpt:
      "4月〜5月末までの期間限定で、車検の早期予約割引キャンペーンを実施中です。この機会にぜひご利用ください。",
    slug: "spring-inspection-campaign",
  },
  {
    id: "3",
    date: "2026-04-10",
    category: "ブログ",
    title: "梅雨前にやっておきたい愛車メンテナンス5選",
    excerpt:
      "梅雨の季節を快適に乗り切るために、今のうちにチェックしておきたいポイントを整備士目線でご紹介します。",
    slug: "rainy-season-maintenance",
  },
  {
    id: "4",
    date: "2026-03-25",
    category: "お知らせ",
    title: "ホームページをリニューアルしました",
    excerpt:
      "より見やすく、使いやすいサイトを目指してホームページを全面リニューアルいたしました。",
    slug: "website-renewal",
  },
  {
    id: "5",
    date: "2026-03-15",
    category: "メディア",
    title: "地元テレビ局の取材を受けました",
    excerpt:
      "滋賀県のローカル番組にて、当店の整備サービスと地域密着の取り組みが紹介されました。",
    slug: "tv-coverage",
  },
  {
    id: "6",
    date: "2026-03-01",
    category: "キャンペーン",
    title: "新生活応援！中古車フェア開催のお知らせ",
    excerpt:
      "3月限定で厳選中古車を特別価格にてご提供。新生活のスタートにぴったりの一台をお探しください。",
    slug: "spring-used-car-fair",
  },
  {
    id: "7",
    date: "2026-02-20",
    category: "ブログ",
    title: "冬場のバッテリートラブルを防ぐコツ",
    excerpt:
      "寒い季節はバッテリー上がりのトラブルが増加します。簡単にできる予防策をプロが解説します。",
    slug: "winter-battery-tips",
  },
  {
    id: "8",
    date: "2026-02-05",
    category: "お知らせ",
    title: "レッカーサービスの対応エリアを拡大しました",
    excerpt:
      "ご要望にお応えし、レッカーサービスの対応エリアを近隣市町まで拡大いたしました。",
    slug: "expanded-towing-area",
  },
];
