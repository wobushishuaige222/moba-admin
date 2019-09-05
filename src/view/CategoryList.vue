<template>
  <div>
    <strong>这是分类列表</strong>
    <el-table :data="data">
      <el-table-column prop="_id" label="数据ID" width="500"></el-table-column>
      <el-table-column prop="name" label="分类名称" min-width="150"></el-table-column>
      <el-table-column prop="parent.name" label="归属" min-width="150"></el-table-column>
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
  name: "Category-list",
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
      const res = await this.$http.get("category");
      this.data = res.data;
    },
    handleEdit(index, row) {
      this.$router.push({
        path: `/categories/edit/${row._id}`,
      });
    },
    async handleDelete(index, row) {
      const res = await this.$http.delete(`category/${row._id}`);
      this.getData();
    }
  }
};
</script>
<style scoped>
</style>
