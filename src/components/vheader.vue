<template>
  <div class="head">
    <div class="left">
      <img src="../assets/imgs/LOGO@2x.png" alt="" />
      <div class="name">生活慧美丰富多彩</div>
    </div>
    <div class="right">
      <router-link to="/home">首页</router-link>
      <router-link to="/product">产品</router-link>
      <router-link to="/situation">应用场景</router-link>
      <router-link to="/practice">行业实践</router-link>
      <router-link to="/news">新闻资讯</router-link>
      <router-link to="/about">关于我们</router-link>
      <router-link to="/join">加入我们</router-link>
    </div>
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
  width: 100%;
  height: 70px;
  background: rgba(0, 13, 45, 1);
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
  color: white;
  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    img {
      height: 46px;
      width: 51px;
      margin-right: 10px;
    }
    .name {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 300;
      color: rgba(255, 255, 255, 0.8);
    }
  }
  .right {
    width: 800px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a.router-link-active {
      font-size: 16px;
      line-height: 70px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      border-bottom: 2px solid rgba(16, 130, 255, 1);
    }
  }
}
</style>
