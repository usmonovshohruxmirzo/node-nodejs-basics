import { spawn } from "child_process";
import path from "path";

const spawnChildProcess = async (args) => {
  const scriptPath = path.resolve("src", "cp", "files", "script.js");

  const child = spawn("node", [scriptPath, ...args]);

  process.stdin.pipe(child.stdin);
  
  child.stdout.pipe(process.stdout);

  child.stderr.on("data", (data) => console.error(`Child stderr: ${data}`));

  child.on("close", (code) => {
    code === 0
      ? console.log("Child process finished successfully.")
      : console.log(`Child process exited with code ${code}`);
  });

  await new Promise((resolve, reject) => {
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(`Child process failed with exit code: ${code}`);
    });
  });
};

spawnChildProcess(["arg1", "arg2", "arg3"]);
