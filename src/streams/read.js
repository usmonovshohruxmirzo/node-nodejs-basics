import { createReadStream } from "fs";
import path from "path";

const read = async () => {
  const filePath = path.join("src", "streams", "files", "fileToRead.txt");
  const stream = createReadStream(filePath, "utf-8");

  stream.pipe(process.stdout);

  stream.on("error", (err) => {
    console.error(`Error reading file: ${err.message}`);
  });
};

await read();
