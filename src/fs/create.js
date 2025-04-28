import { promises as fs } from "fs";
import path from "path";

const create = async () => {
  const filePath = path.join("src", "fs", "files", "fresh.txt");
  try {
    await fs.access(filePath);
    throw new Error("FS operation failed");
  } catch {
    try {
      await fs.writeFile(filePath, "I am fresh and young");
    } catch {
      throw new Error("FS operation failed");
    }
  }
};

await create();