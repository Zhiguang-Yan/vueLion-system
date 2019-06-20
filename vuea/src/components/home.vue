<template>
  <div class="home">
    <router-view></router-view>
    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户信息卡</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div class="text item">用户账名:{{userinfo.username}}</div>
        <div class="text item">用户密码:{{userinfo.password}}</div>
        <div class="text item">用户真名:{{userinfo.realname}}</div>
        <div class="text item">用户证件:{{userinfo.idcard}}</div>
      </el-card>
    </el-main>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    //用户名
    // username() {
    //   return this.$store.state.userinfo.username;
    // },
    // 用户信息
    ...mapState({
      userinfo: state => state.userinfo
    })
    // userinfo() {
    //   return this.$store.state.userinfo;
    // }
  }
};
</script>
<style scoped>
.home {
  width: 100%;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
