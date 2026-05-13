import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = './public/images';

async function optimizeImages() {
  try {
    const files = fs.readdirSync(imagesDir);
    const pngFiles = files.filter(f => f.endsWith('.png'));

    console.log(`Found ${pngFiles.length} PNG images to convert and optimize...\n`);

    for (const file of pngFiles) {
      const inputPath = path.join(imagesDir, file);
      const outputName = file.replace('.png', '.webp');
      const outputPath = path.join(imagesDir, outputName);

      console.log(`Optimizing: ${file} -> ${outputName}`);
      
      const info = await sharp(inputPath)
        .webp({ quality: 85, effort: 6 }) // Convert to webp with high quality and max compression effort
        .toFile(outputPath);

      const originalSize = (fs.statSync(inputPath).size / (1024 * 1024)).toFixed(2);
      const optimizedSize = (info.size / (1024 * 1024)).toFixed(2);
      const reduction = (((fs.statSync(inputPath).size - info.size) / fs.statSync(inputPath).size) * 100).toFixed(1);

      console.log(`✓ Done! Size: ${originalSize}MB -> ${optimizedSize}MB (-${reduction}%)\n`);
    }

    console.log('🎉 All images successfully converted to optimized WebP format!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
