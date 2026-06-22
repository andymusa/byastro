"""Remove the background from Astro's photo and crop to his outline."""
from rembg import remove
from PIL import Image
import io

SRC = "public/IMG_3885.PNG"
OUT = "public/astro-cutout.png"

with open(SRC, "rb") as f:
    data = f.read()

cut = remove(data)  # downloads u2net model on first run
img = Image.open(io.BytesIO(cut)).convert("RGBA")

# Trim fully-transparent padding around the dog.
bbox = img.getchannel("A").getbbox()
if bbox:
    img = img.crop(bbox)

# Keep file size reasonable for the web.
max_w = 1000
if img.width > max_w:
    h = round(img.height * max_w / img.width)
    img = img.resize((max_w, h), Image.LANCZOS)

img.save(OUT)
print(f"saved {OUT} size={img.size}")
