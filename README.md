# vue-flagpack

Gorgeous flag icons for your digital product.

[flagpack.xyz](https://flagpack.xyz)

> A project made by [Yummygum](https://youtube.com)

## Installation

```bash
npm install vue-flagpack
```

## Use
As a plugin
```js
import Vue from 'vue'
import Flag from 'vue-flagpack'

Vue.use(Flag, {
  name: 'Flag'
})
```

Use in your template:
```html
<template>
  <vue-flagpack code="NL" />
</template>
```

Or import straight away
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

Or use via UNPKG network
```html
<script src="https://unpkg.com/vue-flagpack@0.2.17/dist/vue-flag-rollup.cjs.js"></script>
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

| key   | value   | required | default |
|-------|-------|------|------|
| name |  String | false | vue-flagpack |



## Available component options

| key   | value   | required | default | format |
|-------|-------|------|------|------|
| code |  String | false | none | see all codes |
| size |  String | false | l | 's', 'm' or 'l' |
| className |  String | false | - | - |
| hasDropShadow |  boolean | false | false | - |
| hasBorder |  boolean | false | true | - |
| hasBorderRadius | boolean | false | true | - |
| customBorderRadius |  String | false | - | - |
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
git push --tags origin master
```
After that you'll need to publish to npm.
```
npm publish
```

When you're confident with the release, make sure the version tag is also released at GitHub.
