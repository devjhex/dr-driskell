const fs = require('fs');

// SVG icons in header/footer — always above fold, small, no lazy load needed
// width/height in px matching their CSS rem sizes (1rem=16px)
const ATTRS = {
  // SVG icons — fixed display size
  'phone.svg':       { width: 24,  height: 24  },
  'mail.svg':        { width: 24,  height: 24  },
  'search.svg':      { width: 28,  height: 28  },
  'basket.svg':      { width: 28,  height: 28  },
  'heartIcon.svg':   { width: 32,  height: 32  },
  'profileIcon.svg': { width: 32,  height: 32  },
  'Telegram.svg':    { width: 40,  height: 40  },
  'viber.svg':       { width: 40,  height: 40  },
  'whatsapp.svg':    { width: 40,  height: 40  },
  'instagram.svg':   { width: 28,  height: 28  },
  'border.svg':      { width: 120, height: 6   },

  // Content images — lazy load
  'product1.webp':        { width: 260, height: 197, lazy: true },
  'product2.webp':        { width: 280, height: 135, lazy: true },
  'product3.webp':        { width: 236, height: 219, lazy: true },
  'product4.webp':        { width: 212, height: 209, lazy: true },
  'product5.webp':        { width: 280, height: 191, lazy: true },
  'productTwo.webp':      { width: 429, height: 207, lazy: true },
  'productFive.webp':     { width: 529, height: 235, lazy: true },
  'productSix.webp':      { width: 441, height: 267, lazy: true },
  'productSeven.webp':    { width: 309, height: 266, lazy: true },
  'productEight.webp':    { width: 308, height: 266, lazy: true },

  'promo1.webp':          { width: 320, height: 208, lazy: true },
  'promo2.webp':          { width: 320, height: 208, lazy: true },
  'promo3.webp':          { width: 320, height: 208, lazy: true },
  'promo4.webp':          { width: 320, height: 208, lazy: true },
  'tabletPromo1.webp':    { width: 354, height: 208, lazy: true },
  'tabletPromo2.webp':    { width: 354, height: 208, lazy: true },
  'tabletPromo3.webp':    { width: 354, height: 208, lazy: true },
  'tabletPromo4.webp':    { width: 354, height: 208, lazy: true },
  'desktopPromo1.webp':   { width: 392, height: 230, lazy: true },
  'desktopPromo2.webp':   { width: 392, height: 230, lazy: true },
  'desktopPromo3.webp':   { width: 392, height: 230, lazy: true },
  'desktopPromo4.webp':   { width: 392, height: 230, lazy: true },
  'desktopPromo5.webp':   { width: 392, height: 230, lazy: true },
  'desktopPromo6.webp':   { width: 392, height: 230, lazy: true },

  'service1.webp':        { width: 320, height: 208, lazy: true },
  'service2.webp':        { width: 320, height: 208, lazy: true },
  'service3.webp':        { width: 320, height: 208, lazy: true },
  'service4.webp':        { width: 320, height: 208, lazy: true },
  'knowMore.webp':        { width: 20,  height: 20,  lazy: true },

  'horizontal.webp':      { width: 280, height: 7,   lazy: true },
  'vertical.webp':        { width: 7,   height: 80,  lazy: true },
  'vertical2.webp':       { width: 7,   height: 80,  lazy: true },
};

const FILES = ['index.html', 'promo.html', 'services.html', 'error.html'];

FILES.forEach(file => {
  if (!fs.existsSync(file)) return;
  let html = fs.readFileSync(file, 'utf8');

  html = html.replace(/<img([^>]*)>/g, (match, attrs) => {
    // get filename from src
    const srcMatch = attrs.match(/src=["']([^"']+)["']/);
    if (!srcMatch) return match;
    const filename = srcMatch[1].split('/').pop();
    const info = ATTRS[filename];
    if (!info) return match;

    // skip if already has width and height
    if (/\bwidth=/.test(attrs) && /\bheight=/.test(attrs)) return match;

    let newAttrs = attrs;
    if (!/\bwidth=/.test(newAttrs))  newAttrs += ` width="${info.width}"`;
    if (!/\bheight=/.test(newAttrs)) newAttrs += ` height="${info.height}"`;
    if (info.lazy && !/\bloading=/.test(newAttrs)) newAttrs += ` loading="lazy"`;

    return `<img${newAttrs}>`;
  });

  fs.writeFileSync(file, html);
  console.log(`✓ ${file} updated`);
});
