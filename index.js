const fs = require("fs");
const path = require("path");

function main() {
    fs.writeFileSync(path.resolve(__dirname, "./test.txt"), "Test" + new Date().getTime());
}

main();