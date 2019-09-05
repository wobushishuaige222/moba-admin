<template>
  <el-card class="box-card" style="width: 20%;margin: 6rem auto">
    <div slot="header" class="clearfix">
      <span>请先登录</span>
    </div>
    <el-form @submit.native.prevent="login">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button native-type="submit" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async login() {
      const res = await this.$http.post(
        "http://localhost:3000/admin/api/login",
        this.model
      );
      if (res.data.code == 200) {
        this.$message.success(res.data.loginMessage);
        window.sessionStorage.setItem("token", res.data.token);
        this.$router.push("/");
      }
    }
  }
};
</script>
