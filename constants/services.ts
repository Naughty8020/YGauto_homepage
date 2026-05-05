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
    image: "/CarKey.jpg",
    description:
      "国産車・輸入車問わず販売可能で、販売後のサービスも充実しています。ローンの申し込みにも対応可能です。新車も購入可能な店舗であり、中古車販売は大手中古車オークションに参入して良質なお車を仕入れ、自社工場で点検整備を実施し、お客様のご要望にあった1台をご提供させていただきます。",
    merits: [
      {
        title: "国産車・輸入車問わず販売可能",
        description: "国産車から輸入車まで、幅広い車種の販売に対応しています。",
      },
      {
        title: "販売後のサービスも充実",
        description: "購入後の点検や整備など、アフターサービスも一貫してご提供します。",
      },
      {
        title: "ローンの申し込みも可能",
        description: "各種ローンのお申し込みにも対応し、ご購入時のご負担を軽減します。",
      },
    ],
    meritDescription:
      "「買ってよかった」をすべてのお客様に。販売からその後のメンテナンスまで、自社一貫体制でサポートいたします。",
    feathers: [
      {
        title: "ローン申し込み対応",
        description: "各種オートローンを取り扱っております。月々のお支払い計画もご相談ください。",
        image: "/contract4.jpg",
      },
      {
        title: "自社工場での納車前点検",
        description: "経験豊富な整備士が、エンジンから細部まで厳格にチェックしてからお渡しします。",
        image: "/Inspection.jpg",
      },
      {
        title: "輸入車・国産車対応",
        description: "メーカーを問わず、お客様のライフスタイルに最適な一台をご提案いたします。",
        image: "/sale.jpg",
      },
    ],
  },
  {
    slug: "purchase", 
    title: "買取",
    subTitle: "不動車・事故車もOK。高価買取を実現",
    image: "/handshake.jpg",
    description:
      "乗らなくなったお車や、乗り換え時の下取りにもご対応します。不動車・事故車の買取も可能です。買取査定はもちろん無料で、お客様のご都合によっては出張査定も実施しています。自社でオークション会場まで運び経費削減を行うことで、高価買取を実現します。",
    merits: [
      {
        title: "乗らなくなったお車・下取り対応",
        description: "乗らなくなったお車や、お乗り換え時の下取りにも柔軟にご対応します。",
      },
      {
        title: "不動車・事故車も買取",
        description: "不動車や事故車も含め、状態を問わずしっかり査定して買取いたします。",
      },
      {
        title: "査定無料・出張査定対応",
        description: "買取査定は無料で、お客様のご都合に合わせた出張査定にも対応しています。",
      },
    ],
    meritDescription:
      "愛車の価値を正しく評価し、納得の価格をご提示します。乗り換えのご相談もお気軽にどうぞ。",
    feathers: [
      {
        title: "スピード査定",
        description: "お待たせすることなく、その場で迅速に査定。透明性の高い価格提示を徹底します。",
        image: "/contract2.jpg",
      },
      {
        title: "手続き代行",
        description: "名義変更などの面倒な書類手続きも、私たちが責任を持って代行いたします。",
        image: "/contract.jpg",
      },
      {
        title: "下取りも歓迎",
        description: "次のお車への乗り換え時、下取りとして査定することでさらにお得な提案が可能です。",
        image: "/contract5.jpg",
      },
    ],
  },
  {
    slug: "inspection", 
    title: "車検・整備",
    subTitle: "国家二級整備士による安心・安全なメンテナンス",
    image: "/tireReplacement.jpg",
    description:
      "車検見積りは無料で、自社修理工場を完備しています。経験豊富な国家二級整備士資格保有スタッフが点検・整備メンテナンスを一貫して行い、お客様の愛車を安心・安全な状態に維持します。点検内容や整備内容については、丁寧にご説明させていただきます。",
    merits: [
      {
        title: "車検見積り無料",
        description: "車検のお見積りは無料で実施し、費用感を事前に明確にご案内します。",
      },
      {
        title: "自社修理工場完備",
        description: "自社工場で点検から整備まで一貫対応し、品質を高い水準で維持します。",
      },
      {
        title: "国家二級整備士在籍",
        description: "経験豊富な国家二級整備士資格保有スタッフが丁寧に点検・整備を行います。",
      },
    ],
    meritDescription:
      "大切な愛車に長く、安全に乗っていただくために。誠実な整備と分かりやすい説明をお約束します。",
    feathers: [
      {
        title: "日常のメンテナンス",
        description: "オイル交換やタイヤ交換など、些細なことでもお気軽にお立ち寄りください。",
        image: "/oil.jpg",
      },
      {
        title: "精密な点検",
        description: "目視だけでなく、専用の診断機器等を用いて見えない部分の不調もチェックします。",
        image: "/Maintenance.jpg",
      },
      {
        title: "丁寧な解説",
        description: "お車の現状を写真等でお見せし、納得いただいた上で整備を開始します。",
        image: "/tireReplacement2.jpg",
      },
    ],
  },
  {
    slug: "coating", 
    title: "コーティング・フィルム",
    subTitle: "徹底した下処理で、新車のような輝きを",
    image: "/coating.jpg",
    description:
      "ボディーガラスコーティング、フロントガラスコーティング、カーフィルム施工に対応しています。販売時はもちろん、コーティングのみでのご予約も可能です。下処理から徹底的にボディを仕上げ、新車のような輝きを取り戻します。施工後はお手入れも楽になり、お客様ご自身でも簡単にメンテナンスしていただけます。",
    merits: [
      {
        title: "ボディーガラスコーティング",
        description: "ボディ全体を保護し、美しい艶を長く維持する施工を行います。",
      },
      {
        title: "フロントガラスコーティング",
        description: "視界の確保と汚れの付着軽減につながるコーティングに対応しています。",
      },
      {
        title: "カーフィルム",
        description: "遮熱性やプライバシー性を高めるフィルム施工もご提供しています。",
      },
    ],
    meritDescription:
      "愛車を守り、美しさを長く保つための投資。プロの技術で宝石のような輝きを提供します。",
    feathers: [
      {
        title: "カーフィルム施工",
        description: "断熱・UVカット効果で車内を快適に。プライバシー保護にも最適です。",
        image: "/coating.jpg",
      },
      {
        title: "コーティングのみOK",
        description: "今の愛車をもっと綺麗にしたいという方、コーティング単体でのご依頼も大歓迎です。",
        image: "/coating2.jpg",
      },
      {
        title: "アフターケアアドバイス",
        description: "施工後の輝きを維持するための、正しい洗車方法なども丁寧にお教えします。",
        image: "/contract6.jpg",
      },
    ],
  },
  {
    slug: "roadservice", 
    title: "レッカー・ロードサービス",
    subTitle: "急なトラブル、バッテリー上がり、事故対応に迅速出動",
    image: "/wrecker.jpg",
    description:
      "バッテリー上がり、異音、チェックランプ点灯、事故発生時などの急なトラブル時はご連絡ください。不安やパニックで対応にお困りになる場面でも、迅速にご対応させていただきます。レッカー出動が必要な場合も含め、安心してご相談いただける体制を整えています。",
    merits: [
      {
        title: "バッテリー上がり",
        description: "突然のバッテリー上がりにも、迅速な初期対応を行います。",
      },
      {
        title: "異音・チェックランプ点灯時",
        description: "走行中の異常や警告灯点灯時にも、状況に応じて適切にサポートします。",
      },
      {
        title: "事故発生時など",
        description: "事故時のレッカー出動を含め、緊急時の不安を軽減できるよう迅速に対応します。",
      },
    ],
    meritDescription:
      "「困ったときはあそこへ」。地域のお客様にそう思っていただけるような、安心の機動力を提供します。",
    feathers: [
      {
        title: "トラブル相談",
        description: "異音や警告灯など「これって大丈夫？」という不安にもプロが対応します。",
        image: "/call.jpg",
      },
      {
        title: "レッカー搬送",
        description: "自社車両により、現場から修理工場まで安全にお車をお運びします。",
        image: "/wrecker2.jpg",
      },
      {
        title: "安心の窓口",
        description: "パニックになりがちな緊急時も、丁寧な聞き取りで状況を整理しサポートします。",
        image: "/contract3.jpg",
      },
    ],
  }
];
