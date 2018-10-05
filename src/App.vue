<template>
  <div id="app">
    <Flag code="BR" size="m" dropshadow :borderRadius="false" customBorderRadius="2px" />
  </div>
</template>

<script>
import Flag from './components/Flag.vue';

export default {
  components: {
    Flag,
  },
};
</script>


<style lang="scss">
//
</style>
