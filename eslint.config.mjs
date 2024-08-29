import globals from 'globals'
import js from '@eslint/js'
import react from 'eslint-plugin-react';
import jest from 'eslint-plugin-jest';

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.node,
      },
      ecmaVersion: "latest",
    },
    plugins: {
      react: react,
      jest: jest,
    },
    rules: {
      "indent": [
        "error",
          2
        ],
      "linebreak-style": [
        "error",
        "unix"
      ],
      "quotes": [
        "error",
        "single"
      ],
      "semi": [
        "error",
        "never"
      ],
      "eqeqeq": "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": [
        "error", "always"
      ],
      "arrow-spacing": [
        "error", { "before": true, "after": true }
      ],
      "no-console": "error",
      "react/prop-types": 0
    },
  },
  { 
    ignores: ["dist/**", "build/**"],
  }
]