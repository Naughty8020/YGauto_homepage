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
    subTitle: "魅力を伝え、成果を生み出すデジタル体験", // ← 追加
    image: "/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg",
    description:
      "企業の魅力やブランド価値を最大限に引き出す、完全オーダーメイドのWebデザインを提供します。単に見た目が美しいだけでなく、訪問者が迷わず目的の情報にたどり着ける優れたUI/UX（ユーザーインターフェース・ユーザーエクスペリエンス）を緻密に設計。さらに、最新のフロントエンド技術を活用することで、リッチなアニメーションと高速なページ読み込みを両立させ、離脱率を大幅に改善します。スマートフォンからPCまで、あらゆるデバイスで完璧に表示されるレスポンシブデザインを標準搭載し、貴社のビジネス成長を加速させる強力な「デジタルの顔」を構築します。",
    merits: [
      {
        title: "直感的なUI/UX設計",
        description:
          "ユーザーの視線移動や心理を分析し、コンバージョン（お問い合わせや購入）に自然と結びつく導線を作成します。",
      },
      {
        title: "マルチデバイス完全対応",
        description:
          "PC、タブレット、スマートフォンなど、画面サイズに合わせてレイアウトが最適化され、どこから見ても美しいデザインを保ちます。",
      },
      {
        title: "ブランド価値の向上",
        description:
          "コーポレートカラーやタイポグラフィを厳格にルール化し、競合他社と明確に差別化できる一貫したビジュアルアイデンティティを確立します。",
      },
    ],
    meritDescription:
      "優れたWebデザインは、24時間365日休まず働く優秀な営業マンのような存在です。第一印象で信頼感を与え、わかりやすい構成で顧客の不安を取り除くことで、成約率は劇的に向上します。また、アクセシビリティ（誰にでも使いやすい設計）に配慮することで、より幅広い層へのアプローチが可能になります。",
    feathers: [
      {
        title: "徹底したヒアリングと競合調査",
        description:
          "プロジェクト開始時に綿密なヒアリングを行い、ターゲット層の明確化と競合他社の分析を実施。データに基づいた確かな戦略からデザインの方向性を決定します。",
        image: "/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg",
      },
      {
        title: "モダンな技術スタックの採用",
        description:
          "Next.jsやTailwind CSSなど、最新かつ世界標準の技術を採用。開発効率が高いだけでなく、将来的な機能追加やデザイン変更にも柔軟に対応できる拡張性の高いコードを提供します。",
        image: "/unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
      },
      {
        title: "マイクロインタラクションの実装",
        description:
          "ボタンのホバー時やスクロール時の心地よいアニメーション（マイクロインタラクション）を実装し、ユーザーの操作に対して適切なフィードバックを返すことで、サイトの質感を高めます。",
        image: "/unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg",
      },
    ],
    detail: [
      {
        title: "アクセシビリティ(a11y)対応",
        description:
          "視覚に障害がある方や高齢者を含め、誰もが快適に利用できるようW3Cのガイドラインに準拠したセマンティックなHTML構造と適切なコントラスト比で実装します。",
        image: "/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg",
      },
      {
        title: "コンポーネント指向の設計",
        description:
          "Atomic Designなどの手法を取り入れ、UIパーツを再利用可能なコンポーネントとして分割。運用フェーズでのデザインの一貫性を保ち、修正コストを大幅に削減します。",
        image: "/unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
      },
    ],
    detailTile: "Reactの多機能について",
  },
  {
    slug: "app-dev",
    title: "アプリ開発",
    subTitle: "顧客との接点を深める、次世代のモバイル体験", // ← 追加
    image: "/unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
    description:
      "ユーザーの日常に溶け込み、ビジネスの顧客接点を劇的に強化する高品質なモバイルアプリケーションを開発します。iOS（iPhone）およびAndroidの双方に対応するクロスプラットフォーム開発技術や、OSの機能を最大限に引き出すネイティブ開発を要件に応じて柔軟に選択。複雑な業務ロジックや外部APIとの連携、リアルタイムチャット機能、位置情報システムなど、高度な技術要件にも対応可能です。単なる開発にとどまらず、App StoreやGoogle Playへの申請サポートからリリース後の保守・運用まで、アプリビジネスの成功をトータルでバックアップします。",
    merits: [
      {
        title: "プッシュ通知による高い再訪率",
        description:
          "ユーザーのスマートフォンに直接メッセージを届けるプッシュ通知を活用し、アクティブ率の向上やキャンペーンの効果を最大化します。",
      },
      {
        title: "サクサク動くネイティブな操作感",
        description:
          "メモリ消費やレンダリング処理を極限まで最適化し、ユーザーがストレスを感じない、滑らかで心地よい操作感を実現します。",
      },
      {
        title: "堅牢でセキュアなバックエンド",
        description:
          "数万規模の同時アクセスにも耐えうるスケーラブルなサーバーアーキテクチャと、個人情報を守る強固なセキュリティ対策を実装します。",
      },
    ],
    meritDescription:
      "Webサイトが「新規顧客の獲得」に向いているのに対し、アプリは「既存顧客のファン化（LTV向上）」において最強のツールです。ホーム画面にアプリアイコンが存在することでブランドの純粋想起が高まり、ワンタップでサービスにアクセスできる手軽さが、圧倒的なリピート率を生み出します。",
    feathers: [
      {
        title: "アジャイル手法による柔軟な開発",
        description:
          "要件を細かく分割し、短いサイクルで開発とテストを繰り返すアジャイル手法を採用。プロジェクト進行中の仕様変更にも柔軟に対応し、本当に必要な機能をスピーディに形にします。",
        image: "/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg",
      },
      {
        title: "オフライン環境への対応",
        description:
          "電波の届かない場所でもアプリの主要な機能が利用できるよう、ローカルデータベースを活用したデータ同期技術を実装。あらゆる環境下でユーザー体験を損ないません。",
        image: "/unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
      },
      {
        title: "利用状況の詳細アナリティクス",
        description:
          "アプリ内に分析ツールを組み込み、「どの画面が最も見られているか」「どこで離脱しているか」を可視化。リリース後の継続的な改善に向けた貴重なデータを提供します。",
        image: "/unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg",
      },
    ],
  },
  {
    slug: "seo",
    title: "SEO対策",
    subTitle: "検索エンジンを味方につける、持続可能な集客戦略", // ← 追加
    image: "/unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg",
    description:
      "検索エンジン（Google・Yahoo!）からのオーガニックな流入を最大化し、広告費に依存しない持続可能な集客チャネルを構築します。表面的なキーワードの詰め込みといった過去の手法ではなく、最新の検索アルゴリズムに準拠したホワイトハットSEOを徹底。サイトの構造改善や表示速度のチューニングを行う「内部対策」、権威性と専門性の高い記事を作成する「コンテンツSEO」、そして外部からの評価を高める「外部対策」の3本柱で総合的にアプローチします。貴社のサービスを本当に必要としている顕在層に的確にリーチし、中長期的な売上向上に貢献します。",
    merits: [
      {
        title: "広告費用の大幅な削減",
        description:
          "一度上位表示されれば、クリックされるたびに費用が発生するWeb広告とは異なり、24時間無料で質の高いユーザーを集客し続けます。",
      },
      {
        title: "成約率の高い見込み客の獲得",
        description:
          "自身の悩みを解決するために「自ら検索して訪れたユーザー」はモチベーションが高く、購入やお問い合わせに繋がりやすい傾向があります。",
      },
      {
        title: "企業の信頼性・権威性の向上",
        description:
          "特定のキーワードで検索結果の1ページ目に表示されることは、「業界を代表する企業である」という無意識の信頼感（ブランディング）をユーザーに与えます。",
      },
    ],
    meritDescription:
      "SEO対策の本質は、検索エンジンを騙すことではなく「ユーザーの疑問に対する最高の回答（コンテンツ）を用意し、それを検索エンジンが正しく読み取れるように整理すること」です。私たちが構築したSEO最適化済みのWebサイトやブログ記事は、一過性で終わらない、貴社の強力なデジタル資産として残り続けます。",
    feathers: [
      {
        title: "Core Web Vitalsの最適化",
        description:
          "Googleがランキング指標として重視する「Core Web Vitals（ページの読み込み速度、インタラクティブ性、視覚的安定性）」を徹底的に改善し、技術的なSEOスコアを最大化します。",
        image: "/unsplash/campaign-creators-e6n7uoEnYbA-unsplash.jpg",
      },
      {
        title: "検索意図（インテント）分析",
        description:
          "ターゲットユーザーがそのキーワードを検索した際の「本当の目的」を深く分析。情報収集なのか、比較検討なのか、購入なのかを見極め、意図に100%合致したコンテンツを企画します。",
        image: "/unsplash/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
      },
      {
        title: "定期的な順位計測と改善レポート",
        description:
          "対策キーワードの検索順位変動や、流入数の推移を毎月詳細にレポート化。データに基づくPDCAサイクルを回し、アルゴリズムの変動にも強い安定した上位表示を目指します。",
        image: "/unsplash/k-mitch-hodge-Esi7nknKxmw-unsplash.jpg",
      },
    ],
  },
];
