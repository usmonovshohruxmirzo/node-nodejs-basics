import dotenv from "dotenv";
dotenv.config();

const parseEnv = () => {
  const envVariables = process.env;

  const filteredEnvVars = Object.keys(envVariables)
    .filter((key) => key.startsWith("RSS_"))
    .map((key) => `${key}=${envVariables[key]}`)
    .join("; ");

  console.log(filteredEnvVars);
};

parseEnv();