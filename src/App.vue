<template>
  <div class="app">
    <v-header></v-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import vHeader from '@components/vheader'
export default {
  name: 'app',
  components: {
    vHeader
  }
}
</script>

<style lang="scss">
.app {
  width: 100%;
  img {
    width: 100%;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
