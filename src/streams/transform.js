import { Transform } from "stream";

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const reversedText = chunk.toString().split("").reverse().join("");
      this.push(reversedText);
      callback();
    },
  });

  console.log(
    "Type something and it will be reversed. Press Ctrl+D to finish."
  );

  process.stdin.pipe(reverseTransform).pipe(process.stdout);

  process.stdin.on("error", (err) => {
    console.error(`Error with stdin: ${err.message}`);
  });

  reverseTransform.on("error", (err) => {
    console.error(`Error in transformation: ${err.message}`);
  });
};

await transform();
