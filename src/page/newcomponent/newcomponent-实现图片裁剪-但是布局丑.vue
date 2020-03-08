<template>
  <div>
    <div class="rj-header">
      <button @click="confirm" color="primary">确定</button>
    </div>

    <div class="crop-max-box">
      <div class="cropper-content">
        <div class="cropper" :style="scrollHeight">
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
        </div>
      </div>

      <!-- 裁剪后展示的图片 -->
      <div class="showcropbx">
        <img :src="cropAfterImg" v-if="cropAfterflagImg" />12121
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      crap: false,
      previews: {},
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
  mounted() {},
  computed: {
    scrollHeight() {
      return "height:" + window.screen.height + "px";
    }
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
    }
  }
};
</script>
<style lang="css">
.cropper-content {
  position: fixed;
  z-index: 199;
  width: 600px;
  height: 300px;
}
.showcropbx {
  position: absolute;
  right: 0;
  top: 0;
}
.crop-max-box {
  display: flex;
}
/* https://blog.csdn.net/qq_27717857/article/details/84999880   参考网址  可以解决如何使用这个插件的 */

/* https://github.com/xyxiao001/vue-cropper   参考网址  这个插件 每个参数的详细用法哈 */
</style>
