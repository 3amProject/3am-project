module.exports = {
    env: {
        browser: true,
        es6: true
    },
    rules : {
        "react/no-direct-mutation-state": "warn", // state 직접 수정 금지
        "react/jsx-curly-brace-presence": "warn" // jsx 내 불필요한 중괄호 금지
    },
    extends: ['airbnb', 'plugin:prettier/recommended'],
    parser: '@babel/eslint-parser'
}