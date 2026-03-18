export default function AboutSection() {
  return (
    <section className="mt-16 md:mt-24 lg:mt-45 py-10 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-shippori text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-6">
          私たちについて
        </h2>

        <p className="font-shippori text-sm sm:text-base md:text-lg lg:text-xl px-4 lg:px-1 text-gray-700 leading-relaxed space-y-4">
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
