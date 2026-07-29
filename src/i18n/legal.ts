import type { Locale } from "./dictionaries";
import { siteConfig } from "@/config/site";

export interface LegalDocument {
  title: string;
  eyebrow: string;
  intro: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
}

export interface LegalDictionary {
  backHome: string;
  lastUpdated: string;
  privacy: LegalDocument;
  terms: LegalDocument;
}

export const legalDictionaries: Record<Locale, LegalDictionary> = {
  zh: {
    backHome: "返回首页",
    lastUpdated: "最后更新",
    privacy: {
      title: "隐私政策",
      eyebrow: "Legal · Privacy",
      intro:
        "本政策说明 Kiri Universe 在运营本网站时如何处理访客信息。本网站目前不提供账户注册、站内购买或站内联系表单。",
      sections: [
        {
          heading: "1. 运营者与联系方式",
          paragraphs: [
            `本网站由 ${siteConfig.operatorName} 运营。有关隐私、数据处理或商务合作的问题，请联系 ${siteConfig.businessEmail}；写真集购买咨询请联系 ${siteConfig.purchaseEmail}。`,
          ],
        },
        {
          heading: "2. 可能处理的信息",
          paragraphs: [
            "访问网站时，托管服务可能自动记录 IP 地址、浏览器类型、设备信息、访问时间、来源页面和请求记录等技术信息。",
            "当你切换语言时，网站会保存名为 kiri-locale 的必要 Cookie，用于记住中文、日文或英文偏好。",
            "当你通过邮箱联系我们时，我们会收到你主动提供的姓名、邮箱地址、所属组织、购买或合作内容及邮件中的其他信息。",
          ],
        },
        {
          heading: "3. 使用目的",
          paragraphs: [
            "相关信息仅用于提供和保护网站、排查故障、记住语言偏好、回复咨询、评估商务合作以及履行适用法律义务。",
          ],
        },
        {
          heading: "4. 托管与第三方服务",
          paragraphs: [
            "本网站计划通过 Vercel 等托管服务提供，其服务商可能依据自身政策处理必要的技术日志。",
            "网站包含前往 X、Fantia 和 Discord 的外部链接。访问外部服务后，信息处理由对应平台的隐私政策和条款约束，本网站不控制其处理方式。",
          ],
        },
        {
          heading: "5. Cookie 与分析工具",
          paragraphs: [
            "目前本站仅使用保存语言偏好的必要 Cookie，不使用广告 Cookie，也未启用访客行为分析工具。",
            "如果未来加入分析、广告或嵌入式第三方内容，本政策将相应更新，并在适用法律要求时提供同意或拒绝机制。",
          ],
        },
        {
          heading: "6. 保存、安全与披露",
          paragraphs: [
            "我们仅在实现上述目的所需期间保存联系信息，并采取合理措施防止未经授权的访问、泄露或滥用。",
            "除为提供服务所必需、取得本人同意或法律要求外，我们不会出售个人信息，也不会向无关第三方披露。",
          ],
        },
        {
          heading: "7. 你的权利",
          paragraphs: [
            `你可以通过 ${siteConfig.businessEmail} 申请查询、更正或删除你通过邮件提供的信息。我们会根据适用法律和合理身份核验要求处理。`,
          ],
        },
        {
          heading: "8. 未成年人",
          paragraphs: [
            "本站不以主动收集未成年人个人信息为目的。未成年人在通过邮件提供个人信息前，应取得监护人同意。",
          ],
        },
        {
          heading: "9. 政策更新",
          paragraphs: [
            "本政策可能随网站功能、服务商或适用要求变化而更新。重要变更将在本页面发布，并更新页面顶部日期。",
          ],
        },
      ],
    },
    terms: {
      title: "使用条款",
      eyebrow: "Legal · Terms",
      intro:
        "访问或使用 Kiri Universe 网站即表示你同意以下条款。本网站主要提供作品展示、官方信息及外部平台入口。",
      sections: [
        {
          heading: "1. 网站用途",
          paragraphs: [
            "本站用于介绍 Kiri Universe、展示写真集封面与精选作品、发布动态，并提供写真集购买咨询以及前往 X、Fantia、Discord 的入口。",
          ],
        },
        {
          heading: "2. 知识产权",
          paragraphs: [
            "除另有说明外，本站原创文字、角色设定、插画、页面设计及相关内容的权利归运营者或相应权利人所有。",
            "X、Fantia、Discord 的名称和标识属于各自权利人；本站使用这些标识仅用于指示对应服务，不表示平台对本站的赞助或认可。",
            "未经许可，不得复制、重新发布、销售、训练模型、冒充官方发布或将本站内容用于商业用途。",
          ],
        },
        {
          heading: "3. 禁止行为",
          paragraphs: [
            "不得干扰网站运行、尝试未经授权访问、散布恶意代码、侵犯他人权利、骚扰创作者或社区成员，或以误导方式使用本站名称和内容。",
          ],
        },
        {
          heading: "4. 写真集咨询与外部服务",
          paragraphs: [
            "X、Fantia 和 Discord 由第三方运营。账号、付款、订阅、内容访问、退款和社区功能均受相应平台条款约束。",
            "本站目前不提供在线结账，也不在 Fantia 销售写真集。写真集购买通过邮件或 Discord 私聊发起，库存、价格、付款、线下取货或寄送方式及其他最终条件由双方另行确认。",
            "Fantia 上的会员内容和其他交易仍适用 Fantia 的规则与支持流程。",
          ],
        },
        {
          heading: "5. Discord 社区",
          paragraphs: [
            "加入 Discord 后还需遵守服务器规则、Discord 服务条款及社区准则。运营者可为保护社区安全而限制或终止成员访问。",
          ],
        },
        {
          heading: "6. 商务联系",
          paragraphs: [
            "发送商务邮件不构成合作承诺、代理关系或合同。合作仅在双方另行确认具体条件并完成必要书面约定后成立。",
          ],
        },
        {
          heading: "7. 免责声明",
          paragraphs: [
            "我们努力保持信息准确和网站可用，但不保证内容始终完整、无误或不中断。对于第三方服务、外部链接及其内容，我们不承担控制责任。",
          ],
        },
        {
          heading: "8. 条款变更与适用",
          paragraphs: [
            "条款可能随网站功能和运营需要更新。变更后的条款自发布之日起适用。争议应首先通过善意协商解决，并遵守运营者所在地及其他适用法律。",
          ],
        },
      ],
    },
  },
  ja: {
    backHome: "ホームに戻る",
    lastUpdated: "最終更新",
    privacy: {
      title: "プライバシーポリシー",
      eyebrow: "Legal · Privacy",
      intro:
        "本ポリシーは、Kiri Universeが本サイトの運営に際して閲覧者の情報をどのように取り扱うかを説明するものです。現在、本サイトにアカウント登録、サイト内決済、問い合わせフォームはありません。",
      sections: [
        {
          heading: "1. 運営者・お問い合わせ先",
          paragraphs: [
            `本サイトは${siteConfig.operatorName}が運営しています。プライバシー、情報の取扱い、またはビジネスに関するお問い合わせは ${siteConfig.businessEmail}、写真集の購入相談は ${siteConfig.purchaseEmail} までご連絡ください。`,
          ],
        },
        {
          heading: "2. 取り扱う可能性のある情報",
          paragraphs: [
            "サイトへのアクセス時、ホスティング事業者がIPアドレス、ブラウザや端末の情報、アクセス日時、参照元、リクエストログ等の技術情報を自動的に記録する場合があります。",
            "言語を切り替えた際、中文・日本語・Englishの選択を記憶するため、kiri-localeという必須Cookieを保存します。",
            "メールでご連絡いただいた場合、氏名、メールアドレス、所属、購入または相談内容、その他メールに記載された情報を受領します。",
          ],
        },
        {
          heading: "3. 利用目的",
          paragraphs: [
            "情報は、サイトの提供と保護、不具合対応、言語設定の保存、お問い合わせへの返信、ビジネス相談の検討、法令上の義務への対応に利用します。",
          ],
        },
        {
          heading: "4. ホスティング・外部サービス",
          paragraphs: [
            "本サイトはVercel等のホスティングサービスを利用する予定であり、当該事業者が自らのポリシーに基づき必要な技術ログを処理する場合があります。",
            "本サイトにはX、Fantia、Discordへの外部リンクがあります。移動後の情報の取扱いには各サービスのポリシーと規約が適用されます。",
          ],
        },
        {
          heading: "5. Cookie・アクセス解析",
          paragraphs: [
            "現在は言語設定に必要なCookieのみを使用し、広告Cookieやアクセス解析ツールは使用していません。",
            "将来、解析、広告、外部埋め込みを追加する場合は本ポリシーを更新し、必要に応じて同意または拒否の仕組みを提供します。",
          ],
        },
        {
          heading: "6. 保存・安全管理・第三者提供",
          paragraphs: [
            "お問い合わせ情報は目的に必要な期間のみ保存し、不正アクセス、漏えい、悪用を防ぐため合理的な措置を講じます。",
            "サービス提供に必要な場合、本人の同意がある場合、または法令に基づく場合を除き、個人情報を販売または無関係な第三者へ提供しません。",
          ],
        },
        {
          heading: "7. ご本人の権利",
          paragraphs: [
            `${siteConfig.businessEmail} 宛に、メールで提供した情報の確認、訂正、削除をご依頼いただけます。適用法令と合理的な本人確認に従って対応します。`,
          ],
        },
        {
          heading: "8. 未成年者",
          paragraphs: [
            "本サイトは未成年者の個人情報を積極的に収集することを目的としていません。未成年者がメールで情報を提供する際は、保護者の同意を得てください。",
          ],
        },
        {
          heading: "9. ポリシーの変更",
          paragraphs: [
            "サイト機能、利用サービス、適用される要件の変更に応じて本ポリシーを更新することがあります。重要な変更は本ページに掲載します。",
          ],
        },
      ],
    },
    terms: {
      title: "利用規約",
      eyebrow: "Legal · Terms",
      intro:
        "Kiri Universeウェブサイトへのアクセスまたは利用により、以下の条件に同意したものとみなされます。本サイトは主に作品、公式情報、外部サービスへの入口を提供します。",
      sections: [
        {
          heading: "1. 本サイトの目的",
          paragraphs: [
            "Kiri Universeの紹介、写真集の表紙と作品の展示、お知らせの掲載、写真集の購入相談、X・Fantia・Discordへの導線を提供します。",
          ],
        },
        {
          heading: "2. 知的財産権",
          paragraphs: [
            "別途記載がない限り、文章、キャラクター設定、イラスト、デザイン等の権利は運営者または各権利者に帰属します。",
            "X、Fantia、Discordの名称およびロゴは各権利者に帰属し、サービスを示す目的でのみ使用しています。各社による後援や承認を示すものではありません。",
            "許可なく複製、再配布、販売、モデル学習、公式を装った公開、商用利用を行うことは禁止します。",
          ],
        },
        {
          heading: "3. 禁止事項",
          paragraphs: [
            "サイト運営の妨害、不正アクセス、悪意あるコードの送信、第三者の権利侵害、クリエイターやコミュニティへの嫌がらせ、名称やコンテンツの誤解を招く利用を禁止します。",
          ],
        },
        {
          heading: "4. 写真集の購入相談・外部サービス",
          paragraphs: [
            "X、Fantia、Discordは第三者が運営しています。アカウント、支払い、購読、コンテンツ閲覧、返金、コミュニティ機能には各サービスの規約が適用されます。",
            "本サイトにはオンライン決済がなく、Fantiaで写真集を販売していません。写真集の購入はメールまたはDiscordのプライベートメッセージから相談し、在庫、価格、支払い、対面受け取りまたは発送方法等を個別に確認します。",
            "Fantia上のメンバー向けコンテンツとその他の取引には、Fantiaのルールとサポート手続が適用されます。",
          ],
        },
        {
          heading: "5. Discordコミュニティ",
          paragraphs: [
            "Discord参加後は、サーバールール、Discord利用規約、コミュニティガイドラインにも従う必要があります。安全な運営のためアクセスを制限または終了する場合があります。",
          ],
        },
        {
          heading: "6. ビジネスのお問い合わせ",
          paragraphs: [
            "メールの送信のみでは契約、代理関係、協業の合意は成立しません。具体的条件を双方が確認し、必要な書面を整えた時点で成立します。",
          ],
        },
        {
          heading: "7. 免責事項",
          paragraphs: [
            "情報の正確性とサイトの安定提供に努めますが、常に完全、正確、または中断がないことを保証しません。外部サービスやリンク先の内容を管理するものではありません。",
          ],
        },
        {
          heading: "8. 規約の変更・適用",
          paragraphs: [
            "サイト機能や運営上の必要に応じて規約を変更できます。変更後の規約は掲載時から適用されます。紛争はまず誠実に協議し、運営者所在地その他の適用法令に従います。",
          ],
        },
      ],
    },
  },
  en: {
    backHome: "Back to home",
    lastUpdated: "Last updated",
    privacy: {
      title: "Privacy Policy",
      eyebrow: "Legal · Privacy",
      intro:
        "This policy explains how Kiri Universe handles visitor information when operating this website. The site currently has no account registration, on-site purchases, or contact form.",
      sections: [
        {
          heading: "1. Operator and contact",
          paragraphs: [
            `This website is operated by ${siteConfig.operatorName}. For privacy, data handling, or business questions, contact ${siteConfig.businessEmail}; for photo book purchase inquiries, contact ${siteConfig.purchaseEmail}.`,
          ],
        },
        {
          heading: "2. Information that may be processed",
          paragraphs: [
            "When you visit, the hosting provider may automatically record technical information such as IP address, browser and device details, access time, referring page, and request logs.",
            "When you change languages, the site stores a necessary cookie named kiri-locale to remember your Chinese, Japanese, or English preference.",
            "When you email us, we receive the name, email address, organization, purchase or project details, and other information you choose to include.",
          ],
        },
        {
          heading: "3. Purposes",
          paragraphs: [
            "Information is used only to provide and secure the site, troubleshoot issues, remember language preferences, respond to inquiries, assess business opportunities, and meet applicable legal obligations.",
          ],
        },
        {
          heading: "4. Hosting and third-party services",
          paragraphs: [
            "The site is intended to be hosted through services such as Vercel, whose providers may process necessary technical logs under their own policies.",
            "The site links to X, Fantia, and Discord. Once you leave this site, the relevant platform's privacy policy and terms govern its handling of information.",
          ],
        },
        {
          heading: "5. Cookies and analytics",
          paragraphs: [
            "The site currently uses only the necessary language-preference cookie. It does not use advertising cookies or visitor analytics tools.",
            "If analytics, advertising, or embedded third-party content is added later, this policy will be updated and consent controls will be provided where required.",
          ],
        },
        {
          heading: "6. Retention, security, and disclosure",
          paragraphs: [
            "Inquiry information is retained only as long as reasonably needed for the stated purpose, with reasonable safeguards against unauthorized access, disclosure, or misuse.",
            "We do not sell personal information or disclose it to unrelated third parties except where needed to provide the service, with consent, or as required by law.",
          ],
        },
        {
          heading: "7. Your rights",
          paragraphs: [
            `You may contact ${siteConfig.businessEmail} to request access, correction, or deletion of information you supplied by email. Requests are handled under applicable law and reasonable identity verification.`,
          ],
        },
        {
          heading: "8. Children",
          paragraphs: [
            "The site is not intended to actively collect personal information from children. Minors should obtain a parent or guardian's consent before sending personal information by email.",
          ],
        },
        {
          heading: "9. Policy changes",
          paragraphs: [
            "This policy may be updated as site features, providers, or applicable requirements change. Material changes will be posted here with a revised date.",
          ],
        },
      ],
    },
    terms: {
      title: "Terms of Use",
      eyebrow: "Legal · Terms",
      intro:
        "By accessing or using the Kiri Universe website, you agree to these terms. The site primarily presents creative work, official information, and links to external platforms.",
      sections: [
        {
          heading: "1. Purpose",
          paragraphs: [
            "The site introduces Kiri Universe, displays photo book covers and selected works, publishes updates, accepts photo book inquiries, and provides access to X, Fantia, and Discord.",
          ],
        },
        {
          heading: "2. Intellectual property",
          paragraphs: [
            "Unless otherwise stated, original text, character concepts, illustrations, page design, and related materials belong to the operator or their respective rights holders.",
            "The names and marks of X, Fantia, and Discord belong to their respective owners. They are used only to identify those services and do not imply sponsorship or endorsement.",
            "You may not copy, republish, sell, train models on, impersonate official releases of, or commercially exploit site content without permission.",
          ],
        },
        {
          heading: "3. Prohibited conduct",
          paragraphs: [
            "You may not disrupt the site, attempt unauthorized access, distribute malicious code, infringe others' rights, harass the creator or community, or use the site's identity or content misleadingly.",
          ],
        },
        {
          heading: "4. Photo book inquiries and external services",
          paragraphs: [
            "X, Fantia, and Discord are operated by third parties. Accounts, payments, subscriptions, content access, refunds, and community features are governed by each platform's terms.",
            "This website has no online checkout, and photo books are not sold through Fantia. Purchase inquiries begin by email or private Discord communication; availability, price, payment, in-person pickup or shipping, and other final terms are confirmed separately.",
            "Member content and other transactions on Fantia remain subject to Fantia's rules and support procedures.",
          ],
        },
        {
          heading: "5. Discord community",
          paragraphs: [
            "After joining Discord, you must also follow the server rules, Discord Terms of Service, and Community Guidelines. Access may be limited or ended to protect community safety.",
          ],
        },
        {
          heading: "6. Business inquiries",
          paragraphs: [
            "Sending an inquiry does not create a contract, agency relationship, or collaboration commitment. A project begins only after both parties confirm the specific terms and complete any necessary written agreement.",
          ],
        },
        {
          heading: "7. Disclaimer",
          paragraphs: [
            "We work to keep information accurate and the site available, but do not guarantee that all content is complete, error-free, or uninterrupted. We do not control third-party services or linked content.",
          ],
        },
        {
          heading: "8. Changes and applicable rules",
          paragraphs: [
            "These terms may be updated as the site or its operation changes. Revised terms apply when posted. Disputes should first be addressed in good faith and remain subject to the operator's local and other applicable laws.",
          ],
        },
      ],
    },
  },
};

export function getLegalDictionary(locale: Locale): LegalDictionary {
  return legalDictionaries[locale];
}
