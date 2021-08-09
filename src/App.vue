<template>
  <div class="container">
    <div class="wrapper">
      <Day
        :showAddHours="addHours(idx)"
        :hours="hours(idx)"
        :error="error(idx)"
        :from="fromTime(idx)"
        :to="toTime(idx)"
        v-for="(day, idx) in days"
        :idx="idx"
        :key="idx"
        :day="day"
      />
    </div>
  </div>
</template>

<script>
import Day from './components/Day.vue'
export default {
  name: 'App',
  components: {Day},
  data() {
   return {
      days: ["MN","TU","WD","TH","FR","SA","SU"],
   } 
  },
  methods: {
    toTime(i) {return this.$store.state.filteredTimes[i]},
    fromTime(i) {return this.$store.state.availableTimes[i]},
    addHours(i) {return this.$store.state.addHours[i]},
    error(i) {return this.$store.state.error[i]},
    hours(i) {return this.$store.state.hoursCount[i]},
  }
  
}
</script>

<style>
*,
*::before,
*::after {box-sizing: border-box}

:root {
  --clr-grey: hsl(210, 14%, 84%);
  --clr-primary: hsl(220, 100%, 57%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  align-items: center;
}
body {margin: 0}
h1, h2, p {
  margin: 0;
  padding: 0;
}
.container {
  width: min(700px, 80%);
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  padding: 4em 0;
}
.wrapper > div + div {margin-top: 1em}
</style>
