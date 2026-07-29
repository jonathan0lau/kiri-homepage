export const locales = ["zh", "ja", "en"] as const;
export type Locale = (typeof locales)[number];

export interface Dictionary {
  metadata: {
    title: string;
    description: string;
    socialDescription: string;
  };
  language: {
    label: string;
    names: Record<Locale, string>;
  };
  nav: {
    ariaLabel: string;
    mobileAriaLabel: string;
    openMenu: string;
    closeMenu: string;
    home: string;
    about: string;
    profile: string;
    photoBooks: string;
    gallery: string;
    news: string;
    links: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    subtitle: string;
    poeticLine: string;
    viewPhotoBooks: string;
    portalsLabel: string;
    followX: string;
    visitFantia: string;
    joinDiscord: string;
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    body: string;
    note: string;
    pillars: string[];
  };
  profile: {
    eyebrow: string;
    heading: string;
    description: string;
    imageAlt: string;
    quote: string;
    attributes: Array<{ label: string; value: string }>;
    keywordsLabel: string;
    keywords: string[];
  };
  photoBooks: {
    eyebrow: string;
    heading: string;
    description: string;
    open: string;
    viewAll: string;
    catalogEyebrow: string;
    catalogHeading: string;
    catalogDescription: string;
    backHome: string;
    inquiryHeading: string;
    inquiryDescription: string;
    emailInquiry: string;
    discordInquiry: string;
    purchaseNote: string;
    items: Array<{
      id: string;
      number: string;
      title: string;
      subtitle: string;
      description: string;
      image: string;
      imageAlt: string;
      status: string;
    }>;
  };
  gallery: {
    eyebrow: string;
    heading: string;
    description: string;
    expand: string;
    viewMore: string;
    viewImage: string;
    modalLabel: string;
    closeModal: string;
    items: Array<{
      src: string;
      alt: string;
      label: string;
      collection: string;
    }>;
  };
  news: {
    eyebrow: string;
    heading: string;
    items: Array<{ date: string; title: string; tag: string }>;
  };
  links: {
    eyebrow: string;
    heading: string;
    description: string;
    open: string;
    cards: {
      x: string;
      fantia: string;
      discord: string;
    };
  };
  contact: {
    eyebrow: string;
    heading: string;
    description: string;
    servicesLabel: string;
    services: string[];
    cta: string;
    responseNote: string;
  };
  faq: {
    eyebrow: string;
    headingLine1: string;
    headingLine2: string;
    description: string;
    items: Array<{ question: string; answer: string }>;
  };
  footer: {
    ariaLabel: string;
    privacy: string;
    terms: string;
    businessContact: string;
    copyright: string;
    signoff: string;
  };
}

const gallerySources = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];

export const dictionaries: Record<Locale, Dictionary> = {
  zh: {
    metadata: {
      title: "Kiri Universe｜官方粉丝入口",
      description:
        "探索原创角色 Kiri 的写真集、人设档案、精选作品与官方内容入口。",
      socialDescription: "进入 Kiri 的写真集、角色设定与创作世界。",
    },
    language: {
      label: "选择语言",
      names: { zh: "中文", ja: "日本語", en: "English" },
    },
    nav: {
      ariaLabel: "主要导航",
      mobileAriaLabel: "移动端导航",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
      home: "首页",
      about: "关于",
      profile: "人设",
      photoBooks: "写真集",
      gallery: "画廊",
      news: "动态",
      links: "链接",
      contact: "合作",
    },
    hero: {
      eyebrow: "原创角色 · 写真企划",
      subtitle: "关于 Kiri 的写真集、角色设定与限定作品。",
      poeticLine: "用影像记录角色，也用角色连接每一组作品。",
      viewPhotoBooks: "浏览写真集",
      portalsLabel: "继续前往",
      followX: "关注",
      visitFantia: "访问",
      joinDiscord: "加入 Discord",
      imageAlt: "宇宙之门前的 Kiri 主视觉",
    },
    about: {
      eyebrow: "01 · 创作企划",
      heading: "A character, captured in chapters.",
      body: "Kiri Universe 是以原创角色 Kiri 为中心的写真与角色企划。每组作品既是一套独立影像，也在持续补充 Kiri 的气质、关系和故事。",
      note:
        "世界观不会一次全部说明，而会随着写真集、人设档案与限定内容逐步展开。",
      pillars: ["写真集", "人设档案", "限定内容", "粉丝社区"],
    },
    profile: {
      eyebrow: "02 · 角色档案",
      heading: "Meet Kiri",
      description:
        "Kiri 是整个企划的中心角色。她会随着不同写真主题呈现新的侧面，但始终保持统一的角色气质和视觉识别。",
      imageAlt: "Kiri 的角色主视觉",
      quote: "安静、克制，又带着让人想继续靠近的距离感。",
      attributes: [
        { label: "Name", value: "Kiri" },
        { label: "Identity", value: "Original Character" },
        { label: "Project", value: "Kiri Universe" },
        { label: "Expression", value: "Photography · Story" },
      ],
      keywordsLabel: "Character Keywords",
      keywords: ["克制", "神秘", "现代", "柔和", "距离感"],
    },
    photoBooks: {
      eyebrow: "03 · 写真集",
      heading: "Stories in Still Images.",
      description:
        "写真集是认识 Kiri 的主要方式。每一册围绕一种气质、场景或关系展开，并拥有独立的视觉方向。",
      open: "购买咨询",
      viewAll: "查看全部写真集",
      catalogEyebrow: "Photo Book Archive",
      catalogHeading: "Kiri 写真集",
      catalogDescription:
        "这里收录 Kiri 的写真集与主题视觉企划。网站仅展示封面和少量介绍，购买请通过邮件或 Discord 私聊确认。",
      backHome: "返回首页",
      inquiryHeading: "如何购买写真集",
      inquiryDescription:
        "网站暂不提供在线结账。请通过邮件或 Discord 私聊告知希望购买的册名，我们会另行确认库存、价格、取货或寄送方式。",
      emailInquiry: "邮件咨询购买",
      discordInquiry: "Discord 私聊咨询",
      purchaseNote: "发送咨询不代表订单成立，最终信息以双方私下确认为准。",
      items: [
        {
          id: "first-light",
          number: "VOL. 01",
          title: "First Light",
          subtitle: "Kiri 的第一组视觉档案",
          description: "以柔和光线和干净构图呈现 Kiri 最基础、最接近日常的一面。",
          image: gallerySources[0],
          imageAlt: "First Light 写真集封面预览",
          status: "购买请咨询",
        },
        {
          id: "neon-hours",
          number: "VOL. 02",
          title: "Neon Hours",
          subtitle: "城市夜色写真",
          description: "在霓虹、雨夜与现代都市之间，记录更冷静而疏离的 Kiri。",
          image: gallerySources[2],
          imageAlt: "Neon Hours 写真集封面预览",
          status: "购买请咨询",
        },
        {
          id: "astral-room",
          number: "VOL. 03",
          title: "Astral Room",
          subtitle: "梦境主题写真",
          description: "以星光、室内空间与梦境色彩构成更具幻想感的视觉章节。",
          image: gallerySources[5],
          imageAlt: "Astral Room 写真集封面预览",
          status: "购买请咨询",
        },
        {
          id: "velvet-morning",
          number: "VOL. 04",
          title: "Velvet Morning",
          subtitle: "柔光室内写真",
          description:
            "以晨光、织物与安静的室内空间，呈现更加柔和自然的 Kiri。",
          image: gallerySources[4],
          imageAlt: "Velvet Morning 写真集封面预览",
          status: "购买请咨询",
        },
        {
          id: "silent-library",
          number: "VOL. 05",
          title: "Silent Library",
          subtitle: "书房主题写真",
          description:
            "在书页、木质空间与沉静光线之间，记录 Kiri 更知性的一面。",
          image: gallerySources[3],
          imageAlt: "Silent Library 写真集封面预览",
          status: "购买请咨询",
        },
        {
          id: "crystal-reverie",
          number: "VOL. 06",
          title: "Crystal Reverie",
          subtitle: "水晶梦境写真",
          description:
            "以水晶、花朵与冷色光构成梦境般的主题视觉。",
          image: gallerySources[1],
          imageAlt: "Crystal Reverie 写真集封面预览",
          status: "购买请咨询",
        },
      ],
    },
    gallery: {
      eyebrow: "04 · 精选影像",
      heading: "Selected Cuts",
      description:
        "从写真集与角色视觉中选出的少量片段。更多封面与写真介绍可在写真集页面查看。",
      expand: "查看大图 ↗",
      viewMore: "查看全部写真集",
      viewImage: "查看大图",
      modalLabel: "大图预览",
      closeModal: "关闭大图预览",
      items: [
        { src: gallerySources[0], alt: "月夜天文台中的 Kiri", label: "月夜天文台", collection: "First Light" },
        { src: gallerySources[1], alt: "水晶花园中的 Kiri", label: "水晶幻梦", collection: "Astral Room" },
        { src: gallerySources[2], alt: "霓虹雨夜中的 Kiri", label: "霓虹雨夜", collection: "Neon Hours" },
        { src: gallerySources[3], alt: "星辰图书馆中的 Kiri", label: "星辰典藏", collection: "Astral Room" },
        { src: gallerySources[4], alt: "云海晨曦中的 Kiri", label: "云上海明", collection: "First Light" },
        { src: gallerySources[5], alt: "宇宙之门前的 Kiri", label: "星界之门", collection: "Astral Room" },
      ],
    },
    news: {
      eyebrow: "05 · 最新动态",
      heading: "Latest News",
      items: [
        { date: "2026.07", title: "Kiri Universe 网站正式公开", tag: "Website" },
        { date: "2026.07", title: "Fantia 发布新限定内容", tag: "Fantia" },
        { date: "2026.06", title: "Discord 粉丝社区开放", tag: "Discord" },
      ],
    },
    links: {
      eyebrow: "06 · 官方链接",
      heading: "Follow Kiri",
      description:
        "关注最新动态、浏览 Fantia 限定内容，或加入 Discord 与其他喜欢 Kiri 的成员交流。",
      open: "打开",
      cards: {
        x: "查看最新动态、拍摄预告与公开作品。",
        fantia: "浏览限定作品、创作过程与会员内容。",
        discord: "加入粉丝社区，讨论写真、人设与最新企划。",
      },
    },
    contact: {
      eyebrow: "07 · 商务合作",
      heading: "Work with Kiri",
      description:
        "欢迎拍摄合作、品牌推广、活动邀约与内容企划。请在邮件中说明合作内容、时间、地点、预算范围及联系方式，我们会在确认后回复。",
      servicesLabel: "合作范围",
      services: ["拍摄合作", "品牌推广", "活动邀约", "内容企划"],
      cta: "发送合作邮件",
      responseNote: "仅接受商务与合作相关邮件。",
    },
    faq: {
      eyebrow: "08 · 常见问题",
      headingLine1: "Questions,",
      headingLine2: "answered.",
      description: "关于 Kiri、人设、写真集与官方内容的常见问题。",
      items: [
        {
          question: "Kiri 是谁？",
          answer:
            "Kiri 是 Kiri Universe 的中心原创角色。写真、人设与故事内容都会围绕她持续展开。",
        },
        {
          question: "写真集主要包含什么？",
          answer:
            "每套写真围绕独立主题完成选片、视觉设计和角色表达。官网会展示部分封面与简介，购买请通过邮件或 Discord 私聊咨询。",
        },
        {
          question: "写真集要怎样购买？",
          answer:
            "网站不提供在线结账。请在写真集页面通过邮件或 Discord 私聊告知希望购买的册名，再单独确认库存、价格、线下取货或寄送方式。",
        },
        {
          question: "Fantia 上有哪些内容？",
          answer:
            "Fantia 将发布完整插画、创作过程、角色设定与部分限定内容。具体内容会随创作计划持续更新。",
        },
        {
          question: "Discord 粉丝群主要用于什么？",
          answer:
            "Discord 粉丝群用于交流作品、分享最新消息，以及让喜欢 Kiri 的朋友们彼此认识。加入前请留意服务器规则。",
        },
      ],
    },
    footer: {
      ariaLabel: "页脚链接",
      privacy: "隐私政策",
      terms: "使用条款",
      businessContact: "商务合作",
      copyright: "版权所有 © 2026 Kiri Universe",
      signoff: "每一册，都是 Kiri 的一个侧面。",
    },
  },
  ja: {
    metadata: {
      title: "Kiri Universe｜公式ファンポータル",
      description:
        "オリジナルキャラクターKiriの写真集、キャラクタープロフィール、セレクテッドワークス、公式コンテンツをご覧ください。",
      socialDescription: "Kiriの写真集、キャラクター設定、創作世界への入口。",
    },
    language: {
      label: "言語を選択",
      names: { zh: "中文", ja: "日本語", en: "English" },
    },
    nav: {
      ariaLabel: "メインナビゲーション",
      mobileAriaLabel: "モバイルナビゲーション",
      openMenu: "メニューを開く",
      closeMenu: "メニューを閉じる",
      home: "ホーム",
      about: "紹介",
      profile: "プロフィール",
      photoBooks: "写真集",
      gallery: "ギャラリー",
      news: "ニュース",
      links: "リンク",
      contact: "お仕事",
    },
    hero: {
      eyebrow: "ORIGINAL CHARACTER · PHOTO PROJECT",
      subtitle: "Kiriの写真集、キャラクター設定、限定作品。",
      poeticLine: "写真でキャラクターを描き、Kiriの新しい一面を記録します。",
      viewPhotoBooks: "写真集を見る",
      portalsLabel: "外部ポータル",
      followX: "フォロー",
      visitFantia: "見る",
      joinDiscord: "Discordに参加",
      imageAlt: "星界の門に佇むKiriのメインビジュアル",
    },
    about: {
      eyebrow: "01 · CREATIVE PROJECT",
      heading: "A character, captured in chapters.",
      body: "Kiri Universeは、オリジナルキャラクターKiriを中心にした写真とキャラクター企画です。一つひとつの作品が独立したビジュアルでありながら、Kiriの個性や物語を少しずつ広げていきます。",
      note:
        "世界観は一度に説明するのではなく、写真集、プロフィール、限定コンテンツを通して少しずつ公開します。",
      pillars: ["写真集", "キャラクター設定", "限定コンテンツ", "ファンコミュニティ"],
    },
    profile: {
      eyebrow: "02 · CHARACTER PROFILE",
      heading: "Meet Kiri",
      description:
        "Kiriはすべての作品の中心にいるキャラクターです。テーマごとに新しい表情を見せながら、共通する空気感とビジュアルアイデンティティを保ちます。",
      imageAlt: "Kiriのキャラクターメインビジュアル",
      quote: "静かで繊細。それでも、もう少し近づきたくなる距離感。",
      attributes: [
        { label: "Name", value: "Kiri" },
        { label: "Identity", value: "Original Character" },
        { label: "Project", value: "Kiri Universe" },
        { label: "Expression", value: "Photography · Story" },
      ],
      keywordsLabel: "Character Keywords",
      keywords: ["静けさ", "神秘", "モダン", "柔らかさ", "距離感"],
    },
    photoBooks: {
      eyebrow: "03 · PHOTO BOOKS",
      heading: "Stories in Still Images.",
      description:
        "写真集はKiriを知るための中心的なコンテンツです。各冊が一つのムード、場所、関係性を軸に、異なるビジュアルで構成されます。",
      open: "購入について相談",
      viewAll: "写真集をすべて見る",
      catalogEyebrow: "Photo Book Archive",
      catalogHeading: "Kiri 写真集",
      catalogDescription:
        "Kiriの写真集とテーマビジュアルをまとめています。サイトでは表紙と一部の紹介のみを掲載し、購入はメールまたはDiscordのプライベートメッセージでご相談ください。",
      backHome: "ホームに戻る",
      inquiryHeading: "写真集の購入方法",
      inquiryDescription:
        "サイト内でのオンライン決済には対応していません。ご希望の写真集名をメールまたはDiscordでお知らせください。在庫、価格、受け渡し・発送方法を個別に確認します。",
      emailInquiry: "メールで購入相談",
      discordInquiry: "Discordで相談",
      purchaseNote: "お問い合わせのみでは注文は確定しません。最終条件は個別の確認内容が優先されます。",
      items: [
        {
          id: "first-light",
          number: "VOL. 01",
          title: "First Light",
          subtitle: "Kiri、最初のビジュアルアーカイブ",
          description:
            "柔らかな光とクリーンな構図で、Kiriの最も自然で日常に近い姿を描きます。",
          image: gallerySources[0],
          imageAlt: "First Light写真集カバープレビュー",
          status: "購入相談",
        },
        {
          id: "neon-hours",
          number: "VOL. 02",
          title: "Neon Hours",
          subtitle: "都市の夜をめぐる写真",
          description:
            "ネオン、雨、都会の夜の中で、冷静で少し距離のあるKiriを記録します。",
          image: gallerySources[2],
          imageAlt: "Neon Hours写真集カバープレビュー",
          status: "購入相談",
        },
        {
          id: "astral-room",
          number: "VOL. 03",
          title: "Astral Room",
          subtitle: "夢をテーマにした写真",
          description:
            "星の光、室内空間、夢の色彩で構成する、幻想的なビジュアルチャプターです。",
          image: gallerySources[5],
          imageAlt: "Astral Room写真集カバープレビュー",
          status: "購入相談",
        },
        {
          id: "velvet-morning",
          number: "VOL. 04",
          title: "Velvet Morning",
          subtitle: "柔らかな朝の室内写真",
          description:
            "朝の光、布の質感、静かな室内で、より自然で柔らかなKiriを描きます。",
          image: gallerySources[4],
          imageAlt: "Velvet Morning写真集カバープレビュー",
          status: "購入相談",
        },
        {
          id: "silent-library",
          number: "VOL. 05",
          title: "Silent Library",
          subtitle: "書斎をテーマにした写真",
          description:
            "本、木の質感、落ち着いた光の中で、Kiriの知的な一面を記録します。",
          image: gallerySources[3],
          imageAlt: "Silent Library写真集カバープレビュー",
          status: "購入相談",
        },
        {
          id: "crystal-reverie",
          number: "VOL. 06",
          title: "Crystal Reverie",
          subtitle: "水晶の夢をテーマにした写真",
          description:
            "水晶、花、冷たい色の光で構成された、夢のようなテーマビジュアルです。",
          image: gallerySources[1],
          imageAlt: "Crystal Reverie写真集カバープレビュー",
          status: "購入相談",
        },
      ],
    },
    gallery: {
      eyebrow: "04 · SELECTED IMAGES",
      heading: "Selected Cuts",
      description:
        "写真集とキャラクタービジュアルから選んだ一部のカット。表紙と各写真集の紹介は写真集ページでご覧いただけます。",
      expand: "拡大表示 ↗",
      viewMore: "写真集をすべて見る",
      viewImage: "拡大画像を表示",
      modalLabel: "画像プレビュー",
      closeModal: "画像プレビューを閉じる",
      items: [
        { src: gallerySources[0], alt: "月夜の天文台にいるKiri", label: "月夜の天文台", collection: "First Light" },
        { src: gallerySources[1], alt: "水晶庭園にいるKiri", label: "水晶の夢", collection: "Astral Room" },
        { src: gallerySources[2], alt: "ネオンの雨の中にいるKiri", label: "ネオンレイン", collection: "Neon Hours" },
        { src: gallerySources[3], alt: "星の図書館にいるKiri", label: "星空の書庫", collection: "Astral Room" },
        { src: gallerySources[4], alt: "雲海の夜明けにいるKiri", label: "雲上の夜明け", collection: "First Light" },
        { src: gallerySources[5], alt: "宇宙の門の前にいるKiri", label: "星界の門", collection: "Astral Room" },
      ],
    },
    news: {
      eyebrow: "05 · NEWS",
      heading: "Latest News",
      items: [
        { date: "2026.07", title: "Kiri Universe公式サイト公開", tag: "Website" },
        { date: "2026.07", title: "Fantiaに新しい限定コンテンツを公開", tag: "Fantia" },
        { date: "2026.06", title: "Discordファンコミュニティオープン", tag: "Discord" },
      ],
    },
    links: {
      eyebrow: "06 · OFFICIAL LINKS",
      heading: "Follow Kiri",
      description:
        "最新情報をフォローし、Fantiaの限定コンテンツを見たり、DiscordでKiriを好きな方と交流できます。",
      open: "開く",
      cards: {
        x: "最新情報、撮影予告、公開作品をチェック。",
        fantia: "限定作品、制作過程、メンバー向けコンテンツを見る。",
        discord: "写真、キャラクター設定、新しい企画についてファン同士で交流。",
      },
    },
    contact: {
      eyebrow: "07 · お仕事のご相談",
      heading: "Work with Kiri",
      description:
        "撮影、ブランドプロモーション、イベント出演、コンテンツ企画などのご相談を承ります。内容、希望日時、場所、予算の目安、ご連絡先をメールにてお知らせください。",
      servicesLabel: "ご相談いただける内容",
      services: ["撮影", "ブランドPR", "イベント出演", "コンテンツ企画"],
      cta: "仕事の相談を送る",
      responseNote: "ビジネス・コラボレーションに関するご連絡のみ受け付けています。",
    },
    faq: {
      eyebrow: "08 · FAQ",
      headingLine1: "Questions,",
      headingLine2: "answered.",
      description: "Kiri、キャラクター設定、写真集、公式コンテンツについて。",
      items: [
        {
          question: "Kiriとは誰ですか？",
          answer:
            "KiriはKiri Universeの中心となるオリジナルキャラクターです。写真、設定、物語はすべてKiriを軸に展開します。",
        },
        {
          question: "写真集にはどんな内容がありますか？",
          answer:
            "各写真集は独立したテーマで構成され、写真セレクト、ビジュアルデザイン、キャラクター表現をまとめています。表紙と紹介はサイトで確認でき、購入はメールまたはDiscordでご相談いただけます。",
        },
        {
          question: "写真集はどのように購入できますか？",
          answer:
            "サイト内にオンライン決済はありません。写真集ページからメールまたはDiscordで希望する冊名をお知らせいただき、在庫、価格、対面受け取りまたは発送方法を個別に確認します。",
        },
        {
          question: "Fantiaではどんなコンテンツが見られますか？",
          answer:
            "完成イラスト、制作過程、キャラクター設定、一部の限定コンテンツを公開します。内容は制作スケジュールに合わせて随時更新されます。",
        },
        {
          question: "Discordコミュニティは何のための場所ですか？",
          answer:
            "作品について語り合い、最新情報を共有し、Kiriを好きな方同士で交流するための場所です。参加前にDiscordサーバーのルールをご確認ください。",
        },
      ],
    },
    footer: {
      ariaLabel: "フッターリンク",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      businessContact: "お仕事のご相談",
      copyright: "Copyright © 2026 Kiri Universe",
      signoff: "一冊ごとに、新しいKiri。",
    },
  },
  en: {
    metadata: {
      title: "Kiri Universe | Official Fan Portal",
      description:
        "Explore Kiri's photo books, character profile, selected works, and official content portals.",
      socialDescription: "Enter Kiri's photo books, character profile, and creative world.",
    },
    language: {
      label: "Select language",
      names: { zh: "中文", ja: "日本語", en: "English" },
    },
    nav: {
      ariaLabel: "Main navigation",
      mobileAriaLabel: "Mobile navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      home: "Home",
      about: "About",
      profile: "Profile",
      photoBooks: "Photo Books",
      gallery: "Gallery",
      news: "News",
      links: "Links",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Original character · Photo project",
      subtitle: "Photo books, character notes, and limited works featuring Kiri.",
      poeticLine: "Photography gives the character form—and every collection reveals another side.",
      viewPhotoBooks: "Browse Photo Books",
      portalsLabel: "Continue through",
      followX: "Follow",
      visitFantia: "Visit",
      joinDiscord: "Join Discord",
      imageAlt: "Kiri standing before an astral portal",
    },
    about: {
      eyebrow: "01 · Creative project",
      heading: "A character, captured in chapters.",
      body: "Kiri Universe is a photography and character project centered on the original character Kiri. Each collection stands on its own while gradually adding to her personality, relationships, and story.",
      note:
        "The wider setting is revealed gradually through photo books, character notes, and limited content—not explained all at once.",
      pillars: ["Photo books", "Character notes", "Limited content", "Fan community"],
    },
    profile: {
      eyebrow: "02 · Character profile",
      heading: "Meet Kiri",
      description:
        "Kiri is the character at the center of every collection. New themes reveal different sides of her while keeping a consistent mood and visual identity.",
      imageAlt: "Kiri character key visual",
      quote: "Quiet and composed, with just enough distance to make you want to know more.",
      attributes: [
        { label: "Name", value: "Kiri" },
        { label: "Identity", value: "Original Character" },
        { label: "Project", value: "Kiri Universe" },
        { label: "Expression", value: "Photography · Story" },
      ],
      keywordsLabel: "Character Keywords",
      keywords: ["Composed", "Mysterious", "Modern", "Soft", "Distant"],
    },
    photoBooks: {
      eyebrow: "03 · Photo books",
      heading: "Stories in Still Images.",
      description:
        "Photo books are the main way to meet Kiri. Each volume is built around its own mood, place, or relationship, with a distinct visual direction.",
      open: "Purchase Inquiry",
      viewAll: "View All Photo Books",
      catalogEyebrow: "Photo Book Archive",
      catalogHeading: "Kiri Photo Books",
      catalogDescription:
        "Browse Kiri's photo books and themed visual projects. The website shows covers and short previews; purchases are arranged privately by email or Discord.",
      backHome: "Back to home",
      inquiryHeading: "How to purchase",
      inquiryDescription:
        "There is no online checkout on this website. Tell us which volume you are interested in by email or Discord, and we will confirm availability, price, and pickup or shipping details privately.",
      emailInquiry: "Inquire by Email",
      discordInquiry: "Ask on Discord",
      purchaseNote: "An inquiry does not confirm an order. The privately agreed details are final.",
      items: [
        {
          id: "first-light",
          number: "VOL. 01",
          title: "First Light",
          subtitle: "Kiri's first visual archive",
          description:
            "Soft light and clean compositions introduce Kiri at her most natural and closest to everyday life.",
          image: gallerySources[0],
          imageAlt: "First Light photo book cover preview",
          status: "Ask to Purchase",
        },
        {
          id: "neon-hours",
          number: "VOL. 02",
          title: "Neon Hours",
          subtitle: "A study in city nights",
          description:
            "Neon, rain, and modern streets reveal a cooler, more distant side of Kiri.",
          image: gallerySources[2],
          imageAlt: "Neon Hours photo book cover preview",
          status: "Ask to Purchase",
        },
        {
          id: "astral-room",
          number: "VOL. 03",
          title: "Astral Room",
          subtitle: "A dream-themed collection",
          description:
            "Starlight, interior spaces, and dreamlike color shape a more imaginative visual chapter.",
          image: gallerySources[5],
          imageAlt: "Astral Room photo book cover preview",
          status: "Ask to Purchase",
        },
        {
          id: "velvet-morning",
          number: "VOL. 04",
          title: "Velvet Morning",
          subtitle: "A soft morning interior study",
          description:
            "Morning light, fabric, and quiet interiors reveal a softer and more natural side of Kiri.",
          image: gallerySources[4],
          imageAlt: "Velvet Morning photo book cover preview",
          status: "Ask to Purchase",
        },
        {
          id: "silent-library",
          number: "VOL. 05",
          title: "Silent Library",
          subtitle: "A study among books",
          description:
            "Pages, warm wood, and subdued light frame a more thoughtful side of Kiri.",
          image: gallerySources[3],
          imageAlt: "Silent Library photo book cover preview",
          status: "Ask to Purchase",
        },
        {
          id: "crystal-reverie",
          number: "VOL. 06",
          title: "Crystal Reverie",
          subtitle: "A crystal dream collection",
          description:
            "Crystal, flowers, and cool-toned light shape a dreamlike visual theme.",
          image: gallerySources[1],
          imageAlt: "Crystal Reverie photo book cover preview",
          status: "Ask to Purchase",
        },
      ],
    },
    gallery: {
      eyebrow: "04 · Selected images",
      heading: "Selected Cuts",
      description:
        "A small selection from the photo books and character visuals. Browse the photo book page for more covers and collection notes.",
      expand: "Expand ↗",
      viewMore: "View All Photo Books",
      viewImage: "View full image",
      modalLabel: "Image preview",
      closeModal: "Close image preview",
      items: [
        { src: gallerySources[0], alt: "Kiri in a moonlit observatory", label: "Moonlit Observatory", collection: "First Light" },
        { src: gallerySources[1], alt: "Kiri in a crystal garden", label: "Crystal Reverie", collection: "Astral Room" },
        { src: gallerySources[2], alt: "Kiri in a neon-lit rainstorm", label: "Neon Rain", collection: "Neon Hours" },
        { src: gallerySources[3], alt: "Kiri in a celestial library", label: "Celestial Archive", collection: "Astral Room" },
        { src: gallerySources[4], alt: "Kiri at dawn above the clouds", label: "Dawn Above Clouds", collection: "First Light" },
        { src: gallerySources[5], alt: "Kiri before an astral portal", label: "Astral Gate", collection: "Astral Room" },
      ],
    },
    news: {
      eyebrow: "05 · News",
      heading: "Latest News",
      items: [
        { date: "2026.07", title: "Kiri Universe website officially launched", tag: "Website" },
        { date: "2026.07", title: "New limited content published on Fantia", tag: "Fantia" },
        { date: "2026.06", title: "Discord fan community is now open", tag: "Discord" },
      ],
    },
    links: {
      eyebrow: "06 · Official links",
      heading: "Follow Kiri",
      description:
        "Follow the latest updates, browse limited Fantia content, or join other Kiri fans on Discord.",
      open: "Open",
      cards: {
        x: "See the latest updates, shoot previews, and public releases.",
        fantia: "Browse limited works, behind-the-scenes posts, and member content.",
        discord: "Join the fan community to discuss photo books, character notes, and new projects.",
      },
    },
    contact: {
      eyebrow: "07 · Business inquiries",
      heading: "Work with Kiri",
      description:
        "We welcome photography projects, brand campaigns, event appearances, and content collaborations. Please include the project scope, preferred dates, location, budget range, and your contact details.",
      servicesLabel: "Available for",
      services: ["Photography", "Brand campaigns", "Events", "Content projects"],
      cta: "Send a business inquiry",
      responseNote: "For business and collaboration inquiries only.",
    },
    faq: {
      eyebrow: "08 · FAQ",
      headingLine1: "Questions,",
      headingLine2: "answered.",
      description: "Common questions about Kiri, her profile, photo books, and official content.",
      items: [
        {
          question: "Who is Kiri?",
          answer:
            "Kiri is the original character at the center of Kiri Universe. The photo collections, character notes, and stories all develop around her.",
        },
        {
          question: "What is included in a photo book?",
          answer:
            "Each collection brings together a themed photo selection, visual design, and character expression. Covers and introductions are available on the site; purchase inquiries are handled privately by email or Discord.",
        },
        {
          question: "How can I purchase a photo book?",
          answer:
            "There is no online checkout. Use the email or Discord contact on the photo book page, tell us which volume you want, and confirm availability, price, pickup, or shipping privately.",
        },
        {
          question: "What can I find on Fantia?",
          answer:
            "Fantia features finished illustrations, behind-the-scenes creative work, character notes, and selected exclusive content. New releases follow Kiri's creative schedule.",
        },
        {
          question: "What is the Discord community for?",
          answer:
            "It is a place to discuss the artwork, share updates, and meet other people who enjoy Kiri. Please review the Discord server rules before joining.",
        },
      ],
    },
    footer: {
      ariaLabel: "Footer links",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      businessContact: "Business Inquiries",
      copyright: "Copyright © 2026 Kiri Universe",
      signoff: "Every volume reveals another side of Kiri.",
    },
  },
};

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
