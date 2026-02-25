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
    slug: "web-design",
    title: "Webデザイン",
    subTitle: "魅力を伝え、成果を生み出すデジタル体験",
    image: "/unsplash/Work.jpg",
    description:
      "企業の魅力やブランド価値を最大限に引き出す、完全オーダーメイドのWebデザインを提供します。単に見た目が美しいだけでなく、訪問者が迷わず目的の情報にたどり着ける優れたUI/UXを緻密に設計。さらに、最新のフロントエンド技術を活用することで、リッチなアニメーションと高速なページ読み込みを両立させ、離脱率を大幅に改善します。あらゆるデバイスで完璧に表示されるレスポンシブデザインを標準搭載し、貴社のビジネス成長を加速させます。",
    merits: [
      {
        title: "直感的なUI/UX設計",
        description: "ユーザーの心理を分析し、コンバージョンに自然と結びつく導線を作成します。",
      },
      {
        title: "マルチデバイス完全対応",
        description: "PCからスマホまで、どこから見ても美しいレスポンシブデザインを保ちます。",
      },
      {
        title: "ブランド価値の向上",
        description: "一貫したビジュアルアイデンティティを確立し、競合他社と差別化します。",
      },
    ],
    meritDescription:
      "優れたWebデザインは、24時間365日休まず働く優秀な営業マンです。第一印象で信頼感を与え、わかりやすい構成で顧客の不安を取り除くことで、成約率は劇的に向上します。",
    feathers: [
      {
        title: "徹底したヒアリングと競合調査",
        description: "データに基づいた確かな戦略からデザインの方向性を決定します。",
        image: "/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg",
      },
      {
        title: "モダンな技術スタックの採用",
        description: "Next.jsやTailwind CSSなど、拡張性の高い最新技術を採用しています。",
        image: "/unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
      },
      {
        title: "マイクロインタラクションの実装",
        description: "心地よいアニメーションを実装し、サイトの質感を高めます。",
        image: "/unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg",
      },
    ],
  },
  {
    slug: "app-dev",
    title: "アプリ開発",
    subTitle: "顧客との接点を深める、次世代のモバイル体験",
    image: "/unsplash/maintenance.jpg",
    description:
      "ユーザーの日常に溶け込み、ビジネスの顧客接点を劇的に強化する高品質なモバイルアプリケーションを開発します。iOSおよびAndroidの双方に対応するクロスプラットフォーム開発や、高度な技術要件にも対応。App Storeへの申請サポートからリリース後の保守まで、アプリビジネスの成功をトータルでバックアップします。",
    merits: [
      {
        title: "プッシュ通知による高い再訪率",
        description: "直接メッセージを届け、アクティブ率の向上やキャンペーン効果を最大化します。",
      },
      {
        title: "サクサク動く操作感",
        description: "レンダリング処理を極限まで最適化し、ストレスのない操作感を実現します。",
      },
      {
        title: "セキュアなバックエンド",
        description: "強固なセキュリティ対策を実装し、スケーラブルなサーバー構成を構築します。",
      },
    ],
    meritDescription:
      "アプリは「既存顧客のファン化（LTV向上）」において最強のツールです。ホーム画面に存在するアイコンがブランド想起を高め、圧倒的なリピート率を生み出します。",
    feathers: [
      {
        title: "アジャイル手法による柔軟な開発",
        description: "短いサイクルで開発とテストを繰り返し、本当に必要な機能をスピーディに形にします。",
        image: "/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg",
      },
      {
        title: "オフライン環境への対応",
        description: "電波の届かない場所でも主要機能が利用できるデータ同期技術を実装します。",
        image: "/unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
      },
      {
        title: "詳細な利用状況分析",
        description: "分析ツールを組み込み、リリース後の継続的な改善に向けたデータを提供します。",
        image: "/unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg",
      },
    ],
  },
  {
    slug: "seo",
    title: "SEO対策",
    subTitle: "検索エンジンを味方につける、持続可能な集客戦略",
    image: "/unsplash/tireReplacement1.jpg",
    description:
      "検索エンジンからのオーガニック流入を最大化し、広告費に依存しない持続可能な集客チャネルを構築します。最新のアルゴリズムに準拠したホワイトハットSEOを徹底し、内部対策・コンテンツSEO・外部対策の3本柱で総合的にアプローチ。中長期的な売上向上に貢献します。",
    merits: [
      {
        title: "広告費用の大幅な削減",
        description: "一度上位表示されれば、無料で質の高いユーザーを集客し続けます。",
      },
      {
        title: "成約率の高い見込み客の獲得",
        description: "自ら検索して訪れたユーザーは、購入やお問い合わせに繋がりやすい傾向があります。",
      },
      {
        title: "企業の信頼性向上",
        description: "検索上位に表示されることは、ユーザーに無意識の信頼感（ブランディング）を与えます。",
      },
    ],
    meritDescription:
      "SEOの本質は、ユーザーの疑問に対する最高の回答を用意することです。私たちが構築したコンテンツは、貴社の強力なデジタル資産として残り続けます。",
    feathers: [
      {
        title: "Core Web Vitalsの最適化",
        description: "ページの読み込み速度や安定性を改善し、技術的なSEOスコアを最大化します。",
        image: "/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg",
      },
      {
        title: "検索意図（インテント）分析",
        description: "ターゲットの「本当の目的」を分析し、意図に合致したコンテンツを企画します。",
        image: "/unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
      },
      {
        title: "詳細な改善レポート",
        description: "毎月の流入推移をレポート化し、データに基づくPDCAサイクルを回します。",
        image: "/unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg",
      },
    ],
  },
  {
    slug: "sns-marketing",
    title: "SNS運用・マーケティング",
    subTitle: "ファンを増やし、ブランドの「声」を届ける",
    image: "/unsplash/oil.jpg",
    description:
      "Instagram、X(Twitter)、TikTokなどの主要SNSを活用し、ブランドの認知拡大とファン形成を支援します。単なる投稿代行ではなく、ターゲット分析に基づいた戦略立案から、目を引くクリエイティブ制作、フォロワーとのコミュニケーション管理までを一貫して担当。バズ（拡散）を狙うだけでなく、ブランドの世界観を正しく伝え、ビジネスゴール（来店・購入）へ繋げるSNS運用を実現します。",
    merits: [
      {
        title: "UGC（口コミ）の連鎖創出",
        description: "ユーザーが自発的にシェアしたくなる仕掛けを構築し、信頼性の高い口コミを拡散させます。",
      },
      {
        title: "リアルタイムな顧客体験",
        description: "最新のトレンドを即座に取り入れ、ユーザーと直接対話することで親近感と忠誠度を高めます。",
      },
      {
        title: "精度の高いターゲティング",
        description: "SNS特有の詳細な属性データを活用し、届けたい層へダイレクトに情報を届けます。",
      },
    ],
    meritDescription:
      "SNSは現代の「口コミ」の主戦場です。適切な運用を行うことで、ブランドがユーザーの生活の一部となり、広告だけでは得られない深い繋がりと長期的なファンを構築できます。",
    feathers: [
      {
        title: "トーン＆マナーの統一",
        description: "ブランドに合わせた投稿画像・文章のルールを策定し、世界観のブレを無くします。",
        image: "/unsplash/design-consistency.jpg",
      },
      {
        title: "ショート動画活用戦略",
        description: "現在最も伸びやすいリールやTikTok等の縦型動画を企画・編集し、露出を最大化します。",
        image: "/unsplash/video-production.jpg",
      },
      {
        title: "インフルエンサー連携",
        description: "貴社のブランドに合致したインフルエンサーを選定し、効果的なPR施策をワンストップで行います。",
        image: "/unsplash/collaboration.jpg",
      },
    ],
  },
  {
    slug: "system-maintenance",
    title: "システム開発・保守",
    subTitle: "ビジネスを止めない、盤石な基盤と進化",
    image: "/unsplash/engine.jpg",
    description:
      "複雑な業務フローを効率化する社内システムや、スケーラブルなWebサービスの基盤構築を行います。開発して終わりではなく、OSやライブラリのアップデート、セキュリティパッチの適用、パフォーマンス監視など、リリース後の運用・保守を徹底重視。トラブルを未然に防ぐ予防保守と、ビジネスの変化に合わせた柔軟な機能拡張で、貴社のDX（デジタルトランスフォーメーション）を強力に支え続けます。",
    merits: [
      {
        title: "業務効率の劇的改善",
        description: "手作業やアナログな管理をシステム化し、ヒューマンエラーの削減と生産性向上を実現します。",
      },
      {
        title: "24時間の安定稼働",
        description: "異常を即座に検知する監視体制を構築し、ダウンタイムを最小限に抑えます。",
      },
      {
        title: "データの利活用推進",
        description: "分散したデータを一元管理し、経営判断に役立つダッシュボードや分析基盤を提供します。",
      },
    ],
    meritDescription:
      "システムは「企業の心臓」です。常に最新の状態に保ち、最適化し続けることで、時代の変化に負けない強靭なビジネス基盤を維持することができます。",
    feathers: [
      {
        title: "クラウドネイティブな構築",
        description: "AWSやGCPを活用し、アクセス数に応じて自動で拡張する低コストで柔軟な基盤を構築します。",
        image: "/unsplash/cloud-infrastructure.jpg",
      },
      {
        title: "徹底した脆弱性対策",
        description: "定期的なセキュリティ診断を行い、巧妙化するサイバー攻撃から企業の資産を守ります。",
        image: "/unsplash/security-shield.jpg",
      },
      {
        title: "レガシーシステム刷新",
        description: "古くなった既存システムの解析を行い、モダンな環境への移行（モダナイゼーション）を支援します。",
        image: "/unsplash/refactoring.jpg",
      },
    ],
  },
];
