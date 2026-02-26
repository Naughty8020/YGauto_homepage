import { SERVICES } from "@/constants/services";
import Link from "next/link";

const page = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full">
      {SERVICES.map((item) => (
        <Link
          href={`/services/${item.slug}`}
          key={item.title}
          className="group flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start p-4 md:p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
        >
          <div className=" flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start snap-center">
            <div className="flex-none">
              <div className="w-32 h-32 md:w-40 md:h-40  overflow-hidden shadow-md border-4 border-white group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="flex-1 w-full flex flex-col justify-center text-center md:text-left pt-2 md:pt-4">
              <h4 className="text-xs md:text-sm font-bold text-gray-800 mb-3 leading-light">
                {item.subTitle}
              </h4>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 leading-tight">
                {item.title}
              </h3>
              <span className="border-1 border-gray-600 rounded-2xl text-xl md:text-2xl text-gray-800 text-center ">
                →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default page;
