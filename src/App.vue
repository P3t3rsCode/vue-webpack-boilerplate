<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style lang="scss">
@import "~variables";
@import "~mixins";
#app {
  background: green;
  @include breakpoint($small) {
    background: red;
  }
}
</style>
