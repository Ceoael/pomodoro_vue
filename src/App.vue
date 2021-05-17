<template>
  <pomodoro-builder />
</template>

<script>
import PomodoroBuilder from './containers/PomodoroBuilder/PomodoroBuilder.vue'

export default {
  name: 'App',
  components: {
    PomodoroBuilder
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background: #100E1D;
  color: #E7E7EB;
}
</style>
