<template>
  <div class="category-edit">
    <strong>{{id?'编辑':'新建'}}文章</strong>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" placeholder="请选择" multiple>
          <el-option
            v-for="item in options"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <vueEditor v-model='model.body' useCustomImageHandler @imageAdded='handleImageAdded'></vueEditor>
      </el-form-item>
      <el-form-item label="操作">
        <el-button type="primary" native-type="submit" around>保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
  name: "category-edit",
  props: {
    id: {
      
    }
  },
  components: {
    VueEditor
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
    async handleImageAdded(file, editor,cursorLocation,next) {
      const formData= new FormData()
      formData.append('file', file)
      const result = await this.$http.post('http://localhost:3000/admin/api/upload', formData)
      editor.insertEmbed(cursorLocation,'image',result.data.url)
      next()
    },
    async fetch() {
      const res = await this.$http.get(`article/edit/${this.id}`);
      this.model = res.data;
    },
    async initOptions() {
      const res = await this.$http.get('category')
      this.options = res.data
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`article/${this.id}`, this.model);
      } else {
        res = await this.$http.post("article", this.model);
      }
      this.$router.push("/article/list")
    }
  }
};
</script>