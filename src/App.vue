<template>
  <div class="app">
    <v-header></v-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <back-to-top
      text="返回顶部"
      visibleoffset="100"
      bottom="200px"
      right="50px"
    ></back-to-top>
  </div>
</template>

<script>
import vHeader from '@components/vheader'
import BackToTop from 'vue-backtotop'
export default {
  name: 'app',
  components: {
    vHeader,
    BackToTop
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
