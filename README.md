# Kiri Universe

Kiri Universe 的多语言原创 IP 门户。网站以角色 Kiri 的人设与写真集为核心，使用 Next.js、TypeScript、Tailwind CSS 与 Framer Motion 构建，支持中文、日文、英文、响应式布局，并可直接部署至 Vercel。

## 本地启动

需要 Node.js 20.9 或更高版本。

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

根地址会根据浏览器语言或上次选择自动进入对应页面，也可以直接访问：

- 中文：`http://localhost:3000/zh`
- 日文：`http://localhost:3000/ja`
- 英文：`http://localhost:3000/en`

## 构建与检查

```bash
npm run lint
npm run build
npm start
```

## 替换内容

- 外部链接：编辑 `src/config/site.ts` 中的 `externalLinks`。其中 Discord 默认使用 `https://discord.gg/your-invite-code` 占位地址，上线前必须替换为真实且不会过期的邀请链接。
- 商务邮箱、写真集购买邮箱与运营者名称：编辑 `src/config/site.ts` 中的 `businessEmail`、`purchaseEmail` 和 `operatorName`。当前邮箱都是占位地址，上线前必须替换。
- 网站名称和法律页面更新时间：编辑 `src/config/site.ts` 中的 `name` 和 `lastLegalUpdate`。
- 三语文案、Kiri 人设、写真集、画廊、新闻和 FAQ：编辑 `src/i18n/dictionaries.ts` 对应的 `zh`、`ja`、`en` 内容。新增写真集时，需要为三种语言分别补充 `photoBooks.items`，包括封面路径、册名、简介与购买状态。
- 三语隐私政策与使用条款：编辑 `src/i18n/legal.ts`。正式上线前应根据实际运营主体、所在地和使用的第三方服务进行法律审阅。
- 画廊图片：将图片放入 `public/images/`，并更新 `src/i18n/dictionaries.ts` 中三种语言的图片说明。推荐使用竖版图片，并为每种语言填写准确的 `alt`。
- Hero 图片：替换 `public/images/hero-kiri.jpg`，保持同名即可。
- 社交分享图：替换 `public/og.jpg`。
- 正式域名：部署时设置 `NEXT_PUBLIC_SITE_URL`，用于 sitemap、robots 与社交分享元数据。

## 写真集展示与购买

- 首页只展示 `photoBooks.items` 中的前三册。
- 完整目录页面位于 `/zh/photo-books`、`/ja/photo-books` 和 `/en/photo-books`。
- 网站不提供在线结账，写真集也不通过 Fantia 销售。
- 每册的“购买咨询”按钮会打开购买邮箱；完整目录页同时提供 Discord 咨询入口。
- 库存、价格、付款、线下取货或寄送方式由双方私下确认。

## 更新 Latest News

当前版本的新闻保存在 `src/i18n/dictionaries.ts` 的 `news.items` 中。每条新闻要同步修改中文、日文、英文三份内容，然后提交到 GitHub；如果 Vercel 已连接仓库，推送到生产分支后会自动发布。

适合低频更新的流程：

1. 发布者填写新闻标题、日期、平台标签和三语文案。
2. 通过 GitHub 网页编辑器建立分支和 Pull Request，或交给技术人员代为提交。
3. 在 Vercel Preview 检查三种语言。
4. 合并后自动上线。

如果发布者不是技术人员，并且预计每月或每次作品发布都更新，建议接入可视化内容管理系统（例如 Sanity 或 Contentful）。发布者可在后台直接新增、预览和定时发布新闻，网站通过 webhook 或按需重新验证更新，不需要技术部门逐条改代码。当前项目尚未接入 CMS。

## 部署到 Vercel

1. 将项目推送到 GitHub、GitLab 或 Bitbucket。
2. 在 Vercel 选择 **Add New → Project** 并导入仓库。
3. Framework Preset 选择 Next.js（通常会自动识别）。
4. 添加环境变量 `NEXT_PUBLIC_SITE_URL`，值为正式网站地址。
5. 点击 Deploy。后续推送会自动触发新部署。

也可安装 Vercel CLI 后运行 `vercel`，按提示完成部署。

## 主要目录

```text
src/app/[lang]/  中文、日文、英文页面入口及各语言 SEO
src/app/         全局样式、sitemap 与 robots
src/components/  各页面区块与交互组件
src/config/      网站基础信息及外部链接
src/i18n/        三种语言的世界观、页面文案、内容数据与法律文本
src/proxy.ts     语言识别及根地址跳转
public/brands/   来自各平台官方品牌资源的 SVG 与来源说明
public/images/   本地图片素材
```

所有外部链接都会在新标签页打开，并带有 `noopener noreferrer` 安全属性。
