<template>
  <div class="item-edit">
    <strong>{{id?'编辑':'新建'}}物品</strong>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="物品">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          action="http://localhost:3000/admin/api/upload"
          :headers='getAuthHeaders'
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="model.icon" :src="model.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="操作">
        <el-button type="primary" native-type="submit" around>保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "item-edit",
  props: {
    id: ""
  },
  data() {
    return {
      model: {}
    };
  },
  mounted() {
    this.id && this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`items/edit/${this.id}`);
      this.model = res.data;
    },

    handleAvatarSuccess(res) {
      this.$set(this.model, "icon", res.url);
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`items/${this.id}`, this.model);
      } else {
        res = await this.$http.post("items", this.model);
      }
      this.$router.push("/items/list");
    }
  }
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>