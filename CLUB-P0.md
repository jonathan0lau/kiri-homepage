# Kiri Club P0 homepage

沿用 Next.js 16；动态读取 Python 管理服务的公开 allowlist API。无会员个人信息或后台密钥进入前端。

## 本地配置

1. 在 kiri-bot 仓库按 docs/CLUB-P0.md 启动 club_admin.py。
2. 将 .env.club.example 复制为 .env.local 并填写真实值。CLUB_API_URL 只能配置在 Next.js 服务端环境，不加 NEXT_PUBLIC_ 前缀。
3. npm ci && npm run dev；默认入口跳转 /ja。

公开页面：/ja/events、/ja/events?history=1、/ja/events/:id、/ja/works、/ja/works/:id、/ja/series、/ja/series/:id、/ja/news、/ja/news/:id、/ja/membership。

旧 /products 和 /photo-books 跳转共享作品目录；/products.json 动态返回公开作品。不再通过手动复制 Bot 导出 JSON 更新这一目录。旧示例商品 ID 不会自动迁移为实际作品。

所有活动页面及首页强制动态渲染，fetch 使用 no-store。已打开页面每30秒刷新一次，回到浏览器标签页也刷新。关闭 Bot 不影响活动结束判断。管理 API 不可用时显示暂不可用，不回退成示例商品或过期活动。

后台的“时间无时区输入”按 Asia/Tokyo 解释，API 输出带 +09:00。页面将报名截止和结束分别处理；满员/取消/结束关闭报名入口，详情保留。未来取消的活动继续显示中止通知，结束后进入历史。

新 P0 运营页面以日文为主；原有中文/英文创作者介绍保留。自动翻译和三语分别编辑不在本轮实现范围。

## 生产

主页可以独立部署，Python API 必须有持久化磁盘、HTTPS，且能从 Next 服务端访问。图片直接读取创作者配置的公开 HTTPS 图片地址，不通过受限内容代理。不要缓存 /api/public/catalog；主页保持 dynamic/no-store，不配置覆盖其行为的 CDN 强制缓存规则。

后台用户名/密码与 Bot Token 只放 Python 服务，主页仅需公开目录 API 地址和真实邀请链接。

## 本机持久部署

用户级 systemd 示例位于 deploy/kiri-homepage.service，配置位于 ~/.config/kiri-club/homepage.env。本机端口13000。启动前先构建；管理后台端口18080。

仅局域网部署时，可将 CLUB_MEDIA_ORIGIN 设为本机管理服务的 HTTP origin，允许读取该来源的公开上传图片；其他来源仍需 HTTPS。外网环境继续使用 HTTPS，不配置此例外。
