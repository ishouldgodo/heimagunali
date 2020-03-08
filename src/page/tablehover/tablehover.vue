<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="日期" width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>

    <el-table-column label="姓名" width="240" style="disply:flex">
      <template slot-scope="scope" style="disply:flex">
        <el-popover trigger="click" placement="top" style="width:50px">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <!-- <span slot="reference" style="width:50px">{{ scope.row.name }}</span> -->
          <!-- 把下面的注释了，打开上面的注释，就可以以文字去显示 -->
          <span slot="reference" style="width:50px">
            <img class="icon-img" src="../../assets/img/card.png" />
          </span>
        </el-popover>

        <el-popover trigger="click" placement="top" style="width:50px">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <!-- <span slot="reference" style="width:50px">{{ scope.row.name }}</span> -->
          <!-- 把下面的注释了，打开上面的注释，就可以以文字去显示 -->
          <span slot="reference" style="width:50px">
            <img class="icon-img" src="../../assets/img/card.png" />
          </span>
        </el-popover>

        <el-popover trigger="click" placement="top" style="width:50px">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <span slot="reference" style="width:50px">{{ scope.row.name }}</span>
          <!-- <span slot="reference" style="width:50px">
            <img class="icon-img" src="../../assets/img/card.png" />
          </span>-->
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style  scoped>
.icon-img {
  width: 16px;
  height: 16px;
  margin-left: 10px;
}
</style>