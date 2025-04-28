import { promises as fs } from "fs";
import path from "path";

const remove = async () => {
  const filePath = path.join("src", "fs", "files", "fileToRemove.txt");
  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
