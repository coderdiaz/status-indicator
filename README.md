# &lt;status-indicator/&gt;

A Vue.js component to show status indicator as colored dots. [Demo](https://coderdiaz.me/vue-status-indicator/).
This is a fork of [status-indicator](https://github.com/tnhu/status-indicator) with a few changes for use with Vue.js.

![Screenshot](https://i.imgur.com/v1vJ3Ue.gif)

## Install

```bash
npm i vue-status-indicator
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
import StatusIndicator from 'vue-status-indicator'
```

HTML/Vue:

```html
<template>
  <status-indicator active pulse></status-indicator>
</template>
<script>
  import StatusIndicator from 'vue-status-indicator'
  export default {
    components: {
      StatusIndicator
    }
  }
</script>
```

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
