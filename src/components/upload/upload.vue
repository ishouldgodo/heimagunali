<template>
    <div>

        <!-- 参数讲解一下
            action             是上传服务器的地址
            show-file-list	   是否显示已上传文件列表  true时，当成功时，下面会显示上传的文件名和成功的标识。最好为false
            :on-success="handleAvatarSuccess"  上传成功时的钩子函数
            :before-upload="beforeAvatarUpload"  上传之前对图片做的一些处理
            imageUrl  图片显示的地址
         -->

        <el-upload
        class="avatar-uploader"
        :action="uploadOption"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                imageUrl: ''
            }
        },
        props:{
            uploadOption:{
                type: String,
                default: "1231313131"
            }
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
                this.$emit('upload',[res,file,this.imageUrl])
            },
            beforeAvatarUpload(file) {
                this.$emit('beupload',[file])
            }
        }
    }
</script>

<style  scoped>
  /* 自己还有在添加一个哈 */
  .avatar-uploader {
      border:1px solid red;
      width: 178px;
      height: 178px;
  }

  /*  */
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
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