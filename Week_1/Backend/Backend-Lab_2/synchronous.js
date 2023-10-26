const fs = require("fs");
const os = require("os");

try {
  const data = fs.readFileSync("sample.txt", "utf8");
  console.log(data);
} catch (err) {
  console.log(err);
}

try {
  fs.writeFileSync("output.txt", "Hello from synchronous.js\n", "utf8");
} catch (err) {
  console.log(err);
}

var hostname = os.hostname();
var platform = os.platform();
var cpus = os.cpus();

console.log(`Hostname: ${hostname}`);
console.log(`Platform: ${platform}`);
console.log(`CPUs: ${JSON.stringify(cpus)}`);

try {
  fs.writeFileSync(
    "systemInfo.txt",
    `Hostname: ${hostname}\nPlatform: ${platform}\n`,
    "utf8"
  );
} catch (err) {
  console.log(err);
}
