---
name: ink-sketch
description: >-
  Create loose, hand-drawn black-ink brush-sketch illustrations — monochrome
  line art on off-white paper, in the style of a quick pen-and-ink doodle
  (wobbly confident contours, gestural blooms/foliage, isolated spot vignettes
  with lots of negative space, tiny [n] index labels). Use whenever the user
  wants a visual, illustration, spot art, icon set, thumbnail, or hero/preview
  image in this distinctive loose ink-sketch look — e.g. "draw X in that ink
  style", "make a sketch of…", "a hero image like the flowers/TV drawing",
  project or blog artwork in this aesthetic. Renders real PNGs.
---

# ink-sketch

Produce illustrations in a loose, hand-drawn **black ink on off-white paper**
style: single confident contour lines with an organic wobble, gestural marks
for texture (petals, foliage, cityscapes), each subject isolated as a small
spot vignette surrounded by negative space, optionally tagged with a tiny gray
`[n]` label like a reference sheet.

The look is produced with pure SVG (no external libraries): clean vector paths
+ round caps + a `feTurbulence`/`feDisplacementMap` "roughen" filter that gives
every line the hand-drawn wobble. A small procedural mark library draws the
gestural elements. The SVG is rendered to a crisp 2x PNG with headless Chromium.

## Style DNA (match these)

- **Palette:** paper `#f4f1ea`, ink `#17130d`. Monochrome only — no color, no gray fills.
- **Line:** `fill:none`, `stroke-linecap:round`, `stroke-linejoin:round`. Vary
  weight — main contours ~5–7px, details/stems ~2–3px. Let lines slightly
  overshoot at corners; imperfection is the point.
- **Wobble:** the shared `#rough` filter (displacement `scale` 4 tight → 9 loose).
  Keep it subtle; too much reads as melted, not drawn.
- **Composition:** isolated objects, generous empty space, objects sitting on a
  short ground line. Groups of small vignettes on one sheet work well.
- **Texture, not shading:** suggest foliage/skylines/detail with a few gestural
  scribbles or light hatch lines, never solid fills or smooth gradients.
- **Labels (optional):** tiny `[1] [2] …` in gray `#8f8d88` Helvetica, drawn
  crisp (outside the roughen filter).

## Workflow

1. **Copy the template.** `scripts/template.html` is a self-contained scaffold:
   the paper, the roughen filter, and the mark library, with a `COMPOSE` section
   at the bottom holding an example scene.
2. **Set `CONFIG`** at the top (`W`, `H`, `seed`, `wobble`, `grain`).
3. **Compose** in the `COMPOSE` section using the mark library (below). Think in
   simple contours; place each subject with breathing room. Change `seed` (or
   call `setSeed(n)` between objects) to reshuffle the random wobble/petals.
4. **Render:** `scripts/render.sh input.html output.png WIDTH HEIGHT`
   (WIDTH/HEIGHT must equal `CONFIG.W`/`CONFIG.H`). It finds Chromium
   automatically (or set `CHROME=/path/to/chrome`) and renders at 2x.
5. **Look at the PNG and iterate.** This is a visual medium — always open the
   output, adjust coordinates/weights/seed, and re-render until it reads right.

```bash
# from this skill directory
cp scripts/template.html /tmp/scene.html
# …edit CONFIG + COMPOSE in /tmp/scene.html…
scripts/render.sh /tmp/scene.html /tmp/scene.png 1200 800
```

## Mark library (defined in the template)

| Call | Draws |
|---|---|
| `P(d, w, attrs?)` | raw stroke from an SVG path `d` at width `w` |
| `line(x0,y0,x1,y1,w)` / `curve(x0,y0,cx,cy,x1,y1,w)` | straight / quadratic stroke |
| `poly(points, w, close?)` | polyline through `[[x,y],…]` (skylines, zig-zags) |
| `bloom(cx,cy,size,n,w)` | loose daisy/wildflower — radiating tapered petals + center |
| `blossom(cx,cy,size,bumps,w)` | round cloud-like flower (rose/peony) |
| `leaf(x,y,angle,len,w)` | a pointed almond leaf |
| `sprig(x,y,angle,len,w)` | a stem with a few alternating leaves |
| `box(x,y,w,h,r,sw)` | rough rounded rectangle (screens, frames, boxes) |
| `hatch(x,y,w,h,gap,sw)` | diagonal scribble/hatch fill for a shaded patch |
| `label(x,y,"[1]")` | tiny gray index label (crisp, un-roughened) |
| `setSeed(n)` / `rr(a,b)` | reseed the RNG / random float helper |

Build any subject by combining these: a vase is one `P` contour + a ground
`curve`; flowers are `curve` stems topped with `bloom`/`blossom`; a TV is a `box`
body + `box` screen + `poly` skyline + `hatch` shadow + a couple of dial arcs.
See `examples/example.html` for the full source of the sheet below.

## Example

`examples/example.png` — three vignettes (wildflowers, roses in a jug, a little
television) rendered by `examples/example.html` through this exact pipeline.

## Notes

- **Requires headless Chromium** for the roughen filter (it needs full SVG
  filter support; `librsvg`/`rsvg-convert` won't render the displacement). The
  render script auto-detects Playwright's Chromium, system `chromium`, or
  `google-chrome`.
- Keep scenes **deterministic** by leaving `CONFIG.seed` fixed — same input
  renders identically every time, so re-renders are stable.
- To place art on a transparent background instead of paper, set `CONFIG.paper`
  to `transparent` and pass `--default-background-color=00000000` (edit
  `render.sh`); the ink stays the same.
- For blog/project use, common sizes: wide hero `1200x630`, square icon
  `600x600`, sheet of vignettes `1500x560`.
