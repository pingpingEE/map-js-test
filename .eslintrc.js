module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "semi": [
      "error",
      "always"
    ],
    "key-spacing": [
      "error",
      {"afterColon": true}
    ],
    "require-jsdoc": ["error", {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true
      }
    }],
    "no-console": [
      "error",
      {allow: ["warn", "error"]}
    ]
  }
};