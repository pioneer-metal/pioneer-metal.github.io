"""Create production WebP variants while keeping the original image files intact.

Run with Pillow installed: python3 scripts/optimize_images.py
"""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / 'resources/optimized'
FILES = [
    'Home_01.jpg', 'Home_02.jpg', 'Home_03.jpg', 'Home_04.jpg',
    'AboutUs_01.jpg', 'AboutUs_02.jpg', 'AboutUs_03.jpg', 'AboutUs_04.jpg',
    'Products_01.jpg', 'Products_02.jpg', 'Products_02.jpeg', 'Products_03.jpg',
    'Products_04.jpg', 'Products_010.jpg', 'News_01.jpg', 'News_02.jpg',
    'events/eurasia-window-2026-poster.png', 'events/tonish-upvc.png',
]
OUTPUT.mkdir(parents=True, exist_ok=True)
for name in FILES:
    source = ROOT / 'resources' / name
    target = OUTPUT / (source.name + '.webp')
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original).convert('RGB')
        image.thumbnail((2400, 2400), Image.Resampling.LANCZOS)
        image.save(target, 'WEBP', quality=84, method=6)
    print(f'{name}: {source.stat().st_size // 1024} KiB → {target.stat().st_size // 1024} KiB')
