<template lang="html">
  <div id="app">
    <h1>
    &lt;vue-status-indicator/&gt;</h1>
    <p>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>[active]</span>
      <span>[positive]</span>
      <span>[intermediary]</span>
      <span>[negative]</span>
    </p>
    <p>
      <span></span>
      <status-indicator></status-indicator>
      <status-indicator active></status-indicator>
      <status-indicator positive></status-indicator>
      <status-indicator intermediary></status-indicator>
      <status-indicator negative></status-indicator>
    </p>
    <p>
      <span>[pulse]</span>
      <status-indicator pulse></status-indicator>
      <status-indicator active pulse></status-indicator>
      <status-indicator positive pulse></status-indicator>
      <status-indicator intermediary pulse></status-indicator>
      <status-indicator negative pulse></status-indicator>
    </p>
  </div>
</template>

<script>
import StatusIndicator from './components/StatusIndicator.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    StatusIndicator
  }
}
</script>

<style src="../styles.css"></style>
<style lang="scss">
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
}
#app {
  text-align: center;
}
p {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
h1 {
  display: flex;
  align-items: center;
  justify-content: center;
}
p > span {
  display: inline-block;
  width: 20px;
}
p > span:first-child {
  display: inline-block;
  width: 100px;
}
p[prompt] {
  color: #aaa;
}
alert-message {
  color: #4BD28F;
  position: fixed;
  right: 50px;
  bottom: 50px;
}
:root {
  --status-indicator-size: 15px !important;
}
</style>
