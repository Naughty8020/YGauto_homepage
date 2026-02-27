import Image from 'next/image';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Service, SERVICES } from '@/constants/services';

export default function ServicesSection() {
  return (
    <section className="py-20  lg:mb-30 px-6 max-w-7xl mx-auto">
      <div className="border-b-4 border-gray-300 pb-2 mb-12">
        <h1 className="font-shippori text-2xl lg:text-4xl font-bold text-left">
          サービス内容
        </h1>
      </div>

      <div className="flex flex-col gap-20">
        {SERVICES.map((service: Service, index: number) => (
          <div
            key={service.slug}
            className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } items-center gap-10 lg:gap-20`}
          >
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-sm"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="font-shippori font-bold text-2xl lg:text-4xl mb-6 border-b-2 border-gray-100 pb-2">
                {service.title}
              </h2>
              <p className="font-shippori text-base leading-relaxed text-gray-700">
                {service.description}
              </p>

              <div className="mt-8 flex justify-end">
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-2 border-2 border-black py-2 px-6 hover:bg-black hover:text-white transition-all duration-300"
                >
                  <span className="font-bold">詳しく見る</span>
                  <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
