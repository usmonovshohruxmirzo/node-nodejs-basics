const parseArgs = () => {
  const args = process.argv.slice(2);
  const formattedArgs = [];

  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].replace("--", "");
    const value = args[i + 1];
    formattedArgs.push(`${propName} is ${value}`);
  }

  console.log(formattedArgs.join("; "));
};

parseArgs();