<p align="center">
  <a href="https://github.com/coderdiaz/vue-status-indicator">
    <img src="https://vuejs.org/images/logo.png" width="120">
  </a>
  <h2 align="center">&lt;vue-status-indicator /&gt;</h2>
</p>

<p align="center">
A Vue component to show status indicator as colored dots. <a href="https://coderdiaz.me/vue-status-indicator/">Demo</a>. This is a fork of <a href="https://github.com/tnhu/status-indicator">status-indicator</a> with a few changes for use with Vue.js.
</p>

<p align="center">
    <a href="https://npmjs.com/package/vue-status-indicator"><img src="https://img.shields.io/npm/dt/vue-status-indicator.svg?style=flat-square"></a>
    <a href="https://github.com/coderdiaz/vue-status-indicator/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square"></a>
    <a href="https://github.com/coderdiaz/vue-status-indicator/stargazers"><img src="https://img.shields.io/github/stars/coderdiaz/vue-status-indicator.svg?style=flat-square"></a>
    <a href="http://npmjs.com/package/vue-status-indicator"><img src="https://img.shields.io/npm/v/vue-status-indicator.svg?style=flat-square"></a>
    <a href="http://npmjs.com/package/vue-status-indicator"><img src="https://img.shields.io/npm/dm/vue-status-indicator.svg?style=flat-square"></a>
    <a href="https://www.paypal.me/coderdiaz"><img src="https://img.shields.io/badge/invite-coffee-red.svg?style=flat-square"></a>
</a>

---

![Screenshot](https://i.imgur.com/v1vJ3Ue.gif)

## Install

```bash
npm i -S vue-status-indicator
```

### Donate

<a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/coderdiaz"><img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:5px">Buy me a coffee</span></a>

## Usage
Import status-indicator.css in your CSS or JavaScript.

CSS:

```css
@import 'vue-status-indicator'
```

JavaScript:

```javascript
import 'vue-status-indicator/styles.css'
```

Import component `status-indicator`.

```javascript
import { StatusIndicator } from 'vue-status-indicator'
```

HTML/Vue:

```html
<template>
  <status-indicator active pulse></status-indicator>
</template>
<script>
  import { StatusIndicator } from 'vue-status-indicator'
  export default {
    components: {
      StatusIndicator
    }
  }
</script>
```

Usage in Browser:
```
https://unpkg.com/vue-status-indicator@latest/dist/vue-status-indicator.min.js
https://unpkg.com/vue-status-indicator@latest/styles.css
```
**Example**: https://jsfiddle.net/coderdiaz/k038cdf3/

### API

```html
<status-indicator active|positive|intermediary|negative pulse></status-indicator>
```

You are able to customize the dot by CSS variables, default configuration is listed below.

```css
:root {
  --status-indicator-size: 10px;
  --status-indicator-animation-duration: 2s;

  --status-indicator-color: rgb(216, 226, 233);
  --status-indicator-color-semi: rgba(216, 226, 233, .5);
  --status-indicator-color-transparent: rgba(216, 226, 233, 0);

  --status-indicator-color-active: rgb(0, 149, 255);
  --status-indicator-color-active-semi: rgba(0, 149, 255, .5);
  --status-indicator-color-active-transparent: rgba(0, 149, 255, 0);

  --status-indicator-color-positive: rgb(75, 210, 143);
  --status-indicator-color-positive-semi: rgba(75, 210, 143, .5);
  --status-indicator-color-positive-transparent: rgba(75, 210, 143, 0);

  --status-indicator-color-intermediary: rgb(255, 170, 0);
  --status-indicator-color-intermediary-semi: rgba(255, 170, 0, .5);
  --status-indicator-color-intermediary-transparent: rgba(255, 170, 0, 0);

  --status-indicator-color-negative: rgb(255, 77, 77);
  --status-indicator-color-negative-semi: rgba(255, 77, 77, .5);
  --status-indicator-color-negative-transparent: rgba(255, 77, 77, 0);
}
```

## Development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


### Supported Browsers

Latest versions of Chrome/Firefox/Safari/IE/Opera.

### LICENSE

MIT
