import antfu from "@antfu/eslint-config"
import eslintPluginSvelte from "eslint-plugin-svelte"

export default antfu({
  svelte: true,
  stylistic: {
    quotes: "double",
    overrides: {
      "style/eol-last": ["error", "never"],
      "no-use-before-define": ["off"],
      "antfu/no-top-level-await": ["off"],
      "style/comma-dangle": ["error", { objects: "always-multiline", arrays: "always-multiline" }],
      "style/max-statements-per-line": ["off"],
    },
  },
  rules: {
    "node/prefer-global/process": "off",
    "svelte/html-self-closing": ["error", { normal: "never" }],
    "svelte/shorthand-attribute": ["error", { prefer: "always" }],
    "svelte/block-lang": ["error", { script: "ts", style: "scss" }],
    "svelte/require-each-key": "error",
    "svelte/html-quotes": ["error", { prefer: "double" }],
    "svelte/indent": "error",
  },
  plugins: {
    eslintPluginSvelte,
  },
})