# Vue Flag Pack

> A project made by Yummygum

## Installation

```bash
npm install vue-flag-pack
```

## Use
Use as a plugin
```js
import Vue from 'vue'
import Flag from 'vue-flag-pack'
Vue.use(Flag, options)
```

Or import straight away
```js
import Flag from 'vue-flag-pack'

Vue.component('example', {
  components: {
    Flag
  },
  template: `
    <Flag code="NL" />
  `
})
```

Use in your template:
```html
<template>
  <vue-flag-pack code="NL" />
</template>
```

## Available plugin options

| key   | value   | required | default |
|-------|-------|------|------|
| name |  String | false | vue-flag-pack |



## Available component options

| key   | value   | required | default | format |
|-------|-------|------|------|------|
| size |  String | false | l | 's', 'm' or 'l' |
| code |  String | true | none | see all codes |
| dropshadow |  boolean | false | false | - |
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
