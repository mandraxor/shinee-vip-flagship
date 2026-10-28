import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const uploadedDir =
  "C:/Users/Grace/.gemini/antigravity/brain/2f31261c-5eb9-4d0f-a0b1-1d5c34b67fc8/.user_uploaded";
const publicMaximDir = path.resolve("public/images/maxim");
const publicEditorialDir = path.resolve("public/images/editorial");

fs.mkdirSync(publicMaximDir, { recursive: true });
fs.mkdirSync(publicEditorialDir, { recursive: true });

const files = [
  {
    src: "media_1793144023050_8bc99b6b.jpg",
    spreadOut: "maxim-spread-poolside.jpg",
    portraitOut: "shinee-poolside-resort.jpg",
    cropRatio: { leftOffset: 0.029, widthRatio: 0.468, topOffset: 0.0, heightRatio: 0.968 },
  },
  {
    src: "media_1793144023180_d13e609f.png",
    spreadOut: "maxim-spread-close-portrait.jpg",
    portraitOut: "shinee-diamond-pendant.jpg",
    cropRatio: { leftOffset: 0.0, widthRatio: 0.496, topOffset: 0.0, heightRatio: 0.995 },
  },
  {
    src: "media_1793144023277_65fd0791.png",
    spreadOut: "maxim-spread-villa.jpg",
    portraitOut: "shinee-villa-swimwear.jpg",
    cropRatio: { leftOffset: 0.028, widthRatio: 0.468, topOffset: 0.004, heightRatio: 0.966 },
  },
  {
    src: "media_1793144023395_dc61f6b2.png",
    spreadOut: "maxim-spread-cobalt-gown.jpg",
    portraitOut: "shinee-cobalt-evening.jpg",
    cropRatio: { leftOffset: 0.0, widthRatio: 0.496, topOffset: 0.0, heightRatio: 0.995 },
  },
];

async function run() {
  for (const item of files) {
    const inputPath = path.join(uploadedDir, item.src);
    const meta = await sharp(inputPath).metadata();
    const w = meta.width || 1200;
    const h = meta.height || 800;

    // 1. Save full Maxim spread in high quality JPEG
    await sharp(inputPath)
      .jpeg({ quality: 92 })
      .toFile(path.join(publicMaximDir, item.spreadOut));

    // 2. Extract the left-side photograph cleanly
    const left = Math.round(w * item.cropRatio.leftOffset);
    const top = Math.round(h * item.cropRatio.topOffset);
    const extractW = Math.round(w * item.cropRatio.widthRatio);
    const extractH = Math.round(h * item.cropRatio.heightRatio);

    await sharp(inputPath)
      .extract({ left, top, width: extractW, height: extractH })
      .jpeg({ quality: 94 })
      .toFile(path.join(publicEditorialDir, item.portraitOut));

    console.log(
      `Processed ${item.src} (${w}x${h}) -> ${item.spreadOut} & ${item.portraitOut}`
    );
  }

  // Crop 5: Tight luxury jewelry & portrait crop from image 2
  const img2Path = path.join(uploadedDir, files[1].src);
  const m2 = await sharp(img2Path).metadata();
  await sharp(img2Path)
    .extract({
      left: Math.round((m2.width || 1200) * 0.03),
      top: Math.round((m2.height || 800) * 0.12),
      width: Math.round((m2.width || 1200) * 0.44),
      height: Math.round((m2.height || 800) * 0.72),
    })
    .jpeg({ quality: 94 })
    .toFile(path.join(publicEditorialDir, "shinee-signature-glamour.jpg"));

  // Crop 6: Atmospheric lounge crop from image 4
  const img4Path = path.join(uploadedDir, files[3].src);
  const m4 = await sharp(img4Path).metadata();
  await sharp(img4Path)
    .extract({
      left: Math.round((m4.width || 1200) * 0.02),
      top: Math.round((m4.height || 800) * 0.04),
      width: Math.round((m4.width || 1200) * 0.46),
      height: Math.round((m4.height || 800) * 0.78),
    })
    .jpeg({ quality: 94 })
    .toFile(path.join(publicEditorialDir, "shinee-vegas-nights.jpg"));

  // Crop 7: Macro on Iced-out "SHINEE" diamond pendant
  await sharp(img2Path)
    .extract({
      left: Math.round((m2.width || 1200) * 0.14),
      top: Math.round((m2.height || 800) * 0.46),
      width: Math.round((m2.width || 1200) * 0.28),
      height: Math.round((m2.height || 800) * 0.38),
    })
    .jpeg({ quality: 94 })
    .toFile(path.join(publicEditorialDir, "shinee-diamond-macro.jpg"));

  // Crop 8: Upper body close-up from villa shoot (image 3)
  const img3Path = path.join(uploadedDir, files[2].src);
  const m3 = await sharp(img3Path).metadata();
  await sharp(img3Path)
    .extract({
      left: Math.round((m3.width || 1200) * 0.12),
      top: Math.round((m3.height || 800) * 0.02),
      width: Math.round((m3.width || 1200) * 0.36),
      height: Math.round((m3.height || 800) * 0.65),
    })
    .jpeg({ quality: 94 })
    .toFile(path.join(publicEditorialDir, "shinee-glamour-pose.jpg"));

  // Crop 9: Cobalt silk profile close-up (image 4)
  await sharp(img4Path)
    .extract({
      left: Math.round((m4.width || 1200) * 0.18),
      top: Math.round((m4.height || 800) * 0.02),
      width: Math.round((m4.width || 1200) * 0.31),
      height: Math.round((m4.height || 800) * 0.58),
    })
    .jpeg({ quality: 94 })
    .toFile(path.join(publicEditorialDir, "shinee-sapphire-profile.jpg"));

  console.log("All Maxim spreads and editorial portraits processed successfully.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
