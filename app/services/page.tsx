import { SERVICES } from "@/constants/services";
import Link from "next/link";

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {SERVICES.map((item) => (
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
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
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
      ))}
    </div>
  );
};

export default page;
