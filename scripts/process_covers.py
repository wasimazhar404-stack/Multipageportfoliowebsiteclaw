#!/usr/bin/env python3
"""
Compress existing covers + generate missing covers for all 116 ebooks.
"""
import os
import re
from PIL import Image, ImageDraw, ImageFont

# Paths
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
COVERS_DIR = os.path.join(PROJECT_ROOT, "public", "imports", "covers")
EBOOKS_FILE = os.path.join(PROJECT_ROOT, "src", "app", "data", "ebooks.ts")

# Canvas size
W, H = 600, 800

# Category color map (from ebooks.ts)
CATEGORY_COLORS = {
    "hajj-umrah":  ("#0d9488", "#ccfbf1"),
    "ziyarat":     ("#4f46e5", "#e0e7ff"),
    "finance":     ("#d97706", "#fef3c7"),
    "lifestyle":   ("#e11d48", "#ffe4e6"),
    "parenting":   ("#7c3aed", "#ede9fe"),
    "health":      ("#059669", "#d1fae5"),
    "quran-study": ("#1e3a5f", "#dbeafe"),
    "hadith":      ("#b45309", "#fef3c7"),
    "seerah":      ("#701a75", "#fae8ff"),
    "aqeedah":     ("#1e40af", "#dbeafe"),
    "duas":        ("#047857", "#d1fae5"),
    "kids":        ("#db2777", "#fce7f3"),
    "women":       ("#be185d", "#fce7f3"),
    "youth":       ("#2563eb", "#dbeafe"),
    "cooking":     ("#ea580c", "#ffedd5"),
    "death":       ("#475569", "#f1f5f9"),
    "dawah":       ("#0891b2", "#cffafe"),
}


def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip("#")
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))


def parse_ebooks():
    """Parse ebooks.ts and extract book data."""
    with open(EBOOKS_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract ebook objects with regex
    pattern = re.compile(
        r'\{\s*id:\s*(\d+),\s*title:\s*"([^"]+)",\s*subtitle:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*categoryLabel:\s*"([^"]+)",\s*price:\s*"([^"]+)"(?:,\s*featured:\s*(true|false))?',
        re.DOTALL,
    )

    books = []
    for m in pattern.finditer(content):
        books.append({
            "id": int(m.group(1)),
            "title": m.group(2),
            "subtitle": m.group(3),
            "category": m.group(5),
            "categoryLabel": m.group(6),
            "price": m.group(7),
        })

    return books


def compress_existing_cover(filename):
    """Resize and compress an existing cover to ~50-80KB."""
    filepath = os.path.join(COVERS_DIR, filename)
    img = Image.open(filepath)
    # Resize to target dimensions (maintain aspect ratio, fit within 600x800)
    img.thumbnail((W, H), Image.Resampling.LANCZOS)
    # If image is smaller, center it on a canvas
    if img.size != (W, H):
        canvas = Image.new("RGB", (W, H), (30, 30, 30))
        x = (W - img.width) // 2
        y = (H - img.height) // 2
        canvas.paste(img, (x, y))
        img = canvas
    # Save with quality 80%
    img.save(filepath, "JPEG", quality=80, optimize=True)
    size_kb = os.path.getsize(filepath) / 1024
    print(f"  Compressed {filename}: {size_kb:.1f} KB")
    return size_kb


def draw_islamic_pattern(draw, color, opacity=30):
    """Draw a subtle Islamic geometric pattern."""
    r, g, b = hex_to_rgb(color)
    pattern_color = (r, g, b, opacity)
    # Diamond grid pattern
    for y in range(0, H + 80, 80):
        for x in range(-40, W + 40, 80):
            draw.polygon(
                [(x, y - 40), (x + 40, y), (x, y + 40), (x - 40, y)],
                outline=pattern_color,
            )


def draw_ornate_border(draw, color, width=4):
    """Draw an ornate gold border frame."""
    gold = (212, 175, 55)  # Classic gold
    margin = 24
    # Outer rectangle
    draw.rectangle(
        [margin, margin, W - margin, H - margin],
        outline=gold,
        width=width,
    )
    # Inner rectangle
    draw.rectangle(
        [margin + 12, margin + 12, W - margin - 12, H - margin - 12],
        outline=gold,
        width=2,
    )
    # Corner decorations
    corner_size = 20
    for cx, cy in [(margin, margin), (W - margin, margin), (margin, H - margin), (W - margin, H - margin)]:
        draw.line(
            [(cx - corner_size, cy), (cx + corner_size, cy)],
            fill=gold,
            width=3,
        )
        draw.line(
            [(cx, cy - corner_size), (cx, cy + corner_size)],
            fill=gold,
            width=3,
        )


def generate_cover(book):
    """Generate a professional book cover for a missing book."""
    cat_color, cat_bg = CATEGORY_COLORS.get(book["category"], ("#1e3a5f", "#dbeafe"))
    r, g, b = hex_to_rgb(cat_color)

    # Create gradient background
    img = Image.new("RGB", (W, H), (r, g, b))
    draw = ImageDraw.Draw(img)

    # Gradient: darker at top
    for y in range(H):
        ratio = y / H
        nr = int(r * (1 - ratio * 0.4))
        ng = int(g * (1 - ratio * 0.4))
        nb = int(b * (1 - ratio * 0.4))
        draw.line([(0, y), (W, y)], fill=(nr, ng, nb))

    # Subtle pattern overlay
    draw_islamic_pattern(draw, cat_color, opacity=20)

    # Ornate border
    draw_ornate_border(draw, cat_color)

    # Try to load fonts (fallback to default if not found)
    try:
        font_title = ImageFont.truetype("arialbd.ttf", 42)
        font_sub = ImageFont.truetype("arial.ttf", 22)
        font_cat = ImageFont.truetype("arialbd.ttf", 16)
        font_price = ImageFont.truetype("arialbd.ttf", 24)
        font_brand = ImageFont.truetype("arial.ttf", 14)
    except:
        font_title = ImageFont.load_default()
        font_sub = ImageFont.load_default()
        font_cat = ImageFont.load_default()
        font_price = ImageFont.load_default()
        font_brand = ImageFont.load_default()

    # Category badge (top center)
    cat_text = book["categoryLabel"].upper()
    bbox = draw.textbbox((0, 0), cat_text, font=font_cat)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    badge_pad = 12
    draw.rounded_rectangle(
        [(W // 2 - tw // 2 - badge_pad, 60 - badge_pad), (W // 2 + tw // 2 + badge_pad, 60 + th + badge_pad)],
        radius=20,
        fill=(255, 255, 255, 180),
        outline=(212, 175, 55),
        width=2,
    )
    draw.text((W // 2 - tw // 2, 60), cat_text, fill=(r, g, b), font=font_cat)

    # Title (center, wrapped)
    title = book["title"].upper()
    words = title.split()
    lines = []
    line = ""
    for word in words:
        test = line + " " + word if line else word
        bbox = draw.textbbox((0, 0), test, font=font_title)
        if bbox[2] - bbox[0] > W - 80:
            lines.append(line)
            line = word
        else:
            line = test
    lines.append(line)

    y_title = 280
    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=font_title)
        tw = bbox[2] - bbox[0]
        th = bbox[3] - bbox[1]
        # Text shadow
        draw.text((W // 2 - tw // 2 + 2, y_title + 2), line, fill=(0, 0, 0, 128), font=font_title)
        draw.text((W // 2 - tw // 2, y_title), line, fill=(255, 255, 255), font=font_title)
        y_title += th + 8

    # Subtitle
    subtitle = book["subtitle"]
    bbox = draw.textbbox((0, 0), subtitle, font=font_sub)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    draw.text((W // 2 - tw // 2, y_title + 20), subtitle, fill=(255, 255, 255, 220), font=font_sub)

    # Price tag (bottom right)
    price = book["price"]
    bbox = draw.textbbox((0, 0), price, font=font_price)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    draw.rounded_rectangle(
        [(W - tw - 40, H - 100), (W - 30, H - 60)],
        radius=10,
        fill=(255, 255, 255),
    )
    draw.text((W - tw - 30, H - 95), price, fill=(r, g, b), font=font_price)

    # Branding (bottom center)
    brand = "QuickFare"
    bbox = draw.textbbox((0, 0), brand, font=font_brand)
    tw = bbox[2] - bbox[0]
    draw.text((W // 2 - tw // 2, H - 45), brand, fill=(212, 175, 55), font=font_brand)

    # Save
    filename = f"ebook_{book['id']}_cover.jpg"
    filepath = os.path.join(COVERS_DIR, filename)
    img.save(filepath, "JPEG", quality=80, optimize=True)
    size_kb = os.path.getsize(filepath) / 1024
    print(f"  Generated {filename}: {size_kb:.1f} KB")
    return size_kb


def main():
    os.makedirs(COVERS_DIR, exist_ok=True)

    print("Parsing ebooks.ts...")
    books = parse_ebooks()
    print(f"Found {len(books)} books")

    existing_covers = set(
        f for f in os.listdir(COVERS_DIR)
        if f.startswith("ebook_") and f.endswith("_cover.jpg")
    )
    print(f"Existing covers: {len(existing_covers)}")

    total_compressed = 0
    total_generated = 0

    for book in books:
        filename = f"ebook_{book['id']}_cover.jpg"
        if filename in existing_covers:
            print(f"Compressing: {book['title']}")
            size = compress_existing_cover(filename)
            total_compressed += size
        else:
            print(f"Generating: {book['title']}")
            size = generate_cover(book)
            total_generated += size

    print(f"\nDone!")
    print(f"  Compressed {len(existing_covers)} covers")
    print(f"  Generated {len(books) - len(existing_covers)} covers")
    print(f"  Total size: {total_compressed + total_generated:.1f} KB")


if __name__ == "__main__":
    main()
