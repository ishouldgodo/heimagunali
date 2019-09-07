<template>
  <div>
    <el-row class="tac">
      <el-col :span="4">
        <!-- unique-opened="true" 只保留一个菜单  -->
        <el-menu
          default-active="2"
          :unique-opened="true"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>

            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>

            <el-submenu index="1-3">
              <template slot="title">选项4</template>
              <el-menu-item index="1-3-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航二</span>
            </template>

            <el-menu-item-group>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>

            <el-submenu index="2-3">
              <template slot="title">选项4</template>
              <el-menu-item index="2-3-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航三</span>
            </template>

            <el-menu-item-group>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>

            <el-submenu index="3-3">
              <template slot="title">选项4</template>
              <el-menu-item index="3-3-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
</style>