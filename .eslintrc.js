module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    globals: {
        JSX: true,
        React: true,
    },
    plugins: ['prettier', '@typescript-eslint', 'simple-import-sort'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:security/recommended',
        'plugin:react-hooks/recommended',
        'next',
        'next/core-web-vitals',
    ],
    rules: {
        'no-case-declarations': 'off',
        'no-console': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/no-unescaped-entities': 'off',
        'react-hooks/exhaustive-deps': [
            'warn',
            {
                additionalHooks: 'useRecoilCallback|useRecoilTransaction_UNSTABLE',
            },
        ],
        'unicorn/filename-case': 'off',
        'next/no-img-element': 'off',
        'no-unused-vars': 'warn',
        'security/detect-object-injection': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
    },
}
