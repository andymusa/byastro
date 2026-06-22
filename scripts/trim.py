"""Trim the trailing leash below Astro's body using per-row opacity width."""
from PIL import Image

img = Image.open("public/astro-cutout.png").convert("RGBA")
alpha = img.getchannel("A")
w, h = img.size
px = alpha.load()

# Count opaque pixels per row.
row_w = []
for y in range(h):
    c = 0
    for x in range(0, w, 2):  # sample every 2px for speed
        if px[x, y] > 40:
            c += 2
    row_w.append(c)

peak = max(row_w)
thresh = peak * 0.18  # leash is much narrower than the body

# Walk down from the row of peak width; cut where rows stay narrow.
peak_y = row_w.index(peak)
cut_y = h
narrow = 0
for y in range(peak_y, h):
    if row_w[y] < thresh:
        narrow += 1
        if narrow > 25:  # sustained narrow region => leash only
            cut_y = y - 25
            break
    else:
        narrow = 0

img = img.crop((0, 0, w, cut_y))
# re-trim horizontal padding
bbox = img.getchannel("A").getbbox()
if bbox:
    img = img.crop(bbox)
img.save("public/astro-cutout.png")
print(f"trimmed to {img.size} (cut_y={cut_y})")
