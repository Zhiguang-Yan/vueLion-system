<template>
  <div class="login">
    <!-- 登陆表单 -->
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      label-position="left"
    >
      <h1 class="title">
        <i class="el-icon-setting"></i>
        YZG-管理系统
      </h1>
      <el-form-item label="账号" prop="username">
        <el-input
          type="text"
          v-model="loginForm.username"
          autocomplete="off"
          placeholder="密码必须由字母开头,长度在5到16之间"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="text"
          v-model="loginForm.password"
          autocomplete="off"
          placeholder="密码必须由字母开头,长度在5到16之间"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登陆</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    let usernameRule = (rule, value, callback) => {
      const regExp = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
      if (!value.trim()) {
        return callback(new Error("账号不能为空,请输入账号"));
      } else {
        if (!regExp.test(value)) {
          callback(new Error("账号必须由字母开头,长度在5到16之间"));
        } else {
          callback();
        }
      }
    };
    let passwordRule = (rule, value, callback) => {
      const regExp = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
      if (!value.trim()) {
        return callback(new Error("密码不能为空，请输入密码"));
      } else {
        if (!regExp.test(value)) {
          callback(new Error("密码必须由字母开头,长度在5到16之间"));
        } else {
          callback();
        }
      }
    };
    return {
      // 登陆表单数据
      loginForm: {
        username: "",
        password: ""
      },
      // 验证规则
      rules: {
        username: [{ validator: usernameRule, trigger: "blur" }],
        password: [{ validator: passwordRule, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 收集用户信息
          let _this = this;
          _this.$axios
            .post("/api/checklogin", {
              username: _this.loginForm.username,
              password: _this.loginForm.password
            })
            .then(result => {
              let res = result.data[0];
              // 数据存入本地
              sessionStorage.setItem("userinfo", JSON.stringify(res));
              let userinfo = sessionStorage.getItem("JSON.parse(userinfo)");
              //把当前登陆用户数据存入vuex
              _this.$store.commit("SAVE_USERINFO", res);

              if (result.data.length) {
                this.$message({
                  message: "登陆成功！",
                  duration: 2000,
                  type: "success"
                });
                //跳转后台首页
                _this.$router.push({ name: "index" });
              } else {
                _this.$notify.error({
                  message: "登陆失败!(用户或者密码错误)"
                });
              }
            })
            .catch(err => {});
        } else {
          console.log("连接后台失败！");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html,
body,
#app,
.login {
  height: 100%;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center !important;
  background: url(../../assets/login.png) no-repeat;
  background-size: 100% 100%;
}
.login .el-form {
  width: 400px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 30px 20px 30px;
  background: rgba(255, 255, 255, 0.65);
  transition: all 0.5s ease-in-out;
}
.login .el-form:hover {
  box-shadow: 0 0 10px rgba(255, 255, 245);
  transform: translateY(-2px);
}
.el-form .title {
  font-size: 23px;
  font-weight: bold;
  color: #333;
  display: inline-block;
  padding: 30px 100px 30px;
}
</style>
