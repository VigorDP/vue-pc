<template>
  <div class="head">
    <router-link to="/home">首页</router-link>
    <router-link to="/product">产品</router-link>
    <router-link to="/situation">应用场景</router-link>
    <router-link to="/practice">行业实践</router-link>
    <router-link to="/news">新闻资讯</router-link>
    <router-link to="/about">关于我们</router-link>
    <router-link to="/join">加入我们</router-link>
  </div>
</template>

<script>
export default {
  name: 'vheader',
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import '@styles/util.scss';
.head {
  a {
    margin: 20px;
  }
}
</style>
