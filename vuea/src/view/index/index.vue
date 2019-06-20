<template>
  <div class="index">
    <el-container style="height: 500px; border: 1px solid #eee">
      <!-- 左侧边栏 -->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu
          default-active="/"
          :default-openeds="['1']"
          router
          background-color="#545c64"
          text-color="#fff"
        >
          <!-- 导航一 -->

          <el-menu-item index="/index" class="activeLogo">
            <i class="el-icon-setting"></i>
            <span style=" font-size: 20px;">vue系统</span>
          </el-menu-item>

          <!-- 导航二 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>账号管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="userList">账号列表</el-menu-item>
              <el-menu-item index="vip">vip账号</el-menu-item>
              <el-menu-item index="swiper">swiper轮播图</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- 导航三 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>导航二
            </template>
            <el-menu-item-group>
              <el-menu-item index="updata">updata</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- 导航三 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>导航三
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <!-- 右侧边栏 -->
      <el-container>
        <!--路由出口-->
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userinfo: {}
    };
  },
  methods: {},
  created() {
    this.userinfo = this.$store.state.userinfo;
  },
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-menu {
  border: 0;
}
.index .el-aside {
  color: #333;
  background: #545c64 !important;
}
html,
body,
#app,
.index {
  height: 100%;
}
.index .el-container {
  height: 100% !important;
}
.activeLogo {
  background-color: #333 !important;
}
</style>
