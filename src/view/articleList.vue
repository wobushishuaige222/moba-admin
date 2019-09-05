<template>
  <div>
    <strong>文章列表</strong>
    <el-table :data="data">
      <el-table-column prop="_id" label="数据ID" width="500"></el-table-column>
      <el-table-column prop="title" label="分类名称" min-width="150"></el-table-column>
      <el-table-column label="归属" min-width="150">
        <template slot-scope="scope">
          <el-select v-model="scope.row.categories" placeholder="请选择" multiple :disabled="true">
            <el-option v-for="item in options" :key="item._id" :label="item.name" :value="item._id"></el-option>
          </el-select>
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
  name: "Category-list",
  data() {
    return {
      data: [],
      options: []
    };
  },
  mounted() {
    this.initOptions();
    this.getData();
  },
  methods: {
    async getData() {
      const res = await this.$http.get("article");
      this.data = res.data;
    },
    async initOptions() {
      const res = await this.$http.get("category");
      this.options = res.data;
    },
    handleEdit(index, row) {
      this.$router.push({
        path: `/article/edit/${row._id}`
      });
    },
    async handleDelete(index, row) {
      const res = await this.$http.delete(`article/${row._id}`);
      this.getData();
    }
  }
};
</script>
<style scoped>
</style>
