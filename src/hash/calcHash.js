import { createHash } from "crypto";
import { createReadStream } from "fs";
import path from "path";

const calculateHash = async () => {
  const filePath = path.join(
    "src",
    "hash",
    "files",
    "fileToCalculateHashFor.txt"
  );
  const fileStream = createReadStream(filePath);
  const hash = createHash("sha256");

  fileStream.pipe(hash);

  hash.on("finish", (err) => console.log(hash.digest("hex")));

  fileStream.on("error", (err) => {
    console.error("Error reading the file:", err.message);
  });
};

await calculateHash();
