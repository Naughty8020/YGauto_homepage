import type { NewsCategory } from "@/constants/news";

// ─── microCMS レスポンス型 ───

/** microCMS から返ってくる記事の型 */
export type MicroCMSNewsItem = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  // カスタムフィールド
  date: string; // 日付フィールド
  category: string[]; // セレクトフィールド（配列で返る）
  title: string; // テキストフィールド
  excerpt: string; // テキストフィールド（サブタイトル）
  body: string; // リッチエディタ → HTML文字列
};

type MicroCMSListResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

// ─── 環境変数 ───
const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

if (!serviceDomain || !apiKey) {
  // ビルド時に環境変数が未設定ならワーニングだけ出す（仮データフォールバック用）
  console.warn(
    "[microCMS] MICROCMS_SERVICE_DOMAIN or MICROCMS_API_KEY is not set. Falling back to mock data."
  );
}

const BASE_URL = `https://${serviceDomain}.microcms.io/api/v1`;

// ─── 汎用 fetch ───
async function fetchMicroCMS<T>(
  endpoint: string,
  queries?: Record<string, string | number>
): Promise<T> {
  const url = new URL(`${BASE_URL}/${endpoint}`);

  if (queries) {
    Object.entries(queries).forEach(([key, value]) => {
      url.searchParams.set(key, String(value));
    });
  }

  const res = await fetch(url.toString(), {
    headers: { "X-MICROCMS-API-KEY": apiKey ?? "" },
    next: { revalidate: 60 }, // ISR: 60秒ごとに再検証
  });

  if (!res.ok) {
    throw new Error(`microCMS fetch failed: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

// ─── News 用 API ───

/** 記事一覧を取得（日付の新しい順） */
export async function getNewsList(limit = 100, offset = 0) {
  return fetchMicroCMS<MicroCMSListResponse<MicroCMSNewsItem>>("news", {
    limit,
    offset,
    orders: "-date",
  });
}

/** コンテンツID から記事1件を取得 */
export async function getNewsDetail(id: string) {
  return fetchMicroCMS<MicroCMSNewsItem>(`news/${id}`);
}

