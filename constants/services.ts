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
    title: "車両販売",
    subTitle: "国産・輸入車、新車から厳選中古車まで",
    image: "/unsplash/Work.jpg",
    description:
      "滋賀県野洲市を拠点に、国産車・輸入車問わず幅広いラインナップを取り揃えております。新車販売はもちろん、中古車は大手オークションから良質な車両のみを厳選して仕入れ。自社修理工場で国家二級整備士が点検・整備を徹底した上で、お客様のご要望に沿った理想の一台をご提供します。ローンの申し込みも可能です。",
    merits: [
      {
        title: "自社整備による安心品質",
        description: "仕入れた中古車は自社工場で隅々まで点検。安全が確認された車両のみを販売します。",
      },
      {
        title: "新車・中古車オーダー可能",
        description: "店頭にないお車も、全国のオークションネットワークからご希望に合わせてお探しします。",
      },
      {
        title: "充実のアフターサービス",
        description: "販売後のメンテナンスや車検も自社で完結。長く安心してお乗りいただけます。",
      },
    ],
    meritDescription:
      "「買ってよかった」をすべてのお客様に。販売からその後のメンテナンスまで、自社一貫体制でサポートいたします。",
    feathers: [
      {
        title: "ローン申し込み対応",
        description: "各種オートローンを取り扱っております。月々のお支払い計画もご相談ください。",
        image: "/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg",
      },
      {
        title: "自社工場での納車前点検",
        description: "経験豊富な整備士が、エンジンから細部まで厳格にチェックしてからお渡しします。",
        image: "/unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
      },
      {
        title: "輸入車・国産車対応",
        description: "メーカーを問わず、お客様のライフスタイルに最適な一台をご提案いたします。",
        image: "/unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg",
      },
    ],
  },
  {
    slug: "purchase", 
    title: "買取",
    subTitle: "不動車・事故車もOK。高価買取を実現",
    image: "/unsplash/tireReplacement1.jpg",
    description:
      "乗らなくなったお車や、乗り換え時の下取りもお任せください。自社でオークション会場まで搬送し、中間経費を徹底的に削減することで高価買取を実現。不動車や事故車についても誠実に対応いたします。査定はもちろん無料。お客様のご都合に合わせ、野洲市周辺の出張査定も承っております。",
    merits: [
      {
        title: "経費削減を査定額に還元",
        description: "自社搬送により中間マージンをカット。その分、お客様の買取価格をアップさせます。",
      },
      {
        title: "不動車・事故車も買取",
        description: "動かなくなったお車や事故現状車も、自社のノウハウで価値を見出し、買い取ります。",
      },
      {
        title: "無料の出張査定",
        description: "ご自宅やお勤め先までお伺いします。査定料などは一切かかりませんのでご安心ください。",
      },
    ],
    meritDescription:
      "愛車の価値を正しく評価し、納得の価格をご提示します。乗り換えのご相談もお気軽にどうぞ。",
    feathers: [
      {
        title: "スピード査定",
        description: "お待たせすることなく、その場で迅速に査定。透明性の高い価格提示を徹底します。",
        image: "/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg",
      },
      {
        title: "手続き代行",
        description: "名義変更などの面倒な書類手続きも、私たちが責任を持って代行いたします。",
        image: "/unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
      },
      {
        title: "下取りも歓迎",
        description: "次のお車への乗り換え時、下取りとして査定することでさらにお得な提案が可能です。",
        image: "/unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg",
      },
    ],
  },
  {
    slug: "inspection", 
    title: "車検・整備",
    subTitle: "国家二級整備士による安心・安全なメンテナンス",
    image: "/unsplash/maintenance.jpg",
    description:
      "自社修理工場を完備し、経験豊富な国家二級整備士が点検・整備を一貫して行います。車検見積もりは無料。点検内容や必要な整備については、お客様に分かりやすく丁寧にご説明することを大切にしています。最新の設備でお車の状態を正確に把握し、安心・安全な走行を支えます。",
    merits: [
      {
        title: "車検見積もり無料",
        description: "まずは見積もりから。不透明な追加費用が発生しないよう、事前にしっかりご説明します。",
      },
      {
        title: "国家整備士による点検",
        description: "高い技術を持つスタッフが、愛車の「健康診断」を隅々まで実施いたします。",
      },
      {
        title: "自社修理工場完備",
        description: "外部に委託せず自社で整備・修理を行うため、品質管理が徹底されています。",
      },
    ],
    meritDescription:
      "大切な愛車に長く、安全に乗っていただくために。誠実な整備と分かりやすい説明をお約束します。",
    feathers: [
      {
        title: "日常のメンテナンス",
        description: "オイル交換やタイヤ交換など、些細なことでもお気軽にお立ち寄りください。",
        image: "/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg",
      },
      {
        title: "精密な点検",
        description: "目視だけでなく、専用の診断機器等を用いて見えない部分の不調もチェックします。",
        image: "/unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
      },
      {
        title: "丁寧な解説",
        description: "お車の現状を写真等でお見せし、納得いただいた上で整備を開始します。",
        image: "/unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg",
      },
    ],
  },
  {
    slug: "coating", 
    title: "コーティング・フィルム",
    subTitle: "徹底した下処理で、新車のような輝きを",
    image: "/unsplash/engine.jpg",
    description:
      "ボディーおよびフロントガラスのコーティング、カーフィルム施工を承ります。車両販売時だけでなく、コーティングのみでのご予約も可能です。下処理から徹底的にこだわり、ボディを磨き上げることで新車のような光沢を復元。施工後は汚れが落ちやすくなり、日頃のお手入れが格段に楽になります。",
    merits: [
      {
        title: "ボディ・ガラス両対応",
        description: "ボディー全体の保護はもちろん、視界をクリアにするフロントガラスコーティングも。 ",
      },
      {
        title: "徹底した磨き工程",
        description: "コーティングの効果を最大限引き出すため、時間をかけて下地を完璧に仕上げます。",
      },
      {
        title: "お手入れの簡略化",
        description: "強力な撥水・防汚性能により、水洗いだけで驚くほど綺麗になります。",
      },
    ],
    meritDescription:
      "愛車を守り、美しさを長く保つための投資。プロの技術で宝石のような輝きを提供します。",
    feathers: [
      {
        title: "カーフィルム施工",
        description: "断熱・UVカット効果で車内を快適に。プライバシー保護にも最適です。",
        image: "/unsplash/cloud-infrastructure.jpg",
      },
      {
        title: "コーティングのみOK",
        description: "今の愛車をもっと綺麗にしたいという方、コーティング単体でのご依頼も大歓迎です。",
        image: "/unsplash/security-shield.jpg",
      },
      {
        title: "アフターケアアドバイス",
        description: "施工後の輝きを維持するための、正しい洗車方法なども丁寧にお教えします。",
        image: "/unsplash/refactoring.jpg",
      },
    ],
  },
  {
    slug: "roadservice", 
    title: "レッカー・ロードサービス",
    subTitle: "急なトラブル、バッテリー上がり、事故対応に迅速出動",
    image: "/unsplash/bonnet.jpg",
    description:
      "バッテリー上がりや異音、チェックランプ点灯、万が一の事故など、急なトラブルの際はすぐにご連絡ください。不安な状況でも迅速に駆けつけ、適切なサポートをいたします。レッカー出動が必要な場合も自社で対応。滋賀県野洲市から、お客様の安心のために全力でサポートいたします。",
    merits: [
      {
        title: "迅速な対応体制",
        description: "急な自走不能時でも、お電話一本で現場へ迅速に向かいます。",
      },
      {
        title: "バッテリー上がり対応",
        description: "「エンジンがかからない」といった日常のトラブルにも即座に対応可能です。",
      },
      {
        title: "事故時のトータルサポート",
        description: "現場からのレッカー移動、その後の修理相談まで一貫して引き受けます。",
      },
    ],
    meritDescription:
      "「困ったときはあそこへ」。地域のお客様にそう思っていただけるような、安心の機動力を提供します。",
    feathers: [
      {
        title: "トラブル相談",
        description: "異音や警告灯など「これって大丈夫？」という不安にもプロが対応します。",
        image: "/unsplash/cloud-infrastructure.jpg",
      },
      {
        title: "レッカー搬送",
        description: "自社車両により、現場から修理工場まで安全にお車をお運びします。",
        image: "/unsplash/security-shield.jpg",
      },
      {
        title: "安心の窓口",
        description: "パニックになりがちな緊急時も、丁寧な聞き取りで状況を整理しサポートします。",
        image: "/unsplash/refactoring.jpg",
      },
    ],
  }
];
