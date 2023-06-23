# Extra Plugins

## Prettier

```shell
$ yarn add -D prettier 
$ touch ./prettier.config.js
# Edit config file (ex. ./prettier.config.js)
```

```shell
$ vim ./package.json
# Edit scripts (ex. ./package.json)
# Add command for prettier
```

## ESLint

```shell
$ yarn add -D eslint eslint-config-prettier stylelint stylelint-prettier stylelint-config-prettier stylelint-scss stylelint-config-recess-order stylelint-config-recommended-scss @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-import eslint-plugin-simple-import-sort eslint-plugin-unused-imports
```

```shell
$ touch ./.eslintrc.js
# Edit config file (ex. ./.eslintrc.js)

$ touch ./stylelint.config.js
# Edit config file (ex. ./stylelint.config.js)
```

## Git pre-commit

```shell
$ yarn add -D pre-commit
# Add pre-commit block to ./package.json
```