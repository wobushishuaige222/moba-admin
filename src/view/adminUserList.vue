<template>
  <div>
    <strong>用户列表</strong>
    <el-table :data="data">
      <el-table-column prop="_id" label="数据ID" width="500"></el-table-column>
      <el-table-column prop="username" label="用户名称" min-width="150"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "adminUser-list",
  data() {
    return {
      data: []
    };
  },
  mounted() {
      
    this.getData();
  },
  methods: {
    async getData() {
      const res = await this.$http.get("adminUser");
      this.data = res.data;
    },
    handleEdit(index, row) {
      this.$router.push({
        path: `/adminUser/edit/${row._id}`,
      });
    },
    async handleDelete(index, row) {
      const res = await this.$http.delete(`adminUser/${row._id}`);
      this.getData();
    }
  }
};
</script>
<style scoped>
</style>
