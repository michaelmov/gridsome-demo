module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["eslint:recommended", "plugin:vue/recommended"],
  rules: {
    "no-trailing-spaces": ["error"]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
