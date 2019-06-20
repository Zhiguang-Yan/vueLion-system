<template>
  <div>
    <el-header style="text-align: right;">
      <el-dropdown trigger="click">
        <el-button type="text" class="username" icon="el-icon-user-solid">{{username}}</el-button>
        <el-dropdown-menu slot="dropdown">
          <router-link :to="{name:'index'}" class="out">
            <el-dropdown-item>个人信息</el-dropdown-item>
          </router-link>
          <router-link :to="{name:'login'}" class="out">
            <el-dropdown-item>退出</el-dropdown-item>
          </router-link>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      username: state => state.userinfo.username
    })
  },
  created() {}
};
</script>
<style scoped>
.username {
  font-size: 20px;
  color: black;
}
.out {
  text-decoration: none !important;
}
</style>
