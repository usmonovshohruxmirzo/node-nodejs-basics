import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream/promises";
import path from "path";

const compress = async () => {
  const filePath = path.resolve("src/zip/files/fileToCompress.txt");
  const outputPath = path.resolve("src/zip/files/archive.gz");

  try {
    await pipeline(
      createReadStream(filePath),
      createGzip(),
      createWriteStream(outputPath)
    );
    console.log("Compression completed successfully!");
  } catch (error) {
    console.error("Compression failed:", error);
  }
};

await compress();
