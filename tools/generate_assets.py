from pathlib import Path
from random import Random

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
ASSETS.mkdir(exist_ok=True)
RNG = Random(42)


def paper_noise():
    size = 160
    image = Image.new("RGBA", (size, size), (247, 243, 235, 0))
    pixels = image.load()
    for y in range(size):
        for x in range(size):
            value = RNG.randint(0, 255)
            alpha = 8 if value > 130 else 3
            pixels[x, y] = (53, 46, 36, alpha)
    image.save(ASSETS / "paper-noise.png", optimize=True)


def soft_shadow(base, box, radius=22, opacity=70, offset=(12, 16)):
    shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(shadow)
    shifted = tuple(
        value + offset[index % 2]
        for index, value in enumerate(box)
    )
    draw.rounded_rectangle(shifted, radius=8, fill=(20, 22, 18, opacity))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius))
    base.alpha_composite(shadow)


def featured_desk():
    width, height = 1500, 1100
    image = Image.new("RGBA", (width, height), "#c6c0ad")
    draw = ImageDraw.Draw(image)

    draw.rectangle((0, 0, width, 620), fill="#b9c6be")
    draw.rectangle((0, 620, width, height), fill="#805a3f")
    draw.rectangle((90, 70, 980, 650), fill="#29443b")
    draw.rectangle((122, 102, 948, 618), fill="#9dbab3")
    draw.rectangle((520, 102, 544, 618), fill="#29443b")
    draw.rectangle((122, 350, 948, 374), fill="#29443b")
    draw.ellipse((690, 160, 940, 410), fill="#e9d694")
    draw.rectangle((122, 540, 948, 618), fill="#7f9d94")

    soft_shadow(image, (280, 610, 1070, 990), radius=28, opacity=80)
    draw = ImageDraw.Draw(image)
    draw.polygon([(270, 640), (970, 600), (1120, 900), (370, 970)], fill="#ece4d3")
    draw.polygon([(340, 672), (655, 650), (720, 887), (392, 918)], fill="#f8f3e8")
    draw.polygon([(664, 648), (940, 632), (1050, 858), (730, 887)], fill="#ded4bf")

    for index in range(7):
        y = 710 + index * 28
        draw.line((390, y, 655, y - 16), fill="#b5ad9f", width=3)
    draw.line((770, 704, 950, 690), fill="#bf5a42", width=8)
    draw.line((780, 739, 980, 724), fill="#8b958b", width=4)
    draw.line((790, 774, 960, 762), fill="#8b958b", width=4)

    soft_shadow(image, (1050, 650, 1300, 930), radius=20, opacity=75)
    draw = ImageDraw.Draw(image)
    draw.ellipse((1055, 655, 1280, 870), fill="#244c43")
    draw.ellipse((1090, 684, 1248, 836), fill="#e8dfc7")
    draw.ellipse((1120, 710, 1218, 808), fill="#57402e")
    draw.arc((1210, 700, 1355, 850), 260, 100, fill="#244c43", width=28)

    draw.polygon([(135, 750), (290, 708), (326, 970), (155, 1008)], fill="#d64d36")
    draw.line((190, 762, 252, 960), fill="#f4d978", width=9)
    draw.ellipse((1120, 430, 1460, 900), fill=(224, 203, 126, 36))

    image.convert("RGB").save(ASSETS / "featured-desk.png", quality=92, optimize=True)


def design_grid():
    width, height = 900, 560
    image = Image.new("RGBA", (width, height), "#e8dfd0")
    draw = ImageDraw.Draw(image)

    for x in range(0, width, 40):
        draw.line((x, 0, x, height), fill="#c9c1b3", width=1)
    for y in range(0, height, 40):
        draw.line((0, y, width, y), fill="#c9c1b3", width=1)

    soft_shadow(image, (110, 70, 720, 480), radius=18, opacity=60)
    draw = ImageDraw.Draw(image)
    draw.rectangle((100, 60, 710, 470), fill="#f9f5ec")
    draw.rectangle((145, 108, 410, 140), fill="#1f5548")
    draw.rectangle((145, 174, 635, 192), fill="#b3b2a7")
    draw.rectangle((145, 218, 570, 236), fill="#d2cec4")
    draw.rectangle((145, 285, 335, 405), fill="#d84c34")
    draw.rectangle((360, 285, 655, 405), fill="#e2b64f")
    draw.ellipse((690, 54, 830, 194), fill="#2c5b50")
    draw.rectangle((672, 340, 800, 500), fill="#252a28")
    draw.line((710, 370, 710, 468), fill="#f2efe7", width=7)
    draw.line((745, 370, 745, 438), fill="#f2efe7", width=7)

    image.convert("RGB").save(ASSETS / "design-grid.png", quality=91, optimize=True)


def code_window():
    width, height = 900, 560
    image = Image.new("RGBA", (width, height), "#d6c9b2")
    draw = ImageDraw.Draw(image)
    draw.rectangle((0, 0, width, height), fill="#c7d0c9")
    draw.polygon([(0, 430), (900, 320), (900, 560), (0, 560)], fill="#936b4f")

    soft_shadow(image, (95, 65, 785, 465), radius=22, opacity=75)
    draw = ImageDraw.Draw(image)
    draw.rounded_rectangle((82, 50, 772, 452), radius=10, fill="#202825")
    draw.rounded_rectangle((82, 50, 772, 102), radius=10, fill="#343d38")
    draw.rectangle((82, 92, 772, 102), fill="#343d38")
    draw.ellipse((110, 69, 126, 85), fill="#e66b55")
    draw.ellipse((138, 69, 154, 85), fill="#e5ba58")
    draw.ellipse((166, 69, 182, 85), fill="#6fa882")

    colors = ["#db755f", "#d9c576", "#83b39d", "#c5cdc6"]
    rows = [
        (150, 140, 460, 10, 0),
        (180, 176, 625, 9, 3),
        (180, 212, 540, 9, 2),
        (210, 248, 680, 9, 1),
        (210, 284, 490, 9, 3),
        (180, 320, 590, 9, 2),
        (150, 356, 415, 10, 0),
    ]
    for x, y, x2, thickness, color_index in rows:
        draw.rounded_rectangle((x, y, x2, y + thickness), radius=thickness // 2, fill=colors[color_index])

    draw.polygon([(650, 320), (835, 300), (848, 480), (666, 500)], fill="#f2e7cc")
    draw.line((690, 350, 805, 337), fill="#d1513b", width=8)
    draw.line((690, 385, 790, 374), fill="#9f9a89", width=5)
    draw.line((692, 417, 812, 405), fill="#9f9a89", width=5)

    image.convert("RGB").save(ASSETS / "code-window.png", quality=91, optimize=True)


def city_window():
    width, height = 900, 720
    image = Image.new("RGBA", (width, height), "#294743")
    draw = ImageDraw.Draw(image)

    draw.rectangle((0, 0, width, height), fill="#274640")
    draw.rectangle((80, 62, 820, 632), fill="#182d2d")
    draw.rectangle((110, 92, 790, 602), fill="#456b68")
    draw.rectangle((438, 92, 466, 602), fill="#182d2d")
    draw.rectangle((110, 335, 790, 363), fill="#182d2d")
    draw.ellipse((560, 118, 708, 266), fill="#f0c86c")
    draw.rectangle((110, 470, 790, 602), fill="#203b3a")

    buildings = [
        (110, 380, 240, 602, "#345957"),
        (235, 420, 350, 602, "#2d4e4d"),
        (350, 368, 520, 602, "#3a5e5c"),
        (515, 430, 665, 602, "#294948"),
        (650, 388, 790, 602, "#365755"),
    ]
    for x1, y1, x2, y2, color in buildings:
        draw.rectangle((x1, y1, x2, y2), fill=color)
        for y in range(y1 + 28, y2 - 12, 42):
            for x in range(x1 + 18, x2 - 10, 38):
                if RNG.random() > 0.46:
                    draw.rectangle((x, y, x + 11, y + 17), fill="#e6bd62")

    draw.rectangle((0, 635, 900, 720), fill="#182b29")
    draw.rectangle((0, 650, 900, 680), fill="#50655d")
    draw.ellipse((58, 595, 238, 775), fill="#172e29")
    draw.ellipse((700, 560, 910, 790), fill="#1c352f")

    image.convert("RGB").save(ASSETS / "city-window.png", quality=92, optimize=True)


def favicon():
    image = Image.new("RGB", (64, 64), "#18201d")
    draw = ImageDraw.Draw(image)
    draw.rectangle((10, 10, 54, 54), outline="#f4f0e7", width=3)
    draw.line((22, 20, 22, 45), fill="#d9472f", width=5)
    draw.line((22, 44, 43, 44), fill="#d9472f", width=5)
    image.save(ASSETS / "favicon.png", optimize=True)


if __name__ == "__main__":
    paper_noise()
    featured_desk()
    design_grid()
    code_window()
    city_window()
    favicon()
    print(f"Generated assets in {ASSETS}")
