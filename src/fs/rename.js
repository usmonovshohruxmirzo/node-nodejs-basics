import { promises as fs } from "fs";
import path from "path";

const rename = async () => {
  const oldPath = path.join("src", "fs", "files", "wrongFilename.txt");
  const newPath = path.join("src", "fs", "files", "properFilename.txt");

  try {
    await fs.access(oldPath);
  } catch {
    throw new Error("FS operation failed");
  }

  try {
    await fs.access(newPath);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw new Error("FS operation failed");
    }
  }

  try {
    await fs.rename(oldPath, newPath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();