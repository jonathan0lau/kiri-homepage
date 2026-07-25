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
    gallery: string;
    news: string;
    links: string;
  };
  hero: {
    eyebrow: string;
    subtitle: string;
    poeticLine: string;
    followX: string;
    visitFantia: string;
    joinCommunity: string;
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    body: string;
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
    items: Array<{ src: string; alt: string; label: string }>;
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
      community: string;
    };
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
        "探索 Kiri Universe，发现最新作品，在 X 关注动态，访问 Fantia，并加入粉丝社区。",
      socialDescription: "进入 Kiri 的作品、故事与粉丝社区。",
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
      gallery: "画廊",
      news: "动态",
      links: "链接",
    },
    hero: {
      eyebrow: "官方粉丝入口 · 2026",
      subtitle: "进入 Kiri 的作品、故事与粉丝社区。",
      poeticLine: "一扇通往非凡世界的静谧入口。",
      followX: "关注 X",
      visitFantia: "访问 Fantia",
      joinCommunity: "加入社区",
      imageAlt: "宇宙之门前的 Kiri 主视觉",
    },
    about: {
      eyebrow: "01 · 关于",
      heading: "About Kiri Universe",
      body: "Kiri Universe 是围绕 Kiri 展开的创作世界，包含角色设定、插画、故事、限定内容以及粉丝社区。这里是进入 Kiri 世界的官方入口。",
    },
    gallery: {
      eyebrow: "02 · 精选作品",
      heading: "Gallery",
      description:
        "Kiri 宇宙的六个片段——悬停在梦境与遥远星辰之间的瞬间。",
      expand: "查看大图 ↗",
      viewMore: "在 Fantia 查看更多",
      viewImage: "查看大图",
      modalLabel: "大图预览",
      closeModal: "关闭大图预览",
      items: [
        { src: gallerySources[0], alt: "月夜天文台中的 Kiri", label: "月夜天文台" },
        { src: gallerySources[1], alt: "水晶花园中的 Kiri", label: "水晶幻梦" },
        { src: gallerySources[2], alt: "霓虹雨夜中的 Kiri", label: "霓虹雨夜" },
        { src: gallerySources[3], alt: "星辰图书馆中的 Kiri", label: "星辰典藏" },
        { src: gallerySources[4], alt: "云海晨曦中的 Kiri", label: "云上海明" },
        { src: gallerySources[5], alt: "宇宙之门前的 Kiri", label: "星界之门" },
      ],
    },
    news: {
      eyebrow: "03 · 最新消息",
      heading: "Latest News",
      items: [
        { date: "2026.07", title: "Kiri Universe 网站正式公开", tag: "上线" },
        { date: "2026.07", title: "Fantia 发布新内容", tag: "Fantia" },
        { date: "2026.06", title: "粉丝社区开放", tag: "社区" },
      ],
    },
    links: {
      eyebrow: "04 · 保持联系",
      heading: "Choose Your Portal",
      description: "每一道入口，都通向 Kiri Universe 的不同侧面。",
      open: "打开",
      cards: {
        x: "查看最新动态、创作片段与即时消息。",
        fantia: "查看限定作品和完整内容，支持 Kiri 的持续创作。",
        community: "加入粉丝交流社区，分享你对 Kiri Universe 的喜爱。",
      },
    },
    faq: {
      eyebrow: "05 · 常见问题",
      headingLine1: "Questions,",
      headingLine2: "answered.",
      description: "关于内容、社区与更新的常见问题。",
      items: [
        {
          question: "Fantia 上有哪些内容？",
          answer:
            "Fantia 将发布完整插画、创作过程、角色设定与部分限定内容。具体内容会随创作计划持续更新。",
        },
        {
          question: "粉丝群主要用于什么？",
          answer:
            "粉丝群用于交流作品、分享最新消息，以及让喜欢 Kiri 的朋友们彼此认识。加入前请留意社群规则。",
        },
        {
          question: "网站内容多久更新一次？",
          answer:
            "网站会跟随重要作品和活动不定期更新；日常动态请优先关注 X，完整内容请访问 Fantia。",
        },
      ],
    },
    footer: {
      ariaLabel: "页脚链接",
      privacy: "隐私政策",
      copyright: "版权所有 © 2026 Kiri Universe",
      signoff: "诞生于群星之间。",
    },
  },
  ja: {
    metadata: {
      title: "Kiri Universe｜公式ファンポータル",
      description:
        "Kiri Universeを探索し、最新作品やXでの更新、Fantia限定コンテンツ、ファンコミュニティをお楽しみください。",
      socialDescription: "Kiriの作品、物語、ファンコミュニティへの入口。",
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
      gallery: "ギャラリー",
      news: "ニュース",
      links: "リンク",
    },
    hero: {
      eyebrow: "公式ファンポータル · 2026",
      subtitle: "Kiriの作品、物語、ファンコミュニティへ。",
      poeticLine: "まだ見ぬ世界へつながる、静かな入口。",
      followX: "Xをフォロー",
      visitFantia: "Fantiaを見る",
      joinCommunity: "コミュニティに参加",
      imageAlt: "星界の門に佇むKiriのメインビジュアル",
    },
    about: {
      eyebrow: "01 · Kiriについて",
      heading: "About Kiri Universe",
      body: "Kiri Universeは、Kiriを中心に広がる創作世界です。キャラクター設定、イラスト、物語、限定コンテンツ、そしてファンコミュニティで構成されています。ここはKiriの世界へ入るための公式ポータルです。",
    },
    gallery: {
      eyebrow: "02 · セレクテッドワークス",
      heading: "Gallery",
      description:
        "夢と遥かな星々のあいだに浮かぶ、Kiri Universeの6つの情景。",
      expand: "拡大表示 ↗",
      viewMore: "Fantiaでもっと見る",
      viewImage: "拡大画像を表示",
      modalLabel: "画像プレビュー",
      closeModal: "画像プレビューを閉じる",
      items: [
        { src: gallerySources[0], alt: "月夜の天文台にいるKiri", label: "月夜の天文台" },
        { src: gallerySources[1], alt: "水晶庭園にいるKiri", label: "水晶の夢" },
        { src: gallerySources[2], alt: "ネオンの雨の中にいるKiri", label: "ネオンレイン" },
        { src: gallerySources[3], alt: "星の図書館にいるKiri", label: "星空の書庫" },
        { src: gallerySources[4], alt: "雲海の夜明けにいるKiri", label: "雲上の夜明け" },
        { src: gallerySources[5], alt: "宇宙の門の前にいるKiri", label: "星界の門" },
      ],
    },
    news: {
      eyebrow: "03 · お知らせ",
      heading: "Latest News",
      items: [
        { date: "2026.07", title: "Kiri Universe公式サイト公開", tag: "公開" },
        { date: "2026.07", title: "Fantiaに新コンテンツを公開", tag: "Fantia" },
        { date: "2026.06", title: "ファンコミュニティオープン", tag: "コミュニティ" },
      ],
    },
    links: {
      eyebrow: "04 · つながる",
      heading: "Choose Your Portal",
      description: "それぞれの入口から、Kiri Universeの異なる表情へ。",
      open: "開く",
      cards: {
        x: "最新情報や制作中の一コマをチェック。",
        fantia: "限定作品とフルコンテンツで、Kiriの創作を応援。",
        community: "ファンコミュニティに参加して、Kiri Universeへの想いを共有。",
      },
    },
    faq: {
      eyebrow: "05 · FAQ",
      headingLine1: "Questions,",
      headingLine2: "answered.",
      description: "コンテンツ、コミュニティ、更新についてのよくある質問。",
      items: [
        {
          question: "Fantiaではどんなコンテンツが見られますか？",
          answer:
            "完成イラスト、制作過程、キャラクター設定、一部の限定コンテンツを公開します。内容は制作スケジュールに合わせて随時更新されます。",
        },
        {
          question: "ファンコミュニティは何のための場所ですか？",
          answer:
            "作品について語り合い、最新情報を共有し、Kiriを好きな方同士で交流するための場所です。参加前にコミュニティルールをご確認ください。",
        },
        {
          question: "サイトはどのくらいの頻度で更新されますか？",
          answer:
            "重要な作品やイベントに合わせて不定期に更新します。日々の情報はX、完全版コンテンツはFantiaをご覧ください。",
        },
      ],
    },
    footer: {
      ariaLabel: "フッターリンク",
      privacy: "プライバシーポリシー",
      copyright: "Copyright © 2026 Kiri Universe",
      signoff: "星々のあいだで生まれました。",
    },
  },
  en: {
    metadata: {
      title: "Kiri Universe | Official Fan Portal",
      description:
        "Explore Kiri Universe, discover the latest works, follow updates on X, visit Fantia, and join the fan community.",
      socialDescription: "Enter Kiri's world of art, stories, and community.",
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
      gallery: "Gallery",
      news: "News",
      links: "Links",
    },
    hero: {
      eyebrow: "Official fan portal · 2026",
      subtitle: "Enter Kiri's world of art, stories, and community.",
      poeticLine: "A quiet portal to somewhere extraordinary.",
      followX: "Follow on X",
      visitFantia: "Visit Fantia",
      joinCommunity: "Join Community",
      imageAlt: "Kiri standing before an astral portal",
    },
    about: {
      eyebrow: "01 · About",
      heading: "About Kiri Universe",
      body: "Kiri Universe is a creative world built around Kiri, bringing together character lore, illustrations, stories, exclusive content, and a fan community. This is the official gateway into Kiri's world.",
    },
    gallery: {
      eyebrow: "02 · Selected works",
      heading: "Gallery",
      description:
        "Fragments of Kiri's universe — six moments suspended between dreams and distant stars.",
      expand: "Expand ↗",
      viewMore: "View More on Fantia",
      viewImage: "View full image",
      modalLabel: "Image preview",
      closeModal: "Close image preview",
      items: [
        { src: gallerySources[0], alt: "Kiri in a moonlit observatory", label: "Moonlit Observatory" },
        { src: gallerySources[1], alt: "Kiri in a crystal garden", label: "Crystal Reverie" },
        { src: gallerySources[2], alt: "Kiri in a neon-lit rainstorm", label: "Neon Rain" },
        { src: gallerySources[3], alt: "Kiri in a celestial library", label: "Celestial Archive" },
        { src: gallerySources[4], alt: "Kiri at dawn above the clouds", label: "Dawn Above Clouds" },
        { src: gallerySources[5], alt: "Kiri before an astral portal", label: "Astral Gate" },
      ],
    },
    news: {
      eyebrow: "03 · Dispatches",
      heading: "Latest News",
      items: [
        { date: "2026.07", title: "Kiri Universe website officially launched", tag: "Launch" },
        { date: "2026.07", title: "New content published on Fantia", tag: "Fantia" },
        { date: "2026.06", title: "Fan community is now open", tag: "Community" },
      ],
    },
    links: {
      eyebrow: "04 · Stay connected",
      heading: "Choose Your Portal",
      description: "Each portal reveals a different side of Kiri Universe.",
      open: "Open",
      cards: {
        x: "See the latest updates, work-in-progress glimpses, and announcements.",
        fantia: "Discover exclusive works and full content while supporting Kiri's creations.",
        community: "Join fellow fans and share your love for Kiri Universe.",
      },
    },
    faq: {
      eyebrow: "05 · FAQ",
      headingLine1: "Questions,",
      headingLine2: "answered.",
      description: "Common questions about the content, community, and updates.",
      items: [
        {
          question: "What can I find on Fantia?",
          answer:
            "Fantia features finished illustrations, behind-the-scenes creative work, character notes, and selected exclusive content. New releases follow Kiri's creative schedule.",
        },
        {
          question: "What is the fan community for?",
          answer:
            "It is a place to discuss the artwork, share updates, and meet other people who enjoy Kiri. Please review the community guidelines before joining.",
        },
        {
          question: "How often is the website updated?",
          answer:
            "The site is updated around important releases and events. Follow X for everyday updates and visit Fantia for complete content.",
        },
      ],
    },
    footer: {
      ariaLabel: "Footer links",
      privacy: "Privacy Policy",
      copyright: "Copyright © 2026 Kiri Universe",
      signoff: "Made somewhere between stars.",
    },
  },
};

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
