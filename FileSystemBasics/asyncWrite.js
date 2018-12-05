const fs = require("fs");
const filename = ("todo2.txt");
const filepath = "/Users/it170156/FileSystemBasics/";

let content = "- Java üben\n";
content += "- Node.js üben\n";
content += "- Gemüse einkaufen\n";

fs.writeFile(filepath + filename, content, (err) => {
    if(err) {
        console.error(err.message);
    } else {
        console.log("File " + filepath + filename + " has been saved!");
    }
});