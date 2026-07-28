# 林屿手记

一个可直接打开、也可部署到 GitHub Pages 的个人中文博客。

## 本地预览

直接打开 `index.html`，或在当前目录运行：

```powershell
python -m http.server 4173
```

然后访问 `http://localhost:4173`。

## 修改内容

- 在 `app.js` 顶部的 `siteConfig` 中修改站点名称、作者和简介。
- 在 `app.js` 的 `articles` 数组中添加、删除或编辑文章。
- 在 `index.html` 中修改随记、关于介绍和社交链接。
- 在 `styles.css` 的 `:root` 中修改整套颜色。

## 重新生成插画

需要 Pillow：

```powershell
python tools/generate_assets.py
```
