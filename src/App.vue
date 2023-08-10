<template>
  <HomeView />
</template>

<script setup>
import HomeView from "@/views/HomeView.vue";
</script>
<style>
body {
  margin: 0rem;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  background-color: var(--white);
  align-items: flex-start;
  justify-content: center;
}
#app {
  font-family: "Jakarta", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--white);
  font-size: 16px;
  border-radius: 10px;
  margin-top: 2.5rem;
  color: var(--dark-grayish-blue);
}
:root {
  --white: hsl(0, 0%, 100%);
  --very-light-grayish-blue: hsl(210, 60%, 98%);
  --light-grayish-blue-1: hsl(211, 68%, 94%);
  --light-grayish-blue-2: hsl(205, 33%, 90%);
  --grayish-blue: hsl(219, 14%, 63%);
  --dark-grayish-blue: hsl(219, 12%, 42%);
  --very-dark-blue: hsl(224, 21%, 14%);
  --red: hsl(1, 90%, 64%);
  --blue: hsl(219, 85%, 26%);
}
@media screen and (min-width: 400px) {
  body {
    background-color: var(--very-light-grayish-blue);
  }
  #app {
    max-width: 60%;
  }
}

@font-face {
  font-family: "Jakarta";
  src: url("@/assets/fonts/PlusJakartaSans-VariableFont_wght.ttf")
    format("woff2-variations");
  font-style: normal;
  font-weight: 500 800;
}
</style>
