# [Status Indicator](https://github.com/coderdiaz/vue-status-indicator) &middot; [![NPMVERSION](https://img.shields.io/npm/v/vue-status-indicator.svg)](http://npmjs.com/package/vue-status-indicator) [![GITHUBSTARS](https://img.shields.io/github/stars/coderdiaz/vue-status-indicator.svg)](https://github.com/coderdiaz/vue-status-indicator/stargazers) [![BUILD](https://travis-ci.org/coderdiaz/vue-status-indicator.svg?branch=master)](https://travis-ci.org/coderdiaz/vue-status-indicator) [![DOWNLOADS](https://img.shields.io/npm/dt/vue-status-indicator.svg)](https://npmjs.com/package/vue-status-indicator)

A Vue component to show a status indicator as colored dots. This is a fork of [status-indicator](https://github.com/tnhu/status-indicator) with a few changes for use it with Vue.

## Install/Usage
<!-- Replace the docs for usage the plugin -->
```sh
# Install with npm
$ npm i -S vue-status-indicator

# or yarn
$ yarn add vue-status-indicator
```

```html
<div id="app">
  <status-indicator status="active" />
</div>
```

You can use **Local Registration**:
```js
import { StatusIndicator } from 'vue-status-indicator';
new Vue({
  el: '#app',
  components: {
    StatusIndicator,
  },
});
```

or **Global Registration**:
```js
import StatusIndicator from 'vue-status-indicator';
Vue.use(StatusIndicator);

// or with a custom component name
import { StatusIndicator } from 'vue-status-indicator';
Vue.component('custom-name', StatusIndicator);
```

### Usage in browser
<!-- Write an example for use the plugin in browser from CDN -->
In browser you can use Unpkg, Jsdelivr, CDN.js, etc.
```sh
# Unpkg
https://unpkg.com/vue-status-indicator@latest/dist/vue-status-indicator.js

# JSDelivr
https://cdn.jsdelivr.net/npm/vue-status-indicator@latest/dist/vue-status-indicator.min.js
```

### Supported Browsers
Latest versions of Chrome/Firefox/Safari/IE/Opera.

## Documentation
<!-- Add all documentation about the plugin: props, events, etc -->
### Props
|Name|Description|Type|Default|Required|
|---|---|---|---|---|
|status|Status color for the dot|String|""|false|
|pulse|Enable or disable the pulse effect|Boolean|false|false|

### Customatization
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

## Community
All feedback and suggestions are welcome!

## License
This is a open-source software licensed under the [MIT license](https://raw.githubusercontent.com/coderdiaz/vue-status-indicator/master/LICENSE)
