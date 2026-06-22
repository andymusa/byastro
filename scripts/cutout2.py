"""Background-remove + trim the second Astro photo for the right side."""
from rembg import remove, new_session
from PIL import Image
import io

session = new_session("isnet-general-use")
with open("/tmp/new_real.png", "rb") as f:
    cut = remove(f.read(), session=session, alpha_matting=True,
                 alpha_matting_foreground_threshold=240,
                 alpha_matting_background_threshold=15)
img = Image.open(io.BytesIO(cut)).convert("RGBA")

# Trim transparent padding to the subject.
bbox = img.getchannel("A").getbbox()
if bbox:
    img = img.crop(bbox)

max_w = 1000
if img.width > max_w:
    h = round(img.height * max_w / img.width)
    img = img.resize((max_w, h), Image.LANCZOS)

img.save("public/astro-right.png")
print(f"saved public/astro-right.png size={img.size}")
