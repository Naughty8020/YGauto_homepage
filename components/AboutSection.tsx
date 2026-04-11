export default function AboutSection() {
  return (
    <section className="mt-14 md:mt-22 lg:mt-25 py-10 md:py-16 px-5 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto  pt-8 md:pt-10">
        <div className="flex items-center justify-center gap-3 mb-5 md:mb-6">
          <span className="w-8 md:w-10 h-px bg-sub-500" />
          <p className="text-[10px] sm:text-xs font-light tracking-[0.3em] uppercase text-sub-500">
            About Us
          </p>
        </div>

        <h2 className="text-center text-3xl sm:text-3xl md:text-4xl font-light tracking-wide mb-6 md:mb-8">
          私たちについて
        </h2>

        <p className="text-center text-sm sm:text-base md:text-lg px-2 sm:px-4 md:px-6 text-gray-700 leading-loose font-light">
          滋賀県野洲市に拠点を置き、車両販売から整備、車検、レッカーなど
          全て自社で完結できる環境がございます。
          <br className="hidden sm:block" />
          愛車のお探しからメンテナンス、緊急時のトラブルも全て対応させて頂き、
          <br className="hidden sm:block" />
          お客様と愛車を全力でサポートいたします。
        </p>
      </div>
    </section>
  );
}
