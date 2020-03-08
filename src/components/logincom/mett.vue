<template>
  <div class="mett-page">
    <h2>遇见问题</h2>
    <!-- 推荐这种写法-->
    <ul class="tab-tilte">
      <li
        :key="index"
        v-for="(title,index) in tabTitle"
        @click="getclcik(index)"
        :class="{active:cur==index}"
      >{{title}}</li>
    </ul>

    <div class="tab-content">
      <div v-for="(m,index) in tabMain" :key="index" v-show="cur==index">{{m}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabTitle: ["标题一", "标题二", "标题三", "标题四"],
      tabMain: ["内容一", "内容二", "内容三", "内容四"],
      cur: 0 //默认选中第一个tab
    };
  },
  methods: {
    getclcik(value) {
      this.cur = value;
    }
  }
};
</script>

<style scoped>
.mett-page .tab-tilte {
  display: flex;
  list-style: none;
}
.mett-page .tab-tilte > li {
  width: 50px;
  height: 40px;
}
</style>