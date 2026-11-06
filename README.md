# 红苹果短剧 SEO 落地单页

独立、可维护、SEO 友好的短剧 App 落地页。

## 项目结构

```
hongpingguo-landing/
├── index.html          # 主页面
├── css/
│   └── styles.css      # 全部样式
├── js/
│   └── main.js         # 交互与数据
├── assets/
│   └── images/         # 预留本地图片目录
└── README.md
```

## 设计说明

- **视觉风格**：深色主题 + 红色苹果强调色，参考主流短剧官网的首屏浮动卡片与卡片网格节奏
- **布局模块**：固定导航 → Hero 首屏 → 热播推荐 → 分类筛选 → 功能亮点 → 下载区 → 页脚
- **移动端**：响应式网格、汉堡菜单、底部固定下载 CTA
- **SEO**：语义化 HTML、meta/OG 标签、JSON-LD、图片 alt、canonical

## 本地预览

直接用浏览器打开 `index.html`，或使用本地服务器：

```bash
# Python
python -m http.server 8080

# Node
npx serve .
```

访问 http://localhost:8080

## 自定义

1. **短剧数据**：编辑 `js/main.js` 中的 `dramas` 数组（标题、集数、标签、分类、封面图 URL）
2. **封面图**：当前使用 Unsplash 免费可商用图片。可替换为真实作品封面（注意版权）
3. **下载链接**：在 `index.html` 中找到 `iosBtn` / `androidBtn`，填入真实商店链接
4. **域名与 SEO**：修改 `canonical`、`og:url` 等 meta

## 技术栈

- 纯 HTML5 + CSS3 + 原生 JavaScript
- 无第三方框架依赖
- 字体：Google Fonts Noto Sans SC

## 免责声明

本项目为前端展示示例页面，非「红苹果短剧」官方运营站点。实际下载请认准官方应用商店渠道。
