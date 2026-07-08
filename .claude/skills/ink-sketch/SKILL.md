---
name: ink-sketch
description: >-
  Generate loose, hand-drawn black-ink brush-sketch illustrations — monochrome
  line art on off-white paper, like a quick pen-and-ink doodle (wobbly confident
  contours, gestural blooms/foliage, isolated spot vignettes with lots of
  negative space). Uses Google's Gemini flash image model, anchored to a bundled
  style-reference sheet so outputs match the look. Use whenever the user wants a
  visual, illustration, spot art, icon, thumbnail, or hero/preview image in this
  distinctive ink-sketch aesthetic — e.g. "draw X in that ink style", "make a
  sketch of…", project or blog artwork in this style. Requires a Gemini API key.
---

# ink-sketch

Create illustrations in a loose, hand-drawn **black ink on off-white paper**
style: single confident contour lines with a natural wobble, gestural marks for
texture, each subject an isolated spot illustration with generous negative
space. Generation is done by an image model (Gemini flash image), not by drawing
vectors — you describe the subject in plain words and the model renders it.

`scripts/generate.py` wraps your subject in a fixed style prompt **and** sends
`assets/style-reference.png` (a sheet of examples in this exact style) as a
visual anchor, so every result comes back on-style.

## Setup

```bash
export GEMINI_API_KEY=...        # from https://aistudio.google.com/apikey
# (GOOGLE_API_KEY also works)
```

Python 3 standard library only — no `pip install`. Needs network access to
`generativelanguage.googleapis.com`.

## Use

```bash
cd .claude/skills/ink-sketch

python scripts/generate.py "an old gramophone" -o gramophone.png
python scripts/generate.py "a cat asleep on a windowsill" -o cat.png --aspect 1:1
python scripts/generate.py "a bicycle leaning on a wall" --n 3 -o bike.png   # bike_1.png…
python scripts/generate.py "a lighthouse" --no-ref                          # ignore style anchor
python scripts/generate.py --raw "your own fully-specified prompt" -o x.png  # skip style wrapper
```

**Always open the resulting PNG and judge it.** Image generation is stochastic;
if the composition or line quality is off, re-run (results vary each call),
tweak the subject wording, or adjust `--aspect`. Iterate visually.

## Model selection

Defaults to a Gemini flash image model. The exact id changes over time and by
account, so override it when needed:

```bash
python scripts/generate.py --list-models          # see image models on your key
python scripts/generate.py "a teapot" --model gemini-3-flash-image
export GEMINI_IMAGE_MODEL=gemini-3-pro-image-preview   # or set a default
```

If a model id 404s, run `--list-models` and pick one that your key supports
(image models are marked with `*`).

## Tuning the style

- The house style lives in the `STYLE` string near the top of
  `scripts/generate.py`. Edit it to shift the aesthetic (line weight, amount of
  scribble/texture, paper tone, composition).
- The style anchor is `assets/style-reference.png`. Swap it with `--ref
  other.png`, or drop it entirely with `--no-ref` if you want the text prompt
  alone to drive the look.
- Keep subjects to a **single object or simple scene** for the cleanest,
  most on-style spot illustrations, matching the reference sheet.

## Flags

| Flag | Purpose |
|---|---|
| `subject` | what to draw, in plain words (wrapped in the style prompt) |
| `-o, --output` | output PNG path (multiple images get `_1`, `_2`, … suffixes) |
| `--model` | image model id (or set `GEMINI_IMAGE_MODEL`) |
| `--n` | request more than one image |
| `--aspect` | aspect ratio hint, e.g. `1:1`, `16:9`, `3:2` |
| `--ref PATH` / `--no-ref` | override / disable the style-reference image |
| `--raw` | use the subject text verbatim (no style wrapper) |
| `--list-models` | list image-capable models on your key |

## Notes

- Requires a valid Gemini API key with access to an image generation model.
- On a refusal or safety block, the script prints the model's explanation
  instead of writing a file.
- Common sizes for reuse: wide hero `16:9`, square icon/spot `1:1`, sheet-style
  `3:2`.
