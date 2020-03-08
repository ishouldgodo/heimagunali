<template>
  <div>
    <div class="crop-max-box">
      <div class="cropper-content">
        <div class="cropper control-display">
          <vueCropper
            ref="cropper"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputType"
            :info="true"
            :full="option.full"
            :canScale="true"
            :centerBox="true"
            :canMove="option.canMove"
            :canMoveBox="option.canMoveBox"
            :autoCrop="option.autoCrop"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            :fixedBox="option.fixedBox"
          >
          </vueCropper>
          <button @click="confirm" color="primary">裁剪</button>
        </div>
      </div>

      <!-- 裁剪后展示的图片 -->
      <div class="showcropbx">
        <img :src="cropAfterImg" v-if="cropAfterflagImg" />裁剪后在这里哦
      </div>
    </div>
  </div>
</template>

<script>
import { VueCropper } from "vue-cropper"; //引入组件
export default {
  data() {
    return {
      crap: false,
      previews: {},
      // 配置项
      option: {
        img: require("../../assets/img/bg.jpg"),
        size: 1,
        full: false,
        outputType: "png",
        canMove: false,
        canMoveBox: true,
        autoCrop: true,
        autoCropWidth: 180,
        autoCropHeight: 180,
        downImg: "#"
      },
      cropAfterflagImg: true,
      cropAfterImg: ""
    };
  },
  // 注册组件
  components: {
    VueCropper
  },
  methods: {
    // 裁剪
    confirm() {
      let _this = this;
      // 获取截图的base64 数据
      this.$refs.cropper.getCropData(data => {
        // do something
        console.log(data);
        this.cropAfterImg = data;
        this.cropAfterflagImg = true;
      });

      // 也可以获取为file:bind形式的
    }
  }
};
</script>
<style lang="css">
.crop-max-box {
  display: flex;
  width: 100%;
  height: 100%;
}

/* 控制图片的显示大小 */
.control-display {
  padding: 20px;
  width: 320px;
  height: 392px;
  background: #fff;
}

.showcropbx {
  margin-left: 20px;
}
/* npm install vue-cropper  安装哈 */
/* https://blog.csdn.net/qq_27717857/article/details/84999880   参考网址  可以解决如何使用这个插件的 */
/* https://github.com/xyxiao001/vue-cropper   参考网址  这个插件 每个参数的详细用法哈 */
</style>
