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

<style  scoped>

</style>