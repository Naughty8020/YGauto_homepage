// src/constants/services.ts

export type Service = {
  slug: string;
  title: string;
  subTitle: string;
  description: string;
  image: string;
  merits: { title: string; description: string }[];
  meritDescription: string;
  feathers: { title: string; description: string; image: string }[];
  detail?: { title: string; description: string; image: string }[];
  detailTile?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "sales", 
    title: "販売・買取",
    subTitle: "納得の価格と安心の品質で、理想の一台を",
    image: "/unsplash/Work.jpg",
    description:
      "軽自動車から輸入車まで、厳選された高品質な車両を幅広く取り揃えております。買取においては、市場相場をリアルタイムで反映し、オプションパーツまで細かくプラス査定。自社販売ルートを持つからこそできる、他店に負けない高価買取をお約束します。乗り換えのご相談からローンのシミュレーションまで、専門スタッフが親身にサポートいたします。",
    merits: [
      {
        title: "高価買取の実現",
        description: "中間マージンをカットした直接販売により、相場以上の買取価格を提示します。",
      },
      {
        title: "徹底した品質管理",
        description: "入庫後の厳しいチェックとルームクリーニングを経て、最高級の状態でお届けします。",
      },
      {
        title: "自由なオーダー販売",
        description: "店頭にないお車も、全国のオークションネットワークから理想の一台をお探しします。",
      },
    ],
    meritDescription:
      "「売るのも買うも安心」をモットーに。透明性の高い査定と、購入後の充実した保証で、お客様のカーライフのスタートを後押しします。",
    feathers: [
      {
        title: "スピード査定",
        description: "お待たせすることなく、その場で迅速に査定額を算出。LINE査定も実施中です。",
        image: "/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg",
      },
      {
        title: "充実の自社保証",
        description: "ご購入後も安心して走行いただけるよう、独自の長期保証プランをご用意しています。",
        image: "/unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
      },
      {
        title: "アフターフォロー",
        description: "納車後の定期点検やオイル交換のご案内など、長く続くお付き合いを大切にします。",
        image: "/unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg",
      },
    ],
  },
  {
    slug: "inspection", 
    title: "車検",
    subTitle: "確かな技術で、次の一歩を安全に",
    image: "/unsplash/maintenance.jpg",
    description:
      "国の認可を受けた認証工場にて、プロの整備士がお客様の愛車を隅々までチェックします。過剰な整備はせず、お車の状態に合わせて「今必要な整備」と「後でも大丈夫なメンテナンス」を分かりやすくご説明。安全性を最優先にしながら、コストパフォーマンスに優れた車検プランを提案いたします。代車の無料貸し出しも承っております。",
    merits: [
      {
        title: "事前見積もりで安心",
        description: "作業前に必ず費用を提示し、ご納得いただいてから整備を開始します。追加費用も原則ありません。",
      },
      {
        title: "最短当日完了",
        description: "効率的な作業オペレーションにより、お急ぎの方には1日車検の対応も可能です。",
      },
      {
        title: "整備保証付き",
        description: "車検時に実施した整備箇所については、一定期間の走行保証をお付けしています。",
      },
    ],
    meritDescription:
      "車検は単なる義務ではなく、愛車の健康診断です。次の2年間をトラブルなく過ごしていただくための、真心を込めた整備をお届けします。",
    feathers: [
      {
        title: "国家資格整備士が担当",
        description: "豊富な経験を持つ整備士が、見落としのない緻密な点検を実施します。",
        image: "/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg",
      },
      {
        title: "ハイブリッド車対応",
        description: "専用診断機を完備。最新のHV車やEV車のシステム点検もお任せください。",
        image: "/unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
      },
      {
        title: "代車無料サービス",
        description: "車検中もお仕事や移動に困らないよう、清潔な代車をご用意しています。",
        image: "/unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg",
      },
    ],
  },
  {
    slug: "maintenance", 
    title: "整備",
    subTitle: "未然に防ぐ、長く乗るためのメンテナンス",
    image: "/unsplash/tireReplacement1.jpg",
    description:
      "「ブレーキの効きが悪い」「異音がする」といったトラブルから、オイル交換やタイヤ交換などの日常的なメンテナンスまで幅広く対応します。最新のテスター（コンピュータ診断機）を完備しており、目視では確認できない車両内部の異常も迅速に特定。軽度の不調のうちに対処することで、大きな故障や修理費用の高騰を防ぎます。",
    merits: [
      {
        title: "トラブルの早期発見",
        description: "定期的なプロの目による点検で、事故や故障のリスクを最小限に抑えます。",
      },
      {
        title: "純正・優良部品の選別",
        description: "ご予算に応じて、高品質な純正パーツからコスパの良い優良社外品まで提案可能です。",
      },
      {
        title: "燃費・性能の維持",
        description: "適切なオイル管理や調整により、新車時に近い走行性能と燃費を維持させます。",
      },
    ],
    meritDescription:
      "日頃のメンテナンスこそが、お車の寿命を延ばす一番の秘訣です。どんな些細な違和感でも、お気軽にご相談ください。",
    feathers: [
      {
        title: "コンピュータ診断",
        description: "輸入車や新型車の電子制御系トラブルも、専用テスターで正確に診断します。",
        image: "/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg",
      },
      {
        title: "クイックメンテナンス",
        description: "オイル交換や電球交換など、短時間で終わる作業は予約なしでも迅速に対応します。",
        image: "/unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
      },
      {
        title: "分かりやすい解説",
        description: "専門用語を使わず、お車の状況を写真や現物を見せながら丁寧にご説明します。",
        image: "/unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg",
      },
    ],
  },
  {
    slug: "repair", 
    title: "板金塗装",
    subTitle: "キズ・ヘコミをなかったことに。熟練の復元技術",
    image: "/unsplash/oil.jpg",
    description:
      "うっかり擦ってしまった小さなキズから、大きな事故によるフレーム修正まで、熟練の職人が元通りに修復します。最新の調色システムを導入しており、経年劣化で変化した既存のボディカラーに合わせて完璧に色を再現。リサイクルパーツ（中古部品）を活用したリーズナブルな修理や、保険適用の事故修理など、お客様の状況に最適なプランを提案します。",
    merits: [
      {
        title: "違和感のない仕上がり",
        description: "熟練の塗装技術により、修理箇所が分からないほどの高いクオリティを実現します。",
      },
      {
        title: "保険修理アドバイス",
        description: "保険を使って直すべきか、自費の方がお得か、損をしないためのシミュレーションを行います。",
      },
      {
        title: "リサイクルパーツ活用",
        description: "程度の良い中古部品を探すことで、新品交換よりも修理代を大幅に抑えられます。",
      },
    ],
    meritDescription:
      "愛車の見た目は資産価値に直結します。確かな板金技術で、見た目の美しさと走行上の安全性の両方を完璧に復元いたします。",
    feathers: [
      {
        title: "最新の塗装ブース",
        description: "埃を遮断する専用ブースで、ムラのない均一で美しい塗装を施します。",
        image: "/unsplash/design-consistency.jpg",
      },
      {
        title: "フレーム修正機完備",
        description: "目に見えない骨格の歪みもミリ単位で矯正。走行安全性をしっかり確保します。",
        image: "/unsplash/video-production.jpg",
      },
      {
        title: "無料代車即日貸出",
        description: "板金修理中の不便をなくすため、お預かりしたその場で代車をお貸しします。",
        image: "/unsplash/collaboration.jpg",
      },
    ],
  },
  {
    slug: "coating", 
    title: "コーティング・フィルム",
    subTitle: "新車の輝きを保ち、快適な車内空間を",
    image: "/unsplash/engine.jpg",
    description:
      "最高級のガラスコーティングを施工し、深みのある光沢と強力な撥水性能を長期間維持させます。洗車の手間が劇的に軽減されるだけでなく、紫外線や酸性雨から塗装面をガード。また、カーフィルム施工では、断熱・UVカット効果によりエアコン効率を高め、プライバシーを保護。機能性と美しさを両立させたカスタマイズを提供します。",
    merits: [
      {
        title: "圧倒的な防汚性能",
        description: "汚れが固着しにくくなるため、普段の洗車は水洗いだけで驚くほど綺麗になります。",
      },
      {
        title: "車内温度の上昇抑制",
        description: "遮熱フィルムにより夏場のジリジリ感を軽減。同乗者の快適性を大幅にアップさせます。",
      },
      {
        title: "資産価値の保護",
        description: "外装の光沢を保つことで、将来の売却時（下取り）の査定額アップが期待できます。",
      },
    ],
    meritDescription:
      "コーティングは単なる贅沢ではなく、お車を守るための投資です。独自の多層コーティングで、あなたの愛車に宝石のような輝きを。",
    feathers: [
      {
        title: "下地処理の徹底",
        description: "磨き工程に時間をかけ、塗装面の微細な傷を除去してからコーティングを密着させます。",
        image: "/unsplash/cloud-infrastructure.jpg",
      },
      {
        title: "高精度フィルムカット",
        description: "コンピューターカットにより、窓枠に寸分の狂いもなくフィットするフィルムを施工します。",
        image: "/unsplash/security-shield.jpg",
      },
      {
        title: "メンテナンス相談",
        description: "施工後の効果を長く保つためのケア方法や、定期的なメンテナンスキットもご用意しています。",
        image: "/unsplash/refactoring.jpg",
      },
    ],
  },
  {
    slug: "towing", 
    title: "事故レッカー",
    subTitle: "もしもの時に、一番に駆けつける安心",
    image: "/unsplash/bonnet.jpg",
    description:
      "事故や故障で自走不能になった際、24時間365日体制で現場へ急行します。狭い場所や脱輪、転落といった困難な状況でも、専用車両とプロの技術で安全に救出・搬送。保険会社との連携もスムーズに行い、現場での応急処置から修理工場への搬送まで、パニックになりがちな緊急事態をトータルでサポートいたします。",
    merits: [
      {
        title: "24時間年中無休",
        description: "深夜・早朝・大型連休、いつでも電話一本で迅速に出動可能です。",
      },
      {
        title: "現場での応急対応",
        description: "バッテリー上がりやスペアタイヤ交換など、その場で解決できるトラブルにも対応します。",
      },
      {
        title: "保険ロードサービス対応",
        description: "各種自動車保険のロードサービスと提携。お客様の費用負担を抑えた手配が可能です。",
      },
    ],
    meritDescription:
      "突然のトラブルで最も必要なのは「すぐに誰かが助けに来てくれる」という安心感です。現場の安全確保から搬送まで、すべて私たちが引き受けます。",
    feathers: [
      {
        title: "特殊車両による救出",
        description: "スタックや落輪など、通常の積載車では困難な作業も特殊アタッチメントで対応します。",
        image: "/unsplash/cloud-infrastructure.jpg",
      },
      {
        title: "全国搬送対応",
        description: "遠方でのトラブルでも、ご指定の工場やご自宅まで安全にお車をお運びします。",
        image: "/unsplash/security-shield.jpg",
      },
      {
        title: "レンタカー手配",
        description: "搬送先で移動手段がなくなった場合でも、レンタカーの手配をその場でサポート可能です。",
        image: "/unsplash/refactoring.jpg",
      },
    ],
  }
];