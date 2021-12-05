module.exports = {
    env: {
        browser: false,
        es2020: true,
        node: true,
    },
    extends: ["airbnb-base"],
    parserOptions: {
        ecmaVersion: 11,
        sourceType: "module",
    },
    rules: {
        "no-console": 0,
        "linebreak-style": 0,
        "class-methods-use-this": "off", // desabilita o this nas classes
        "no-param-reassign": "off", // permite fazer alterações nos parametros de função
        camelcase: "off", // desabilita camelsase nas variaveis
        "no-unused-vars": ["error", {argsIgnorePattern: "next"}], // libera declarar variavel next sem uso
    },
};
