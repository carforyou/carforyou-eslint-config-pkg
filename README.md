# CAR FOR YOU Example

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
