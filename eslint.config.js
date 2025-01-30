import antfu from "@antfu/eslint-config";

export default antfu({
  svelte: true,
  stylistic: {
    quotes: "double",
    overrides: {
      "style/eol-last": ["error", "never"],
      "style/semi": "never",
    },
  },
  rules: {
    "node/prefer-global/process": "off",
  },
});