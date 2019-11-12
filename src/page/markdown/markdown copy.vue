<template>
  <div>
    <div class="box">
      <p id="aa" class="p">123</p>
      <span id="aa">33</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

 <style lang="less" scoped>
.xiangtong(@w:100px,@h:50px,@c:red) {
  width: @w;
  height: @h;
  background: @c;
  line-height: @h;
  text-align: center;
  display: block;
}

.box {
  .p {
    .xiangtong(100px, 200px, red);
  }
  span {
    .xiangtong(50px, 50px, green);
  }
}
#aa {
  color: aqua;
}
</style>