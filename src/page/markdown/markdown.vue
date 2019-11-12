<template>
  <div class="rich-page">
    <!-- 顶部 -->
    <div class="header-top">
      <div>12:30</div>
      <div>
        <i class="el-icon-more"></i>
        <i class="el-icon-close"></i>
      </div>
    </div>
    <!-- 插件 -->
    <quill-editor
      class="quill-editor-box ql-editor"
      v-model="richContentValue"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
    <button @click="getValue">按钮</button>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  data() {
    return {
      richContentValue: ``,

      // 自定义工具栏
      editorOption: {
        placeholder: "写记事",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike", { list: "ordered" }] // 自定义功能定义菜单栏上的功能
          ]
        }
      }
    };
  },
  components: {
    quillEditor
  },

  methods: {
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件

    getValue() {
      console.log(this.richContentValue);
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  }
};
</script>

 <style  scoped>
/* 位置调换 */
.quill-editor {
  display: flex;
  flex-direction: column-reverse;
}

.rich-page {
  width: 400px;
  margin: auto;
}
/* 顶部 */
.header-top {
  display: flex;
  justify-content: space-between;
  background: #afeda5;
}
/* 内容区域 */
.quill-editor-box {
  background: #cbf1c5;
}

/* 去除边距 */
.ql-editor {
  padding: 0 !important;
}

.quill-editor-box .ql-container.ql-snow {
  min-height: 375px !important;
}
</style>
<style>
/* 内容区域的线 */
.quill-editor-box .ql-container.ql-snow {
  border: none !important;
}

.rich-page .ql-toolbar.ql-snow {
  border: none;
  border-top: 1px solid #ccc;
}

.rich-page .ql-editor.ql-blank {
  min-height: 375px;
}
</style>