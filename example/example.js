const Parser = require("../src");
const Path = require("path");

const parser = new Parser(Path.join(__dirname));

// Get dependencies
console.log(parser.getDependencies());

// Get initial actions
console.log(parser.getInitionActions());

// Get actions for an specific branch
console.log(parser.getBranchActions("main"));

// Get secrets
console.log("Deploy key: " + parser.getDeployKey());
console.log("Project ID: " + parser.getProjectID());
