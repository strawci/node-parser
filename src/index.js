const ActionParser = require("./actions");
const Path = require("path");
const YAML = require("yamljs");

class StrawParser {
    constructor(strawCIDirectory) {
        this.mainConfig = YAML.load(Path.join(strawCIDirectory, "strawci.yml"));
        this.secret = YAML.load(Path.join(strawCIDirectory, "secret.yml"));

        this.actionParser = new ActionParser(this);
    }

    getList(section) {
        return (
            this.mainConfig[section] ||
            this.mainConfig[section.replace(/\_/g, " ")] ||
            []
        );
    }

    getInitionActions() {
        return this.actionParser.getActionsFrom("on inition");
    }

    getStopActions() {
        return this.actionParser.getActionsFrom("on stop");
    }

    getStartActions() {
        return this.actionParser.getActionsFrom("on start");
    }

    getProjectID() {
        return this.secret["project id"];
    }

    getDeployKey() {
        return this.secret["deploy key"];
    }

    getDependencies() {
        return this.getList("dependencies");
    }

    getBranchActions(branchName) {
        return this.actionParser.getActionsFrom(
            "on commit in branch " + branchName.toLowerCase()
        );
    }
}

module.exports = StrawParser;
