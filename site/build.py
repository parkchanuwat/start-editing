import re, pathlib, sys

ROOT = pathlib.Path(__file__).parent
OUT = ROOT.parent / "docs" / "index.html"
PAGES = ["first-video", "project-media", "premiere-vs-ae", "system-requirements", "workspace-tour", "sequence", "monitors", "timeline", "markers", "effects-keyframes", "mogrt", "object-mask", "color-mode", "captions", "audio", "presets-resolution", "export", "ae-comp-layers", "ae-keyframes", "ae-text", "ae-render", "whats-new", "shortcuts", "glossary"]
LANGS = ["th", "en"]
NOWRAP_TH = ["โปรเจกต์", "เอฟเฟกต์", "เฟรมเรต", "พิกเซล", "แอนิเมชัน", "เวอร์ชัน", "ทรานซิชัน", "เทมเพลต", "คีย์ลัด"]


def thai_nowrap(html: str) -> str:
    # only touch text between tags, never attributes
    parts = re.split(r"(<[^>]+>)", html)
    out = []
    for p in parts:
        if not p.startswith("<"):
            for w in NOWRAP_TH:
                p = p.replace(w, f'<span class="nw">{w}</span>')
        out.append(p)
    return "".join(out)


def main():
    shell = (ROOT / "shell.html").read_text(encoding="utf-8")
    css = (ROOT / "style.css").read_text(encoding="utf-8")
    js = (ROOT / "app.js").read_text(encoding="utf-8")
    demos2 = (ROOT / "demos2.js").read_text(encoding="utf-8") + "\n" + (ROOT / "demos3.js").read_text(encoding="utf-8")
    marker = "/* ---------- shell ---------- */"
    assert marker in js
    js = js.replace(marker, demos2 + "\n" + marker)
    tpls = []
    missing = []
    for lang in LANGS:
        for pid in PAGES:
            f = ROOT / "content" / lang / f"{pid}.html"
            if not f.exists():
                missing.append(str(f))
                continue
            body = f.read_text(encoding="utf-8").strip()
            if f'data-demo="{pid}"' not in body:
                sys.exit(f"{f}: missing demo placeholder")
            if lang == "th":
                body = thai_nowrap(body)
            tpls.append(f'<template id="t-{lang}-{pid}">\n{body}\n</template>')
    out = shell.replace("/*CSS*/", css).replace("<!--TEMPLATES-->", "\n".join(tpls)).replace("/*JS*/", js)
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(out, encoding="utf-8")
    print("built", len(tpls), "pages,", len(out) // 1024, "KB ->", OUT)
    if missing:
        print("missing:", *missing, sep="\n  ")


main()
