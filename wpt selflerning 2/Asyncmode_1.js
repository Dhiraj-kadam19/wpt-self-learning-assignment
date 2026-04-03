const fs = require('fs');
try {
    fs.writeFileSync('sample.txt', 'Hello, this is sample file content!');
    console.log("File written successfully (Sync)");
} catch (err) {
    console.log("Error writing file:", err);
}
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    console.log("\nFile Content (Async Read):");
    console.log(data);
});