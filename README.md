# yarn-plugin-post-install

Run a `postinstallAll` script after installation (`yarn install`). Works for Yarn v2, v3 and v4.

## Installation

```shell
yarn plugin import https://raw.githubusercontent.com/rbnayax/yarn-plugin-postinstall/main/bundles/%40yarnpkg/plugin-post-install.js
```

## Example

```json
{
  "name": "yarn-plugin-post-install",
  "scripts": {
    "postinstallAll": "husky install"
  }
}
```
