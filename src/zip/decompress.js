import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { pipeline } from "stream/promises";
import path from "path";

const decompress = async () => {
  const archivePath = path.resolve("src/zip/files/archive.gz");
  const outputPath = path.resolve("src/zip/files/fileToCompress.txt");

  try {
    await pipeline(
      createReadStream(archivePath),
      createGunzip(),
      createWriteStream(outputPath)
    );
    console.log("Decompression completed successfully!");
  } catch (error) {
    console.error("Decompression failed:", error);
  }
};

await decompress();
