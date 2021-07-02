export default function imgFilenames(imageCount) {
  const imgFilenames = [];
  for (let i = 1; i <= imageCount; i++) {
    imgFilenames.push(`${i < 10 ? "0" + i : i}.jpg`);
  }
  return imgFilenames;
}
