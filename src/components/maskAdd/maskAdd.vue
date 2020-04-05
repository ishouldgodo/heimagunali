<template>
    <div>
      <el-dialog
            title="title"
            :visible.sync="visible"
            @close="$emit('update:show1', false)"
           >
            <div>this is a dialog</div>
        </el-dialog>
    </div>
</template>

// 讲解：  @close="$emit('update:show1', false)"是子组件跟新父组件中的某值show1，将值变为false 
// :visible.sync="visible"  visible值为true显示,否者隐藏
// data中如何直接取props中的值，直接this.XXX

<script>
export default {
      data () {
            return {
                visible: this.show1
            };
        },
        props: {
           show1: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            show1 () {
                this.visible = this.show1;
            }
        }
}
</script>

<style scoped>

</style>