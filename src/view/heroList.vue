<template>
  <div>
    <strong>这是英雄列表</strong>
    <el-table :data="data">
      <el-table-column prop="_id" label="数据ID" width="500"></el-table-column>
      <el-table-column prop="name" label="英雄名称" min-width="150"></el-table-column>
      <el-table-column prop="title" label="称号" min-width="150"></el-table-column>
      <el-table-column label="英雄头像" min-width="150">
        <template slot-scope="scope">
          <img :src='scope.row.avator' style='height: 50px;width:50px;border-radius: 5px'>
        </template>
      </el-table-column>
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
  name: "hero-list",
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
      const res = await this.$http.get("hero");
      this.data = res.data;
    },
    handleEdit(index, row) {
      this.$router.push({
        path: `/hero/edit`,
        query: {
          id: row._id
        }
      });
    },
    async handleDelete(index, row) {
      const res = await this.$http.delete(`hero/${row._id}`);
      this.getData();
    }
  }
};
</script>
<style scoped>
</style>
