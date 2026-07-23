# Kiri Universe

Kiri Universe 的单页官方粉丝入口。项目使用 Next.js、TypeScript、Tailwind CSS 与 Framer Motion 构建，支持响应式布局并可直接部署至 Vercel。

## 本地启动

需要 Node.js 20.9 或更高版本。

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

## 构建与检查

```bash
npm run lint
npm run build
npm start
```

## 替换内容

- 外部链接：编辑 `src/config/site.ts` 中的 `externalLinks`。
- 基础信息与 About 文案：编辑 `src/config/site.ts` 中的 `siteConfig`。
- 画廊图片：将图片放入 `public/images/`，并更新 `src/data/gallery.ts`。推荐使用竖版图片，并为每张图片填写准确的 `alt`。
- Hero 图片：替换 `public/images/hero-kiri.jpg`，保持同名即可。
- 新闻：编辑 `src/data/news.ts`。
- FAQ：编辑 `src/data/faq.ts`。
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
src/app/         页面入口、SEO、全局样式、sitemap 与 robots
src/components/  各页面区块与交互组件
src/config/      网站基础信息及外部链接
src/data/        Gallery、News 与 FAQ 数据
public/images/   本地图片素材
```

所有外部链接都会在新标签页打开，并带有 `noopener noreferrer` 安全属性。
