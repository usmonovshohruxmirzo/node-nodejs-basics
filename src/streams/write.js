import { createWriteStream } from "fs";
import path from "path";

const write = async () => {
  const filePath = path.join("src", "streams", "files", "fileToWrite.txt");
  const writeStream = createWriteStream(filePath);

  process.stdin.pipe(writeStream);

  console.log(
    `Start typing to write into file ${filePath}. Press Ctrl+D to finish.`
  );

  process.stdin.on("error", (err) => {
    console.error(`Error with stdin: ${err.message}`);
  });

  writeStream.on("error", (err) => {
    console.error(`Error writing to file: ${err.message}`);
  });
};

await write();
