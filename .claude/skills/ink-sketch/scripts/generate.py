#!/usr/bin/env python3
"""
Generate ink-sketch illustrations with Google's Gemini flash image model.

The subject you pass is wrapped in a style prompt that describes the loose
hand-drawn black-ink look, and (by default) the bundled reference sheet is sent
along as a visual style anchor so outputs match it closely.

Usage
-----
  export GEMINI_API_KEY=...            # or GOOGLE_API_KEY
  python generate.py "an old gramophone" -o gramophone.png
  python generate.py "a cat asleep on a windowsill" -o cat.png --aspect 1:1
  python generate.py "a bicycle" --n 3 -o bike.png        # bike_1.png, bike_2.png...
  python generate.py "a lighthouse" --no-ref              # ignore the style image
  python generate.py --raw "literal prompt, no style wrapper" -o x.png
  python generate.py --list-models                        # discover image models

Model
-----
Defaults to a Gemini flash image model. Override with --model or the
GEMINI_IMAGE_MODEL env var to whichever image model your key can access
(e.g. gemini-3-flash-image, gemini-3-pro-image-preview, gemini-2.5-flash-image).
Run --list-models to see what's available on your key.

No third-party dependencies: standard library only.
"""

import argparse
import base64
import json
import mimetypes
import os
import sys
import urllib.error
import urllib.request

API_BASE = os.environ.get(
    "GEMINI_API_BASE", "https://generativelanguage.googleapis.com/v1beta"
)
DEFAULT_MODEL = os.environ.get("GEMINI_IMAGE_MODEL", "gemini-2.5-flash-image")

HERE = os.path.dirname(os.path.abspath(__file__))
DEFAULT_REF = os.path.normpath(os.path.join(HERE, "..", "assets", "style-reference.png"))

# The style contract. Keep this tight — it is what makes every output feel like
# the same hand. Edit here to tune the house style.
STYLE = (
    "A loose, hand-drawn black-ink brush-pen sketch. Single confident contour "
    "lines with a natural, slightly wobbly hand-drawn quality and rounded ends; "
    "varied line weight from thick brush strokes to thin details; a few gestural "
    "scribbles suggest texture (foliage, patterns, shading) rather than any solid "
    "fill. Pure black ink on a plain off-white paper background. Monochrome only: "
    "no color, no grey wash, no gradients, no photorealism. A single subject drawn "
    "as an isolated spot illustration, centered, surrounded by generous empty "
    "space, minimal and elegant, like a quick sketchbook doodle. Subject: "
)


def api_key():
    for var in ("GEMINI_API_KEY", "GOOGLE_API_KEY", "GOOGLE_GENAI_API_KEY"):
        if os.environ.get(var):
            return os.environ[var]
    sys.exit(
        "error: no API key found. Set GEMINI_API_KEY (or GOOGLE_API_KEY).\n"
        "Get one at https://aistudio.google.com/apikey"
    )


def post(url, payload):
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        url, data=data, headers={"Content-Type": "application/json"}, method="POST"
    )
    try:
        with urllib.request.urlopen(req, timeout=180) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", "replace")
        msg = body
        try:
            msg = json.loads(body)["error"]["message"]
        except Exception:
            pass
        if e.code == 404:
            msg += "\nTip: run  python generate.py --list-models  to find a valid image model."
        sys.exit(f"error: HTTP {e.code} from Gemini API\n{msg}")
    except urllib.error.URLError as e:
        sys.exit(f"error: could not reach the API ({e.reason})")


def list_models(key):
    url = f"{API_BASE}/models?key={key}&pageSize=200"
    try:
        with urllib.request.urlopen(url, timeout=60) as r:
            data = json.load(r)
    except urllib.error.HTTPError as e:
        sys.exit(f"error: HTTP {e.code}: {e.read().decode('utf-8', 'replace')}")
    print("Models available on your key (image-capable marked *):")
    for m in data.get("models", []):
        name = m.get("name", "").replace("models/", "")
        methods = m.get("supportedGenerationMethods", [])
        star = "*" if "image" in name.lower() else " "
        print(f"  {star} {name:40s} {','.join(methods)}")
    print("\nUse one with:  --model <name>   or   export GEMINI_IMAGE_MODEL=<name>")


def image_part(path):
    mime = mimetypes.guess_type(path)[0] or "image/png"
    with open(path, "rb") as f:
        b64 = base64.b64encode(f.read()).decode("ascii")
    return {"inline_data": {"mime_type": mime, "data": b64}}


def main():
    ap = argparse.ArgumentParser(description="Generate ink-sketch images via Gemini.")
    ap.add_argument("subject", nargs="?", help="what to draw, in plain words")
    ap.add_argument("-o", "--output", default="ink.png", help="output PNG path")
    ap.add_argument("--model", default=DEFAULT_MODEL, help=f"image model (default {DEFAULT_MODEL})")
    ap.add_argument("--n", type=int, default=1, help="how many images to request")
    ap.add_argument("--aspect", help="aspect ratio hint, e.g. 1:1, 16:9, 3:2")
    ap.add_argument("--ref", default=DEFAULT_REF, help="style reference image (default: bundled sheet)")
    ap.add_argument("--no-ref", action="store_true", help="do not send a style reference image")
    ap.add_argument("--raw", action="store_true", help="use subject verbatim; skip the style wrapper")
    ap.add_argument("--list-models", action="store_true", help="list models on your key and exit")
    args = ap.parse_args()

    key = api_key()
    if args.list_models:
        list_models(key)
        return
    if not args.subject:
        ap.error("give a subject to draw (or use --list-models)")

    prompt = args.subject if args.raw else STYLE + args.subject
    if args.aspect:
        prompt += f"  Aspect ratio {args.aspect}."

    parts = [{"text": prompt}]
    if not args.no_ref:
        if os.path.exists(args.ref):
            # Reference first, then the instruction to imitate it.
            parts = [
                image_part(args.ref),
                {"text": "Draw the subject in exactly the visual style of the reference image above. " + prompt},
            ]
        else:
            print(f"warning: style reference not found at {args.ref}; continuing without it", file=sys.stderr)

    gen_cfg = {"responseModalities": ["IMAGE"]}
    if args.n > 1:
        gen_cfg["candidateCount"] = args.n
    if args.aspect:
        gen_cfg["imageConfig"] = {"aspectRatio": args.aspect}

    url = f"{API_BASE}/models/{args.model}:generateContent?key={key}"
    resp = post(url, {"contents": [{"parts": parts}], "generationConfig": gen_cfg})

    # collect every inline image across all candidates
    images = []
    for cand in resp.get("candidates", []):
        for part in cand.get("content", {}).get("parts", []):
            blob = part.get("inline_data") or part.get("inlineData")
            if blob and blob.get("data"):
                images.append(base64.b64decode(blob["data"]))

    if not images:
        # surface any text the model returned (often explains a refusal/safety block)
        txts = [
            p.get("text", "")
            for c in resp.get("candidates", [])
            for p in c.get("content", {}).get("parts", [])
            if p.get("text")
        ]
        block = resp.get("promptFeedback", {}).get("blockReason")
        detail = " ".join(txts) or (f"blocked: {block}" if block else json.dumps(resp)[:400])
        sys.exit(f"error: no image returned. {detail}")

    base, ext = os.path.splitext(args.output)
    ext = ext or ".png"
    if len(images) == 1:
        paths = [args.output if os.path.splitext(args.output)[1] else base + ext]
    else:
        paths = [f"{base}_{i + 1}{ext}" for i in range(len(images))]
    for data, path in zip(images, paths):
        with open(path, "wb") as f:
            f.write(data)
        print(f"wrote {path}  ({len(data) // 1024} KB)")


if __name__ == "__main__":
    main()
