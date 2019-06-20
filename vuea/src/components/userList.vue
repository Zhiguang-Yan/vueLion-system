<template>
  <div class="userList">
    <router-view></router-view>
    <el-main>
      <!-- 账号列表 -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户列表</span>
          <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
        </div>
        <div class="text item">
          <!-- 表格 -->
          <el-table
            :data="tableData"
            style="width: 100%"
            :border="true"
            :highlight-current-row="true"
          >
            <el-table-column label="用户名" width="180">
              <template slot-scope="scope">
                <el-popover trigger="click" placement="top">
                  <p>用户名: {{ scope.row.realname }}</p>
                  <p>身份证: {{ scope.row.idcard }}</p>
                  <p>年龄:{{ scope.row.age }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.username }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="姓名" width="180">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.realname }}</span>
              </template>
            </el-table-column>
            <el-table-column label="年龄" width="180">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.age }}</span>
              </template>
            </el-table-column>
            <el-table-column label="身份证" width="180">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.idcard }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button @click="handleEdit(scope.row.id)" type="warning" size="small">修改</el-button>
                <el-button @click="handleDelete(scope.row.id)" type="danger" size="small">删除</el-button>
              </template>
            </el-table-column>



          </el-table>
        </div>
      </el-card>
    </el-main>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    ...mapActions({
      // 获取用户列表
      getList: "GET_USELIST"
    }),
    handleEdit(id) {
      console.log("修改", id);
    },
    handleDelete(id) {
      console.log("删除", id);
    }
  },
  created() {
    this.getList().then(result => {
      this.tableData = this.userlist;
    });
  },
  computed: {
    ...mapState({
      userlist: state => state.userlist
    })
  }
};
</script>
<style scoped>
.userList {
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
}.clearfix:after {
  clear: both;
}
</style>