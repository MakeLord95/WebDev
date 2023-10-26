// Part 1

const fs = require("fs");
const os = require("os");

fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(`File contents: ${data}`);
});

fs.writeFile("output.txt", "Hello World!\n", (err) => {
  if (err) console.log(err);
  console.log("The file has been saved!");
});

// Part 3

var hostname = os.hostname();
var platform = os.platform();
var cpus = os.cpus();

console.log(`Hostname: ${hostname}`);
console.log(`Platform: ${platform}`);

// Part 4

fs.writeFile(
  "systemInfo.txt",
  `Hostname: ${hostname}\nPlatform: ${platform}\nCPU: ${JSON.stringify(
    cpus
  )}\n`,
  (err) => {
    if (err) console.log(err);
    console.log("The file has been saved!");
  }
);

// Part 5
/**
 * The reason why the output is the following:
 * Hostname: Make-PC
 * Platform: win32
 * File contents: Minim esse qui culpa fugiat in sit qui ea.
 * The file has been saved!
 * The file has been saved!
 *
 * is because writeFile and readFile are asynchronous functions, meaning they are non-blocking.
 */
