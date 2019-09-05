<template>
  <div class="category-edit">
    <strong>{{id?'编辑':'新建'}}分类</strong>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="操作">
        <el-button type="primary" native-type="submit" around>保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "category-edit",
  props: {
    id: ""
  },
  data() {
    return {
      model: {},
      options:[]
    }
  },
  mounted() {
    this.id && this.fetch();
    this.initOptions()
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`category/edit/${this.id}`);
      this.model = res.data;
    },
    async initOptions() {
      const res = await this.$http.get('category')
      this.options = res.data
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`category/${this.id}`, this.model);
      } else {
        res = await this.$http.post("category", this.model);
      }
      this.$router.push("/categories/list")
    }
  }
};
</script>