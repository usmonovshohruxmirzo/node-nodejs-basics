import { promises as fs } from "fs";
import path from "path";

const copy = async () => {
  const srcFolder = path.join("src", "fs", "files");
  const destFolder = path.join("src", "fs", "files_copy");

  try {
    await fs.access(srcFolder);
    await fs.access(destFolder);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.message == "FS operation failed") {
      throw err;
    }
    try {
      await fs.cp(srcFolder, destFolder, { recursive: true });
    } catch (err) {
      throw new Error("FS operation failed");
    }
  }
};

await copy();
