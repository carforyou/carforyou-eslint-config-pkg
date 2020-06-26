# CAR FOR YOU Eslint config

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Usage

```
npm install @carforyou/eslint-config
```

Add a `lint` script to `package.json`:

```
  "lint": "eslint --ext ts,js,tsx,jsx,json ."
```

Add a `format` script to `package.json` to be able to use auto fix:

```
  "format": "npm run lint -- --fix",
```

### ESLint configuration

Create `.eslintrc.js` in the root of the project:

```
  module.exports = {
    extends: ["@carforyou/eslint-config"],
  }
```

This package provides multiple eslint configurations. They build on top of one another so there's no need to include multiple ones.

- If you're working on plain typescript project use the default:
  ```
  @carforyou/eslint-config
  ```
- If you're working on react project use:
  ```
  @carforyou/eslint-config/react
  ```
- For nextjs applications use:
  ```
  @carforyou/eslint-config/next
  ```

### Prettier configuration

Create `.prettierrc.js` in the root of the project:

```
  module.exports = {
    extends: ["@carforyou/eslint-config/prettier"],
  }
```

## VSCode integration

### ESlint

There's an [official eslint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) available to get notifications about linter errors.

#### Auto-fixing problems on save

You can add:

```
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

to your `settings.json` to fix fixable eslint errors on file save. This will only fix things that can be auto-fixed. It also might take some time.

### Prettier

There is a [pretty good prettier formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) available. This will add `prettier` as an option to format document via command palette.

You can also set prettier as default formatter for javascript, typescript and react files. Just add:

```
"[typescript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

to your `settings.json`.

#### Auto-formatting on save

You can enable formatting on save under `Settings` -> `Text Editor` -> `Formatting`.

## Development

```
npm run build
```

You can link your local npm package to integrate it with any local project:

```
cd carforyou-eslint-config
npm run build

cd carforyou-listings-web
npm link ../carforyou-eslint-config/pkg
```

## Release a new version

New versions are released on the ci using semantic-release as soon as you merge into master. Please
make sure your merge commit message adheres to the corresponding conventions.

## Circle CI

You will need to enable the repository in circle CI ui to be able to build it.

For slack notifications to work you will need to provide the token in circle settings.
