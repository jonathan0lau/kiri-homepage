# Kiri Universe

Kiri Universe 的多语言单页官方粉丝入口。项目使用 Next.js、TypeScript、Tailwind CSS 与 Framer Motion 构建，支持中文、日文、英文、响应式布局，并可直接部署至 Vercel。

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

- 外部链接：编辑 `src/config/site.ts` 中的 `externalLinks`。
- 网站名称：编辑 `src/config/site.ts` 中的 `siteConfig`。
- 三语文案、About、画廊、新闻和 FAQ：编辑 `src/i18n/dictionaries.ts` 对应的 `zh`、`ja`、`en` 内容。
- 画廊图片：将图片放入 `public/images/`，并更新 `src/i18n/dictionaries.ts` 中三种语言的图片说明。推荐使用竖版图片，并为每种语言填写准确的 `alt`。
- Hero 图片：替换 `public/images/hero-kiri.jpg`，保持同名即可。
- 社交分享图：替换 `public/og.jpg`。
- 正式域名：部署时设置 `NEXT_PUBLIC_SITE_URL`，用于 sitemap、robots 与社交分享元数据。

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
src/i18n/        三种语言的全部页面文案与内容数据
src/proxy.ts     语言识别及根地址跳转
public/images/   本地图片素材
```

所有外部链接都会在新标签页打开，并带有 `noopener noreferrer` 安全属性。
