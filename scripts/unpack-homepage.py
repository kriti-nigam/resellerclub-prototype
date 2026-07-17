#!/usr/bin/env python3
"""Unpack bundled homepage HTML into static files (no JSON bundle step)."""

import base64
import gzip
import json
import os
import re
import shutil

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BUNDLED = os.path.join(REPO, "index.bundled.html")
ASSETS_DIR = os.path.join(REPO, "site", "assets")
OUTPUT = os.path.join(REPO, "site", "homepage-unpacked.html")
TARGETS = [
    os.path.join(REPO, "index.html"),
    os.path.join(REPO, "ResellerClub Homepage.html"),
    os.path.join(REPO, "gh-pages-site", "index.html"),
    os.path.join(REPO, "gh-pages-site", "ResellerClub Homepage.html"),
]


def extract(content, tag):
    start = content.index(f'<script type="{tag}">')
    end = content.index("</script>", start)
    return json.loads(content[start + len(f'<script type="{tag}">'):end].strip())


def main():
    with open(BUNDLED) as f:
        content = f.read()

    manifest = extract(content, "__bundler/manifest")
    ext_resources = extract(content, "__bundler/ext_resources")
    template = extract(content, "__bundler/template")

    os.makedirs(ASSETS_DIR, exist_ok=True)

    mime_ext = {
        "image/jpeg": ".jpg",
        "image/png": ".png",
        "image/webp": ".webp",
        "image/svg+xml": ".svg",
        "font/woff2": ".woff2",
        "font/woff": ".woff",
        "application/font-woff2": ".woff2",
        "text/css": ".css",
    }

    uuid_to_path = {}
    for uuid, entry in manifest.items():
        data = base64.b64decode(entry["data"])
        suffix = mime_ext.get(entry.get("mime", ""), ".bin")
        filename = f"bundle-{uuid[:8]}{suffix}"
        path = os.path.join(ASSETS_DIR, filename)
        with open(path, "wb") as f:
            f.write(data)
        uuid_to_path[uuid] = f"site/assets/{filename}"

    resource_map = {
        item["id"]: uuid_to_path[item["uuid"]]
        for item in ext_resources
        if item["uuid"] in uuid_to_path
    }

    html = template
    for uuid, rel_path in uuid_to_path.items():
        html = html.replace(uuid, rel_path)

    resource_script = (
        "<script>window.__resources = "
        + json.dumps(resource_map)
        + ";</script>"
    )
    head = re.search(r"<head[^>]*>", html, re.I)
    if head:
        html = html[: head.end()] + resource_script + html[head.end() :]

    with open(OUTPUT, "w") as f:
        f.write(html)

    for target in TARGETS:
        shutil.copy2(OUTPUT, target)

    gh_assets = os.path.join(REPO, "gh-pages-site", "site", "assets")
    os.makedirs(gh_assets, exist_ok=True)
    for filename in os.listdir(ASSETS_DIR):
        if filename.startswith("bundle-") or filename.endswith(".js"):
            shutil.copy2(
                os.path.join(ASSETS_DIR, filename),
                os.path.join(gh_assets, filename),
            )

    print(f"Wrote static homepage to {len(TARGETS)} targets ({len(uuid_to_path)} assets).")


if __name__ == "__main__":
    main()
