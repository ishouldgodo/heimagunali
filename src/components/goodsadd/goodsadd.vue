<template>
  <el-card>
    <!-- 使用自定义面包组件 -->
    <my-bread value1="商品管理" value2="商品列表"></my-bread>

    <!-- 提示 -->
    <el-alert class="myalert" title="成功提示的文案" type="success" center show-icon></el-alert>

    <!-- 使用简单风格的步骤条 -->
    <el-steps :active="1*active" finish-status="success" simple style="margin-top: 20px">
      <el-step title="基本信息"></el-step>
      <el-step title="商品参数"></el-step>
      <el-step title="商品属性"></el-step>
      <el-step title="商品图片"></el-step>
      <el-step title="商品内容"></el-step>
    </el-steps>

    <!-- tab切换 -->

    <el-tabs
      @tab-click="tabChange()"
      v-model="active"
      class="mytab"
      tab-position="left"
      style="height: 400px; "
    >
      <!-- 第一个tab里面的内容 -->
      <el-tab-pane name="1" label="基本信息">
        <!--  -->
        <el-form label-position="left" label-width="80px" :model="formLabelAlign1">
          <el-form-item label="商品名称">
            <el-input v-model="formLabelAlign1.goods_name"></el-input>
          </el-form-item>

          <el-form-item label="商品价格">
            <el-input v-model="formLabelAlign1.goods_price"></el-input>
          </el-form-item>

          <el-form-item label="商品重点">
            <el-input v-model="formLabelAlign1.goods_weight"></el-input>
          </el-form-item>
          <el-form-item label="商品数量">
            <el-input v-model="formLabelAlign1.goods_number"></el-input>
          </el-form-item>
          <!-- 级联选择器  -->
          <span class="demonstration">商品分类</span>
          <el-cascader
            clearable
            expand-trigger="hover"
            :options="options"
            :props="defaultProp"
            v-model="selectedOptions2"
            @change="handleChange"
          ></el-cascader>
          <!--  -->
        </el-form>
        <!--  -->
      </el-tab-pane>

      <!-- 第二个tab中的内容 -->
      <el-tab-pane name="2" label="商品参数">
        <div v-for="(item,i) in tab2arr" :key="i">
          <h3 class="titleh2">{{item.attr_name}}</h3>
          <el-checkbox-group v-model="item.attr_vals">
            <el-checkbox border :label="item2" v-for="(item2,j) in item.attr_vals" :key="j"></el-checkbox>
          </el-checkbox-group>
        </div>
      </el-tab-pane>

      <!-- 第三个tab中的内容 -->
      <el-tab-pane name="3" label="商品属性">
        <el-form label-position="left" label-width="80px">
          <el-form-item :label="item.attr_name" v-for="(item,i) in tab3arr" :key="i">
            <el-input v-model="item.attr_vals"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <!--第四个 tab中的内容 -->
      <el-tab-pane name="4" label="商品图片">
        <el-upload
          class="upload-demo"
          action="http://api.xiaomadagege.cn:3001/api/private/v1/upload"
          :headers="headers"
          :on-preview="handlePreview"
          :on-success="handleSuccess"
          :on-remove="handleRemove"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-tab-pane>

      <!--  -->
      <el-tab-pane name="5" label="商品内容">
        <el-row>
          <el-button type="primary" v-model="formLabelAlign1.goods_introduce" @click="addinfo">添加商品</el-button>
        </el-row>
        <quill-editor></quill-editor>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

export default {
  data() {
    return {
      active: "1", //tab栏默认选中第一个

      formLabelAlign1: {
        goods_name: "", //商品名陈
        goods_price: "",
        goods_weight: "",
        goods_number: "",
        goods_introduce: "", //富文本

        goods_cat: "",
        pics: [], //图片路径
        attrs: []
      },

      //练级菜单的数据
      options: [], //练级菜单的数据
      selectedOptions2: [1, 3, 6], //默认选择 1 3 6
      defaultProp: {
        label: "cat_name", //选项名字
        value: "cat_id", //选项的id值
        children: "children" //该选项下的下一个数组
      },
      tab2arr: [],

      tab3arr: [],
      headers: {
        Authorization: localStorage.getItem("token")
      }
    };
  },

  components: {
    quillEditor
  },

  created() {
    this.getGoodCate();
  },

  methods: {
    async addinfo() {
      this.formLabelAlign1.goods_cat = this.selectedOptions2.join(",");
      const res = await this.$http.post(`goods`, thisformLabelAlign1);
      console.log("1212121", res);
    },

    handleChange(value) {
      console.log(value);
    },

    // 获取练级选择器的数据
    async getGoodCate() {
      const res = await this.$http.get(`categories?type=3`);
      console.log("级联选择器", res);
      this.options = res.data.data;
    },

    // 图片预览的时候 调用该方法
    // file当前操作图片的相关信息
    handlePreview(file) {
      // console.log(file);
    },

    // 图片点击×的时候调用
    handleRemove(file) {
      console.log(file);
      let Index = this.formLabelAlign1.pics.findIndex(item => {
        return (item.pic = file.response.data.tmp_path);
      });

      this.formLabelAlign1.pics.splice(Index, 1);
      console.log("tu", this.formLabelAlign1.pics);
    },

    // 图片上传成功的时候调用
    handleSuccess(file) {
      console.log("成功");
      console.log("成功的第一个canshu", file);
      this.formLabelAlign1.pics.push({
        pic: file.data.tmp_path
      });
    },

    // 点击tab时触发该函数
    async tabChange() {
      // console.log("hh");
      if (this.active == "2") {
        //如果点击的是第二个tab
        if (this.selectedOptions2.length !== 3) {
          this.$message.warning("请输入完整");
          return;
        } else {
          const res = await this.$http.get(
            `categories/${this.selectedOptions2[2]}/attributes?sel=many`
          );
          this.tab2arr = res.data.data;
          // console.log("aa123", this.tab2arr);

          // 将字符串转为数组
          // this.tab2arr.forEach(item => {
          //   item.attr_vals = item.attr_vals.trim().split(",");
          // });

          // 优化
          this.tab2arr.forEach(item => {
            item.attr_vals =
              item.attr_vals.length === 0
                ? []
                : item.attr_vals.trim().split(",");
          });

          console.log("ooppp", this.tab2arr);
        }
      } else if (this.active == "3") {
        //如果点击的是第三个tab栏
        if (this.selectedOptions2.length !== 3) {
          this.$message.warning("请输入完整");
          return;
        } else {
          const res3 = await this.$http.get(
            `categories/${this.selectedOptions2[2]}/attributes?sel=only`
          );

          this.tab3arr = res3.data.data;
          console.log("123", this.tab3arr);
        }
      }
    }
  }
};
</script>

<style  scoped>
.myalert {
  margin: 20px auto;
}
.mytab {
  margin-top: 20px;
}
</style>
<style>
.ql-container.ql-snow {
  /* 最小高度  超出会自动增加 */
  min-height: 200px !important;
}
</style>