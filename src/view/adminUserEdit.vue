<template>
  <div class="adminUser-edit">
    <strong>{{id?'编辑':'新建'}}用户</strong>
    <el-form label-width="120px" @submit.native.prevent.stop="save">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="text" v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item label="操作">
        <el-button type="primary" native-type="submit" around>保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "adminUser-edit",
  props: {
    id: {}
  },
  data() {
    return {
      model: {},
      options: []
    };
  },
  mounted() {
    this.id && this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`adminUser/edit/${this.id}`);
      this.model = res.data;
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`adminUser/${this.id}`, this.model);
      } else {
        if (this.model.username && this.model.password) {
          res = await this.$http.post("adminUser", this.model);
        } else {
          this.$message.error("请填写完整信息");
          return
        }
      }
      this.$router.push("/adminUser/list");
    }
  }
};
</script>