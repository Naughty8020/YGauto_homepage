import { SERVICES } from "@/constants/services";
import { notFound } from "next/navigation";
import Link from "next/link";

// Next.jsのImageコンポーネントを使用する場合はnext.config.jsの設定が必要なため、
// 今回は一時的に標準のimgタグでスタイリングしています。
// import Image from "next/image";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <main className="bg-[#F7F6F3] py-14 md:py-24 w-full min-h-screen">
      {/* フォント読み込み */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Syne:wght@700;800&display=swap');

        body { font-family: 'Noto Sans JP', sans-serif; }

        .font-syne { font-family: 'Syne', sans-serif; }

        /* セクション見出し EN ラベル */
        .en-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Syne', sans-serif;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #2563EB;
        }
        .en-label::before {
          content: '';
          display: block;
          width: 28px;
          height: 1.5px;
          background: #2563EB;
          flex-shrink: 0;
        }

        /* メリットカード */
        .merit-card {
          background: #fff;
          border-radius: 20px;
          padding: 36px 28px 32px;
          border: 1px solid #EAEAE7;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .merit-card:hover {
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          transform: translateY(-4px);
        }
        .merit-card-index {
          font-family: 'Syne', sans-serif;
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1;
          color: #EEF2FF;
          letter-spacing: -0.04em;
          margin-bottom: 20px;
          user-select: none;
        }
        .merit-card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #111;
          margin-bottom: 10px;
          line-height: 1.55;
        }
        .merit-card-desc {
          font-size: 0.84rem;
          color: #6B7280;
          line-height: 1.9;
          flex: 1;
        }
        /* カード上部アクセントライン */
        .merit-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #2563EB 0%, #93C5FD 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .merit-card:hover::after { transform: scaleX(1); }

        /* 特徴セクション 奇数行は左テキスト、偶数行は右テキスト */
        .feature-item { display: flex; gap: 56px; align-items: center; }
        .feature-item.reverse { flex-direction: row-reverse; }
        @media (max-width: 767px) {
          .feature-item, .feature-item.reverse { flex-direction: column; gap: 28px; }
        }

        /* 特徴画像 */
        .feature-img-wrap {
          flex: 1;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }
        .feature-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.7s ease;
          display: block;
        }
        .feature-img-wrap:hover img { transform: scale(1.04); }

        /* Detail カード */
        .detail-card {
          background: #fff;
          border-radius: 20px;
          padding: 28px;
          border: 1px solid #EAEAE7;
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        .detail-img {
          width: 80px;
          height: 80px;
          border-radius: 14px;
          overflow: hidden;
          flex-shrink: 0;
          background: #F0F4FF;
        }
        .detail-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .detail-card:hover .detail-img img { transform: scale(1.08); }

        /* 他サービスカード */
        .service-other-card {
          display: flex;
          gap: 20px;
          align-items: center;
          padding: 20px;
          border-radius: 20px;
          background: #fff;
          border: 1px solid #EAEAE7;
          text-decoration: none;
          transition: box-shadow 0.25s, border-color 0.25s, transform 0.25s;
        }
        .service-other-card:hover {
          box-shadow: 0 12px 40px rgba(37, 99, 235, 0.1);
          border-color: #BFDBFE;
          transform: translateY(-3px);
        }
        .service-other-img {
          width: 96px;
          height: 96px;
          border-radius: 14px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .service-other-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s;
        }
        .service-other-card:hover .service-other-img img { transform: scale(1.07); }
        .service-other-arrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #2563EB;
          margin-top: 10px;
        }
        .service-other-arrow svg {
          transition: transform 0.25s;
        }
        .service-other-card:hover .service-other-arrow svg {
          transform: translateX(4px);
        }

        /* ヒーロー画像オーバーレイ */
        .hero-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.38) 100%);
          pointer-events: none;
        }
      `}</style>

      <article className="w-full max-w-[1060px] mx-auto px-5 md:px-10">
        {/* ===== HERO ===== */}
        <header className="mb-20 md:mb-28">
          {/* サービスラベル */}
          <div className="mb-7">
            <span className="en-label">Service Detail</span>
          </div>

          {/* タイトル */}
          <h1 className="font-syne text-[2.6rem] md:text-[4rem] font-extrabold text-gray-950 leading-[1.1] tracking-tight mb-10">
            {service?.title || "サービスタイトル"}
          </h1>

          {/* ヒーロー画像 */}
          <div className="w-full h-[260px] md:h-[480px] rounded-3xl overflow-hidden shadow-lg relative">
            <img
              src={service?.image}
              alt={service?.title || "サービス画像"}
              className="w-full h-full object-cover object-center"
            />
            <div className="hero-img-overlay" />
          </div>
        </header>

        <div className="space-y-24 md:space-y-32">
          {/* ===== MERITS ===== */}
          <section>
            {/* 区切り線 */}
            <div className="border-t border-[#DDDDD8] pt-12 mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div className="mb-3">
                  <span className="en-label">Merit</span>
                </div>
                <h2 className="font-syne text-[2rem] md:text-[2.6rem] font-extrabold text-gray-950 tracking-tight leading-tight">
                  メリット
                </h2>
              </div>
            </div>

            {/* カードグリッド */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {service.merits.map((merit, index) => (
                <div key={merit.title} className="merit-card">
                  <div className="merit-card-index">0{index + 1}</div>
                  <h3 className="merit-card-title">{merit.title}</h3>
                  <p className="merit-card-desc">{merit.description}</p>
                </div>
              ))}
            </div>

            {/* 説明文 */}
            <div className="bg-white rounded-2xl border border-[#EAEAE7] px-8 py-7">
              <p className="text-sm md:text-base text-gray-600 leading-[2] font-light">
                {service.meritDescription}
              </p>
            </div>
          </section>

          {/* ===== FEATURES ===== */}
          <section>
            <div className="border-t border-[#DDDDD8] pt-12 mb-16">
              <div className="mb-3">
                <span className="en-label">Feature</span>
              </div>
              <h2 className="font-syne text-[2rem] md:text-[2.6rem] font-extrabold text-gray-950 tracking-tight leading-tight">
                特徴
              </h2>
            </div>

            <div className="flex flex-col gap-20 md:gap-28">
              {service.feathers.map((feature, i) => (
                <div
                  key={feature.title}
                  className={`feature-item${i % 2 !== 0 ? " reverse" : ""}`}
                >
                  {/* テキスト */}
                  <div className="flex-1 flex flex-col justify-center">
                    <span className="font-syne text-[4.5rem] font-extrabold leading-none text-[#ECEEF4] tracking-tight select-none mb-1">
                      0{i + 1}
                    </span>
                    <h3 className="text-[1.35rem] md:text-[1.65rem] font-bold text-gray-900 mb-4 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-500 leading-[1.95] font-light">
                      {feature.description}
                    </p>
                  </div>

                  {/* 画像 */}
                  <div
                    className="feature-img-wrap flex-1"
                    style={{ height: "clamp(220px, 28vw, 360px)" }}
                  >
                    <img src={feature.image} alt={feature.title} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ===== DETAIL ===== */}
          {service.detail && service.detail.length > 0 && (
            <section>
              <div className="border-t border-[#DDDDD8] pt-12 mb-12">
                <div className="mb-3">
                  <span className="en-label">Detail</span>
                </div>
                <h2 className="font-syne text-[2rem] md:text-[2.6rem] font-extrabold text-gray-950 tracking-tight leading-tight">
                  詳細
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {service.detail.map((detail) => (
                  <div key={detail.title} className="detail-card">
                    <div className="detail-img">
                      <img src={detail.image} alt={detail.title} />
                    </div>
                    <div className="flex flex-col justify-center flex-1">
                      <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                        {detail.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-[1.9] font-light">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ===== OTHER SERVICES ===== */}
          <section className="pb-4">
            <div className="border-t border-[#DDDDD8] pt-12 mb-12">
              <h2 className="font-syne text-[2rem] md:text-[2.6rem] font-extrabold text-gray-950 tracking-tight leading-tight">
                他のサービスを見る
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {SERVICES.filter((item) => item.slug !== service.slug).map(
                (item) => (
                  <Link
                    href={`/services/${item.slug}`}
                    key={item.title}
                    className="service-other-card"
                  >
                    <div className="service-other-img">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      {item.subTitle && (
                        <span className="text-[0.7rem] font-bold text-gray-400 uppercase tracking-widest mb-1 truncate">
                          {item.subTitle}
                        </span>
                      )}
                      <h3 className="text-base md:text-lg font-bold text-gray-900 leading-snug mb-0">
                        {item.title}
                      </h3>
                      <span className="service-other-arrow">
                        詳しく見る
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <path
                            d="M1 6.5h11M7.5 1.5l5 5-5 5"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ),
              )}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
