module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:import/warnings",
  ],
  plugins: [
    "@typescript-eslint",
    "react",
    "simple-import-sort",
    "react-hooks",
    "prettier",
  ],
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^\\u0000"],
          ["^react$", "^react-.*|$", "^@?\\w"],
          ["^(components|containers|lang|lib|layouts|pages|api)(/.*|$)"],
          [
            "^(styles|public|icons)(/.*|$)",
            ".*\\.module\\.scss|$",
            ".*\\.svg|$",
          ],
          ["^\\.", "^(types|domain)(/.*|$)"],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
  },
  globals: {
    React: "writable",
  },
};
