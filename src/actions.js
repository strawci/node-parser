class ActionParser {
    constructor(parser) {
        this.parser = parser;
    }

    parseFunction(action) {
        return this.getActionsFrom("function " + action.arg);
    }

    parseAction(actionString) {
        const actionType = actionString.split(":")[0];
        const actionArg = actionString.replace(actionType + ":", "").trim();

        return {
            type: actionType,
            arg: actionArg,
        };
    }

    getActionsFrom(path) {
        const actions = [];
        const actionList = this.parser.getList(path);

        for (const string of actionList) {
            const action = this.parseAction(string);
            if (action.type == "function") {
                for (const subaction of this.parseFunction(action)) {
                    actions.push(subaction);
                }
            } else {
                actions.push(action);
            }
        }

        return actions;
    }
}

module.exports = ActionParser;
