module.exports = {
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    env: {
        es6: true,
        browser: true,
        commonjs: true,
        mocha: true,
        node: true,
    },
    plugins: ['svelte3', 'html'],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte3/svelte3',
        },
    ],
    rules: {
        'comma-dangle': ['error', 'always-multiline'],
    },
    settings: {},
    extends: ['plugin:prettier/recommended'],
}
