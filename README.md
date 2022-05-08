# yarn-plugin-post-install-dev

Run a `postinstallDev` script after installation (`yarn install`). Works for Yarn v2 and v3.
The script will only be run if there is no CI env variable defined.

## Installation

```shell
yarn plugin import https://raw.githubusercontent.com/rbnayax/yarn-plugin-postinstall-dev/main/bundles/%40yarnpkg/plugin-post-install-dev.js
```

## Example

```json
{
  "name": "yarn-plugin-post-install-dev",
  "scripts": {
    "postinstallDev": "husky install"
  }
}
```
