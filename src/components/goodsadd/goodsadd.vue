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

    <el-tabs v-model="active" class="mytab" tab-position="left" style="height: 400px; ">
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

      <el-tab-pane name="2" label="商品参数">配置管理</el-tab-pane>
      <el-tab-pane name="3" label="商品属性">角色管理</el-tab-pane>
      <el-tab-pane name="4" label="商品图片">定时任务补偿</el-tab-pane>
      <el-tab-pane name="5" label="商品内容">定时任务补偿2</el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      active: "1", //tab栏默认选中第一个

      formLabelAlign1: {
        goods_name: "",
        goods_price: "",
        goods_weight: "",
        goods_number: ""
      },

      //练级菜单的数据
      options: [], //练级菜单的数据
      selectedOptions2: [1, 3, 6], //默认选择 1 3 6
      defaultProp: {
        label: "cat_name", //选项名字
        value: "cat_id", //选项的id值
        children: "children" //该选项下的下一个数组
      }
    };
  },

  created() {
    this.getGoodCate();
  },

  methods: {
    handleChange(value) {
      console.log(value);
    },

    // 获取练级选择器的数据
    async getGoodCate() {
      const res = await this.$http.get(`categories?type=3`);
      console.log("级联选择器", res);
      this.options = res.data.data;
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