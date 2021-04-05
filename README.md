# 🍓 StrawCI Parser

This package fulfills the function of parsing the secret.yml and strawci.yml configuration files and obtaining all the actions that will be executed on the deployment server.

## 👷 Constructor

```javascript
const Parser = require("@strawci/parser");
const parser = new Parser("path of .strawci directory");
```

## 📝 Action Getters

```javascript
// Get list of project dependencies
parser.getDependencies();

// Get list of initial actions
parser.getInitionActions();

// Get list of actions to be executed for an specific branch
parser.getBranchActions("main");
```

### 🔒 Secret Getters

```javascript
// Get Project ID
parser.getProjectID();

// Get Deploy Key
parser.getDeployKey();
```

### ❤️ The End

Made with Love by [Sammwy](https://twitter.com/sammwy)</a>
