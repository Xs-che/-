module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    /* 配置使用iview的时候不提示错误 */
    "vue/no-parsing-error": [2, {
      "x-invalid-end-tag": false
    }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};