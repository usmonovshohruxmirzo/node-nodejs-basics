import { Worker } from "worker_threads";
import os from "os";
import path from "path";

const performCalculations = async () => {
  const numCores = os.cpus().length;
  const workers = [];

  const workerFilePath = path.resolve("src", "wt", "worker.js");

  for (let i = 0; i < numCores; i++) {
    workers.push(
      new Promise((resolve) => {
        const worker = new Worker(workerFilePath);

        worker.postMessage(10 + i);

        worker.on("message", (data) => resolve({ status: "resolved", data }));
        worker.on("error", () => resolve({ status: "error", data: null }));
        worker.on("exit", (code) => {
          if (code !== 0) resolve({ status: "error", data: null });
        });
      })
    );
  }

  const settledResults = await Promise.all(workers);
  console.log(settledResults);
};

await performCalculations();