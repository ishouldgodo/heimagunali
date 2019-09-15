<template>
  <el-card>
    <!-- 面包屑自定义组件 -->
    <my-bread class="mianbao" value1="商品管理" value2="分类参数"></my-bread>

    <!-- 提示 -->
    <el-alert title="只允许为三级参数设置分类参数" type="success" center show-icon></el-alert>

    <!-- 级联选择器 -->
    <span class="demonstration">商品分类</span>
    <span>{{ this.selectedOptions2}}</span>
    <el-cascader
      clearable
      expand-trigger="hover"
      :options="options"
      :props="defaultProp"
      v-model="selectedOptions2"
      @change="handleChange"
    ></el-cascader>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
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
    // 获取练级选择器的数据
    async getGoodCate() {
      const res = await this.$http.get(`categories?type=3`);
      console.log("0000000", res);
      this.options = res.data.data;
    },

    handleChange(value) {
      console.log(value);
    }
  }
};
</script>

<style  scoped>
.mianbao {
  margin-bottom: 20px;
}
</style>