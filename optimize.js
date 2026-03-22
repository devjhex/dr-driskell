const sharp = require('sharp');
const { optimize } = require('svgo');
const fs = require('fs');
const path = require('path');

const IMAGE_DIRS = [
    'images',
    'desktopImages',
    'tabletImages',
    'promo-images',
    'service-images',
    'about-images',
];

async function convertToWebP(filePath) {
    const outPath = filePath.replace(/\.png$/i, '.webp');
    await sharp(filePath).webp({ quality: 82 }).toFile(outPath);
    const before = fs.statSync(filePath).size;
    const after = fs.statSync(outPath).size;
    const saving = (((before - after) / before) * 100).toFixed(1);
    console.log(`✓ ${path.basename(filePath)} → ${path.basename(outPath)} (${saving}% smaller)`);
}

function optimizeSVG(filePath) {
    const input = fs.readFileSync(filePath, 'utf8');
    const result = optimize(input, { path: filePath });
    const before = Buffer.byteLength(input);
    const after = Buffer.byteLength(result.data);
    const saving = (((before - after) / before) * 100).toFixed(1);
    fs.writeFileSync(filePath, result.data);
    console.log(`✓ ${path.basename(filePath)} optimized (${saving}% smaller)`);
}

async function run() {
    for (const dir of IMAGE_DIRS) {
        if (!fs.existsSync(dir)) continue;
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const filePath = path.join(dir, file);
            if (/\.png$/i.test(file)) await convertToWebP(filePath);
            if (/\.svg$/i.test(file)) optimizeSVG(filePath);
        }
    }

    // also optimize SVGs in images/ root
    const svgs = fs.readdirSync('images').filter(f => /\.svg$/i.test(f));
    for (const svg of svgs) optimizeSVG(path.join('images', svg));

    console.log('\nDone! Remember to update HTML/CSS src paths from .png → .webp');
}

run();
