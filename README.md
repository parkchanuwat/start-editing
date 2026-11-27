# เริ่มตัดต่อ / Start Editing

คู่มือ Adobe Premiere และ After Effects สำหรับมือใหม่ มีทั้งภาษาไทยและอังกฤษ อ้างอิงเวอร์ชัน 27.0 (พ.ย. 2569)

A beginner's guide to Adobe Premiere and After Effects in Thai and English, written for version 27.0 (November 2026).

> Not an official Adobe site. Adobe, Premiere and After Effects are trademarks of Adobe.

## Pages

| Section | Page id |
|---|---|
| Start here | `first-video`, `project-media` |
| Premiere basics | `sequence`, `monitors`, `timeline`, `markers` |
| Effects and graphics | `effects-keyframes`, `mogrt`, `object-mask` |
| Color, audio and captions | `color-mode`, `captions` |
| Export | `presets-resolution` |

Each page has an interactive demo, a version badge, steps, common mistakes, notes for older versions, and links to the Adobe sources. Pages are addressed as `#th-<id>` or `#en-<id>`.

## Structure

```
site/
  content/th/<id>.html   Thai page content
  content/en/<id>.html   English page content
  shell.html             page layout, shared SVG scenes
  style.css              styles
  app.js                 navigation, routing, demos
  demos2.js              demos for first-video, project-media, timeline, captions
  build.py               bundles everything into docs/index.html
docs/
  index.html             built single-file site (served by GitHub Pages)
```

## Build

```
python3 site/build.py
```

This writes `docs/index.html`. Commit the rebuilt file together with your content changes.

## Publish with GitHub Pages

Settings › Pages › Build and deployment › Deploy from a branch › `main` / `docs`.

## Adding a page

1. Write `site/content/th/<id>.html` and `site/content/en/<id>.html`, each with a `<div class="demo" data-demo="<id>"></div>` placeholder.
2. Add the id to `NAV` in `site/app.js` and to `PAGES` in `site/build.py`.
3. Add a demo function `D['<id>']` in `site/app.js` or `site/demos2.js`.
4. Run the build.

## Keeping it current

Every page shows the Premiere version it was written for and its update date. After each Premiere release, read Adobe's What's new and release notes, then update the pages whose badge is older.
