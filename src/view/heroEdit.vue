<template>
  <div class="hero-edit">
    <strong>{{id?'编辑':'新建'}}英雄</strong>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-tabs type="border-card" value="inscription">
        <el-tab-pane label="基础信息" name="basic">
          <el-form-item label="英雄">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.categories" placeholder="请选择" multiple>
              <el-option
                v-for="item in options"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate style="margin-top: .6rem" v-model="model.scores.difficult" :max="9" show-score></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate style="margin-top: .6rem" v-model="model.scores.skills" :max="9" show-score></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate style="margin-top: .6rem" v-model="model.scores.attack" :max="9" show-score></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate style="margin-top: .6rem" v-model="model.scores.survive" :max="9" show-score></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select filterable collapse-tags v-model="model.items2" placeholder="请选择" multiple>
              <el-option
                v-for="item in itemOptions"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select filterable collapse-tags v-model="model.items1" placeholder="请选择" multiple>
              <el-option
                v-for="item in itemOptions"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input v-model="model.usageTips" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input v-model="model.teamTips" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input v-model="model.battleTips" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              action="http://localhost:3000/admin/api/upload"
              :headers="getAuthHeaders"
              :show-file-list="false"
              :on-success="res => $set(model,'avator',res.url)"
            >
              <img v-if="model.avator" :src="model.avator" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="banner">
            <el-upload
              class="avatar-uploader"
              action="http://localhost:3000/admin/api/upload"
              :headers="getAuthHeaders"
              :show-file-list="false"
              :on-success="res => $set(model,'banner',res.url)"
            >
              <img v-if="model.avator" :src="model.banner" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button type="text" @click="model.skills.push({})">
            <i class="el-icon-plus"></i> 添加技能
          </el-button>
          <el-row>
            <el-col
              :xl="12"
              v-for="(item,index) in model.skills"
              :key="index"
              style="margin-bottom: 15px"
            >
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload
                  class="avatar-uploader"
                  action="http://localhost:3000/admin/api/upload"
                  :show-file-list="false"
                  :on-success="res => $set(item,'icon',res.url)"
                  :headers="getAuthHeaders"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item label="冷却值">
                <el-input v-model="item.delay"></el-input>
              </el-form-item>
              <el-form-item label="消耗值">
                <el-input v-model="item.cost"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input type="textarea" v-model="item.tips"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" size="small" @click="model.skills.splice(index,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="最佳搭档" name="partners">
          <el-button type="text" @click="model.partners.push({})">
            <i class="el-icon-plus"></i> 添加英雄
          </el-button>
          <el-row>
            <el-col v-for="(item,i) in model.partners" :key="i" :span="12">
              <el-form-item label="英雄">
                <el-select filterable v-model="item.hero">
                  <el-option
                    v-for="hero in heroListOptions"
                    :key="hero._id"
                    :label="hero.name"
                    :value="hero._id"
                    v-show="hero._id!==id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="被谁克制" name="restraint">
          <el-button type="text" @click="model.restraint.push({})">
            <i class="el-icon-plus"></i> 添加英雄
          </el-button>
          <el-row>
            <el-col v-for="(item,i) in model.restraint" :key="i" :span="12">
              <el-form-item label="英雄">
                <el-select filterable v-model="item.hero">
                  <el-option
                    v-for="hero in heroListOptions"
                    :key="hero._id"
                    :label="hero.name"
                    :value="hero._id"
                    v-show="hero._id!==id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>

        <el-tab-pane label="克制谁" name="continent">
          <el-button type="text" @click="model.continent.push({})">
            <i class="el-icon-plus"></i> 添加英雄
          </el-button>
          <el-row>
            <el-col v-for="(item,i) in model.continent" :key="i" :span="12">
              <el-form-item label="英雄">
                <el-select filterable v-model="item.hero">
                  <el-option
                    v-for="hero in heroListOptions"
                    :key="hero._id"
                    :label="hero.name"
                    :value="hero._id"
                    v-show="hero._id!==id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="铭文选择" name="inscription">
          <el-button type="text" @click="model.inscriptionChoice.push({})">
            <i class="el-icon-plus"></i> 添加铭文
          </el-button>
         <el-row>
            <el-col v-for="(item,i) in model.inscriptionChoice" :key="i" :span="12">
              <el-form-item label="铭文">
                <el-select filterable v-model="item.inscription">
                  <el-option
                    v-for="inscription in inscriptionOptions"
                    :key="inscription._id"
                    :label="inscription.name"
                    :value="inscription._id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item label="操作" style="margin-top: 15px">
        <el-button type="primary" native-type="submit" around>保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template> 
<script>
export default {
  name: "hero-edit",
  props: {
    id: ""
  },
  data() {
    return {
      model: {
        skills: [],
        partners: [],
        categories: [],
        restraint: [],
        continent: [],
        inscriptionChoice: [],
        scores: {
          difficult: 0,
          items1: [],
          items2: []
        }
      },
      options: [],
      itemOptions: [],
      heroListOptions: [],
      inscriptionOptions: []
    };
  },
  mounted() {
    this.id && this.fetch();
    this.fetchCategory();
    this.fetchItem();
    this.heroList();
    this.fetchInscription();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`hero/edit/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
    },
    async fetchInscription() {
      const res = await this.$http.get("inscription");
      this.inscriptionOptions = res.data;
    },
    async fetchCategory() {
      const res = await this.$http.get("category");
      this.options = res.data;
    },
    async fetchItem() {
      const res = await this.$http.get("item");
      this.itemOptions = res.data;
    },
    handleAvatarSuccess(res) {
      this.$set(this.model, "avator", res.url);
    },
    async heroList() {
      const res = await this.$http.get("/hero");
      this.heroListOptions = res.data;
    },
    async save() {
      if (this.model.skills.length !== 4) {
        this.$message.error("只能输入4个技能值");
        return;
      }
      let res;
      if (this.id) {
        res = await this.$http.put(`hero/${this.id}`, this.model);
      } else {
        res = await this.$http.post("hero", this.model);
      }
      // this.$router.push("/hero/list");
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