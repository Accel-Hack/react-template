# React × TypeScript with Webpack

## Prerequisites

```bash
$ node -v
# v18.13.0

$ npm -v
# 8.19.3

$ yarn -v
# 1.22.19
```

if yarn is not installed yet, install it globally.

```bash
$ npm install -g yarn
```

## Install Dependencies

```bash
# Initialize repository
$ yarn init

# Install dependencies
$ yarn add react react-dom @types/react @types/react-dom

# Install dependencies for development
$ yarn add -D webpack webpack-cli webpack-dev-server
$ yarn add -D babel-loader @babel/core @babel/preset-env @babel/preset-react
$ yarn add -D typescript ts-loader 
$ yarn add -D sass css-loader style-loader sass-loader
```

## Set Webpack

```shell
$ touch webpack.config.js
$ vim webpack.config.js
# Edit config file (ex. ./webpack.config.js)
```

## Make React Components

### make components

```shell
$ mkdir src
$ touch src/index.tsx
$ touch src/App.tsx
# Edit *.tsx files (ex. ./src/*)
```

### make html

```shell
$ mkdir dist
$ touch dist/index.html
# Edit html file (ex. ./dist/index)
```

## Configure Typescript

```shell
$ touch tsconfig.json
# Edit config file (ex. ./tsconfig.json)
```

## Add Commands

```shell
$ vim ./package.json
# Edit scripts (ex. ./package.json)
```