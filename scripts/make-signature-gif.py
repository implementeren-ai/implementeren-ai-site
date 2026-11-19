#!/usr/bin/env python3
"""Generate the animated e-mail-signature GIF of the implementeren.ai logo mark.

Reproduces the header hover animation exactly (src/styles/v2.css):
  @keyframes v2-merk-eq  { 0%,100% scaleY(1); 30% scaleY(.45); 60% scaleY(1.15); }
  @keyframes v2-merk-hop { 0%,100% none;      40% translateY(-2px); }
  .merk-b1/.merk-b2: v2-merk-eq 1.8s ease-in-out, transform-origin bottom-centre
  (transform-box: fill-box); .merk-b2 delayed .25s; .merk-punt: v2-merk-hop 1.8s
  ease-in-out delayed .5s; .merk-i static. ease-in-out = cubic-bezier(.42,0,.58,1)
  applied per keyframe segment, as CSS does.

Geometry is taken verbatim from src/assets/logo/logo-mark.svg (32x32 viewBox).
The mark is nothing but rounded rectangles, so frames are rasterised in pure
Pillow at 8x supersample; scaleY is done by non-uniformly resizing the bar's own
mask about its bottom edge, which also yields the elliptical corners a CSS
scaleY produces. Composited on solid white (GIF has only 1-bit transparency;
a white matte avoids jagged corners in e-mail clients).

Timeline (chosen for e-mail calm, documented in PR):
  - One full 1.8s cycle per element, honouring the CSS delays, so every element
    is back at rest at t = 2.3s. 20 fps -> 46 frames of 50 ms.
  - Then a single rest-hold frame of 1500 ms. Frame 0 is the exact rest state
    (classic Outlook on Windows shows only the first frame).
  - Netscape loop count 2 -> browsers play 1 + 2 = 3 times total, then the GIF
    stops on the rest frame.

Run from the repo root:
  python3 scripts/make-signature-gif.py [--contact-sheet /path/to/sheet.png]
Writes public/brand/logo-mark-anim-v1.gif (56 px, the deliverable; shown at
28 css px = 2x) and public/brand/logo-mark-anim-v1-84.gif (3x variant), and
prints a verification report. Requires Pillow only.
"""

import argparse
import io
import os
import sys

from PIL import Image, ImageChops, ImageDraw

# ---- geometry, verbatim from src/assets/logo/logo-mark.svg (viewBox 0 0 32 32)
VIEWBOX = 32
SQUARE = {"rx": 8, "fill": "#23261D"}
BARS = {
    # name: (x, y, w, h, rx, fill)
    "merk-b1": (5, 20, 6, 8, 1, "#55623A"),
    "merk-b2": (13, 15, 6, 13, 1, "#8E9A5C"),
    "merk-i": (21, 11, 6, 17, 1, "#F4F1E8"),
    "merk-punt": (21, 3, 6, 6, 1, "#B4C13E"),
}
MATTE = "#FFFFFF"

# ---- animation, verbatim from src/styles/v2.css
CYCLE = 1.8  # s
DELAY = {"merk-b1": 0.0, "merk-b2": 0.25, "merk-punt": 0.5}
EQ_KEYFRAMES = [(0.0, 1.0), (0.3, 0.45), (0.6, 1.15), (1.0, 1.0)]  # scaleY
HOP_KEYFRAMES = [(0.0, 0.0), (0.4, -2.0), (1.0, 0.0)]  # translateY, viewBox units

# ---- output choices
FPS = 20
FRAME_MS = 50  # 1000 / FPS, an exact GIF centisecond multiple
SEGMENT_END = CYCLE + DELAY["merk-punt"]  # 2.3 s: last delayed element at rest
HOLD_MS = 1500
LOOPS = 2  # Netscape loop count: 1 initial play + 2 repeats = 3 plays total
PALETTE_COLORS = 64
SUPERSAMPLE = 8


def css_ease_in_out(p: float) -> float:
    """cubic-bezier(.42, 0, .58, 1) — solve x(t) = p by bisection, return y(t)."""
    if p <= 0.0:
        return 0.0
    if p >= 1.0:
        return 1.0
    x1, y1, x2, y2 = 0.42, 0.0, 0.58, 1.0

    def bez(a, b, t):
        return 3 * (1 - t) ** 2 * t * a + 3 * (1 - t) * t * t * b + t ** 3

    lo, hi = 0.0, 1.0
    for _ in range(60):
        mid = (lo + hi) / 2
        if bez(x1, x2, mid) < p:
            lo = mid
        else:
            hi = mid
    return bez(y1, y2, (lo + hi) / 2)


def keyframe_value(keyframes, u: float) -> float:
    """Value at cycle position u in [0,1], easing each segment like CSS."""
    for (u0, v0), (u1, v1) in zip(keyframes, keyframes[1:]):
        if u0 <= u <= u1:
            return v0 + (v1 - v0) * css_ease_in_out((u - u0) / (u1 - u0))
    return keyframes[-1][1]


def element_state(name: str, t: float):
    """(scaleY, translateY) of an element at wall time t, playing ONE cycle."""
    d = DELAY[name]
    if t < d or t >= d + CYCLE:
        return 1.0, 0.0  # at rest (before delay / after its single cycle)
    u = (t - d) / CYCLE
    if name == "merk-punt":
        return 1.0, keyframe_value(HOP_KEYFRAMES, u)
    return keyframe_value(EQ_KEYFRAMES, u), 0.0


def _bar_mask(w_px: int, h_px: int, rx_px: int) -> Image.Image:
    m = Image.new("L", (w_px, h_px), 0)
    ImageDraw.Draw(m).rounded_rectangle((0, 0, w_px - 1, h_px - 1), radius=rx_px, fill=255)
    return m


def render_frame(t: float, size: int, ss: int = SUPERSAMPLE) -> Image.Image:
    """Rasterise the mark at wall time t on a white matte, size x size px."""
    unit = size * ss / VIEWBOX  # supersampled px per viewBox unit
    big = round(size * ss)
    img = Image.new("RGB", (big, big), MATTE)
    draw = ImageDraw.Draw(img)
    draw.rounded_rectangle((0, 0, big - 1, big - 1), radius=round(SQUARE["rx"] * unit), fill=SQUARE["fill"])
    for name, (x, y, w, h, rx, fill) in BARS.items():
        w_px, h_px, rx_px = round(w * unit), round(h * unit), round(rx * unit)
        mask = _bar_mask(w_px, h_px, rx_px)
        if name == "merk-punt":
            _, dy = element_state(name, t)
            pos = (round(x * unit), round((y + dy) * unit))
        else:
            s = element_state(name, t)[0] if name != "merk-i" else 1.0
            if s != 1.0:
                new_h = max(1, round(h_px * s))
                # CSS scaleY about the fill-box bottom-centre: squash/stretch the
                # rendered shape itself (corners go elliptical), bottom edge fixed.
                mask = mask.resize((w_px, new_h), Image.LANCZOS)
            pos = (round(x * unit), round((y + h) * unit) - mask.height)
        img.paste(fill, pos, mask)
    return img.resize((size, size), Image.LANCZOS)


def build_frames(size: int):
    n = round(SEGMENT_END / (FRAME_MS / 1000))  # 46
    times = [i * FRAME_MS / 1000 for i in range(n)]
    frames = [render_frame(t, size) for t in times]
    frames.append(render_frame(0.0, size))  # rest hold (t=0 is the rest state)
    durations = [FRAME_MS] * n + [HOLD_MS]
    return frames, durations


def quantize_all(frames, colors=PALETTE_COLORS):
    """One shared palette for every frame, no dithering (flat colours).

    The palette is simply the `colors` most frequent exact colours across all
    frames: the five brand colours and the white matte dominate by orders of
    magnitude, so they survive untouched, and only rare anti-aliasing shades
    get mapped to their nearest common neighbour.

    Pixels are mapped per unique colour in Python (not via Pillow's palette
    cache, which approximates and would shift even exact palette hits), so
    every flat area decodes bit-identical to the raw render.
    """
    freq = {}
    for f in frames:
        for cnt, c in f.getcolors(1 << 20):
            freq[c] = freq.get(c, 0) + cnt
    top = sorted(freq, key=freq.get, reverse=True)[:colors]
    index = {
        c: min(range(len(top)), key=lambda i: sum((a - b) ** 2 for a, b in zip(c, top[i])))
        for c in freq
    }
    palbytes = [v for c in top for v in c] + [0] * (768 - 3 * len(top))
    out = []
    for f in frames:
        raw = f.tobytes()
        idx = bytes(index[(raw[i], raw[i + 1], raw[i + 2])] for i in range(0, len(raw), 3))
        p = Image.frombytes("P", f.size, idx)
        p.putpalette(palbytes)
        out.append(p)
    return out


def write_gif(path: str, size: int):
    frames, durations = build_frames(size)
    qframes = quantize_all(frames)
    qframes[0].save(
        path,
        save_all=True,
        append_images=qframes[1:],
        duration=durations,
        loop=LOOPS,
        disposal=1,
        optimize=True,
    )
    return frames, qframes, durations


def verify(path: str, size: int, raw_frames, qframes):
    print(f"\n== {path} ({size}px) ==")
    static = render_frame(0.0, size)  # independent rest-state render
    pre = ImageChops.difference(raw_frames[0], static).getbbox()
    print(f"frame 0 vs static rest render (pre-quantisation): "
          f"{'IDENTICAL' if pre is None else f'DIFFERS {pre}'}")
    with Image.open(path) as gif:
        gif.seek(0)
        decoded0 = gif.convert("RGB")
        post = ImageChops.difference(decoded0, qframes[0].convert("RGB")).getbbox()
        print(f"decoded GIF frame 0 vs quantised rest frame: "
              f"{'IDENTICAL' if post is None else f'DIFFERS {post}'}")
        diff = ImageChops.difference(decoded0, static)
        maxdiff = max(ex[1] for ex in diff.getextrema())
        n_off = size * size - next((n for n, c in diff.getcolors(1 << 20) if c == (0, 0, 0)), 0)
        print(f"decoded GIF frame 0 vs raw RGB static render: {n_off} of "
              f"{size * size} px differ (anti-aliased edges only), max channel "
              f"diff {maxdiff} (palette quantisation; flat areas are exact)")
        n = gif.n_frames
        durs = []
        for i in range(n):
            gif.seek(i)
            durs.append(gif.info["duration"])
        colors_used = len(gif.convert("RGB").getcolors(4096))
        print(f"frames: {n}  loop (Netscape count): {gif.info.get('loop')}"
              f"  -> plays {gif.info.get('loop', 0) + 1} times, stops on rest frame")
        print(f"durations: {durs[0]}ms x {durs.count(durs[0])} + {durs[-1]}ms hold; "
              f"one play = {sum(durs) / 1000:.2f}s")
        print(f"palette colours used in frame 0: {colors_used}")
    print(f"file size: {os.path.getsize(path)} bytes")


def contact_sheet(path: str, size: int = 112):
    times = [0.0, 0.35, 0.54, 0.80, 1.00, 1.30, 1.70, 2.05]
    pad, label_h = 8, 16
    sheet = Image.new("RGB", (len(times) * (size + pad) + pad, size + label_h + 2 * pad), "#DDDDDD")
    d = ImageDraw.Draw(sheet)
    for i, t in enumerate(times):
        x = pad + i * (size + pad)
        sheet.paste(render_frame(t, size), (x, pad))
        d.text((x, size + pad + 2), f"t={t:.2f}s", fill="#222222")
    sheet.save(path)
    print(f"contact sheet: {path}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--contact-sheet", metavar="PATH", help="also write an 8-frame PNG contact sheet")
    args = ap.parse_args()
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out = os.path.join(root, "public", "brand")
    for size, name in ((56, "logo-mark-anim-v1.gif"), (84, "logo-mark-anim-v1-84.gif")):
        path = os.path.join(out, name)
        raw, q, _ = write_gif(path, size)
        verify(path, size, raw, q)
    if args.contact_sheet:
        contact_sheet(args.contact_sheet)


if __name__ == "__main__":
    main()
