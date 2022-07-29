# Flagpack

Flagpack contains 260+ flag icons to easily use within your code project. Flagpack is an open source project and available for JavaScript frameworks/libraries Angular, Vue and React.

![Flagpack. 260+ easily implementable flag icons to use in your design or code project. Open Source. Available for Sketch, Figma, Angular, Vue, and React. [www.flagpack.xyz](https://www.flagpack.xyz). Made with love by Yummygum. Graphic showing a list with the flags of Argentina, Croatia, Estonia, Kenia, Netherlands, and Scotland.](https://flagpack.xyz/meta-image.png)

[View documentation on flagpack.xyz](https://flagpack.xyz/docs/)

## vue-flagpack
<p>
  <a href="https://www.npmjs.com/package/vue-flagpack" target="_blank">
    <img src="https://img.shields.io/npm/v/vue-flagpack.svg?style=flat" alt="" />
  </a>
  <a href="https://www.npmjs.com/package/vue-flagpack" target="_blank">
    <img src="https://img.shields.io/npm/dt/vue-flagpack.svg?style=flat" alt="" />
  </a>
  <a href="https://github.com/sponsors/Yummygum" target="_blank">
    <img src="https://img.shields.io/badge/Support-♥-E94AAA" alt=""  />
  </a>
  <a href="https://twitter.com/flagpack" target="_blank">
    <img src="https://img.shields.io/twitter/follow/flagpack.svg?style=social&label=follow" alt="" />
  </a>
</p>
Flagpack for Vue now is supporting Vue 3.x, and recreated with ViteJS

## Installation

```bash
npm install vue-flagpack
```

## Usage
### As a plugin
```js
import Vue from 'vue'
import Flag from 'vue-flagpack'

Vue.use(Flag, {
  name: 'Flag'
})
```

In your template:
```jsx
<template>
  <vue-flagpack code="NL" />
</template>
```

### Import straight away
```js
import { Flag } from 'vue-flagpack'

Vue.component('flag-nl', {
  components: {
    Flag
  },
  template: `
    <Flag code="NL" />
  `
})
```

### Via UNPKG network
```html
<script src="https://unpkg.com/vue-flagpack@latest/dist/vue-flag-rollup.cjs"></script>
<script>
const instance = new Vue({
  el: '#app',
  components: {
    'Flag': Flag.Flag
  },
})

// or
instance.use(Flag)
</script>
```

## Available plugin options

| Key   | Value   | Required | Default |
|-------|-------|------|------|
| name |  String | false | vue-flagpack |



## Available component configurations — Props

| Key   | Value   | Required | Default | Format |
|-------|-------|------|------|------|
| code |  String | false | 'NL' | [See all codes](https://flagpack.xyz/docs/flag-index/) |
| size |  String | false | 'L' | 'S', 'M' or 'L' |
| className |  String | false | - | - |
| hasDropShadow |  Boolean | false | false | - |
| hasBorder |  Boolean | false | true | - |
| hasBorderRadius | Boolean | false | true | - |
| gradient |  String | false | '' | 'top-down', 'real-linear' or 'real-circular' |



## Build Dist

```bash
# install dependencies
npm install

# build for prod
npm run build
```

## Releasing
To release a new version you'll need to make sure all changes commits are done and pushed. After that you'll need to decide which release type you want to use. The release types are; patch (0.0.1), major (0.1.0), or minor (1.0.0).
```
npm version <release_type>
```
This will update the version number in the `package.json`, and will add a git tag automatically. Next you'll need to push the git tag to the remote.
```
git push --tags origin main
```
After that you'll need to publish to npm.
```
npm publish
```

When you're confident with the release, make sure the version tag is also released at GitHub.

## Support

[Frequently Asked Questions](https://flagpack.xyz/support/)

[Documentation](https://flagpack.xyz/docs/)

## Releases

You can find a changelog of Flagpack's releases on the [Releases page](https://github.com/Yummygum/vue-flagpack/releases) on GitHub.

## Contribute

If you're interested in contributing to this project, great! Please see the [contributing document](CONTRIBUTING.md).

## License

Flagpack is an open source project published under a [MIT license](LICENSE).
