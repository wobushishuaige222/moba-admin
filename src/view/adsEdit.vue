<template>
  <div class="ads-edit">
    <strong>{{id?'编辑':'新建'}}广告位</strong>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label='广告'>
      <el-button type="text" @click="model.items.push({})">
        <i class="el-icon-plus"></i> 添加广告
      </el-button>
      <el-row>
        <el-col
          :xl="12"
          v-for="(item,index) in model.items"
          :key="index"
          style="margin-bottom: 15px"
        >
          <el-form-item label="图标">
            <el-upload
              class="avatar-uploader"
              action="http://localhost:3000/admin/api/upload"
              :show-file-list="false"
              :on-success="res => $set(item,'image',res.url)"
              :headers='getAuthHeaders'
            >
              <img v-if="item.image" :src="item.image" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="跳转链接">
            <el-input type="textarea" v-model="item.url"></el-input>
          </el-form-item>
          <el-form-item label='操作'>
            <el-button type="danger" size="small" @click="model.items.splice(index,1)">删除</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      </el-form-item>
      <el-form-item label=''>
        <el-button type="primary" native-type="submit" around>保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "ads-edit",
  props: {
    id: ""
  },
  data() {
    return {
      model: {
        items: []
      },
      options: []
    };
  },
  mounted() {
    this.id && this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`ads/edit/${this.id}`);

      this.model = Object.assign({}, this.model, res.data);
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`ads/${this.id}`, this.model);
      } else {
        res = await this.$http.post("ads", this.model);
      }
      this.$router.push("/ads/list");
    }
  }
};
</script>
<style scoped>
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px dashed #c0ccda;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
