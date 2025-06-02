/** @type {import("prettier").Config} */
const config = {
    plugins: ["prettier-plugin-tailwindcss"],
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: "all",
    bracketSpacing: true,
    jsxBracketSameLine: false,
    noTrailingSpaces: true,
    proseWrap: "always",
    experimentalTernaries: true,
};

module.exports = config;
