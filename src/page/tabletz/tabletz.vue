<template>
    <div class="bus-A">
        
        <el-table :data="tableData"
        border
        row-key="id"
        align="left">
            <el-table-column v-for="(item, index) in col"
                :key="`col_${index}`"
                :prop="dropCol[index].prop"
                :label="item.label"> 
            </el-table-column>
        </el-table>

    </div>
</template>
<script>
import Sortable from 'sortablejs'
export default {
  data() {
    return {
      col: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],

      dropCol: [
        {
          label: '日期',
          prop: 'date'
        },
        {
          label: '姓名',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],

      tableData: [
        {
          id: '1',
          date: '11111',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 100 弄'
        },
        {
          id: '2',
          date: '222222222',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 200 弄'
        },
        {
          id: '3',
          date: '33333333',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 300 弄'
        },
        {
          id: '4',
          date: '4444444444',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 400 弄'
        }
      ],

      zaiTuoDongdata:{},
      newData:[]

    }
  },
  mounted() {
        this.rowDrop()
     

     var regExp = /\&.*?\;/g;
var str = '123&asdsa;dqwe';
str = str.replace( regExp, "" )
console.log(str);//123dqwe

// var regExp = /\/.*?\;/;
// var str = 'data:image/jpeg;base64,';
// let a = str.match( regExp)
// console.log(a);//123dqwe


// var regExp = /\/(.*)\;/;
// var str = 'data:image/jpeg;base64,';
// let a = str.match( regExp)
// console.log(a);//123dqwe


// 功能描述 匹配以斜杠开头（/）,然后以分号（;）
// var regExp = /\/.*?\;/;
// var str = 'data:image/jpaseg;base64,';
// let a = str.match( regExp)
// console.log(a[0]);//  /jpaseg;


// let cc="/jpeg;";
// // 删除第一个字符
// // console.log(cc.substr(1));

// // 删除最后一个字符
// let diyige=cc.substr(1);
// console.log(diyige.substr(0, diyige.length - 1));

  
  },
  methods: {

    //行拖拽
    rowDrop() {
      const tbody = document.querySelector('.el-table__body-wrapper tbody')
      const _this = this
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
            // debugger
            console.log("你拖动的下标识",oldIndex);
            // console.log("你拖动到了",newIndex) 
            _this.newData=_this.tableData;

          _this.zaiTuoDongdata= _this.tableData[Number(oldIndex)];

   
          


            
          const currRow = _this.tableData.splice(oldIndex, 1)[0];
         

         currRow.date=_this.tableData[newIndex].date;//复制

         _this.tableData[Number(newIndex+1)].date=_this.zaiTuoDongdata.date//这里实际上只有3条数据了

         console.log( _this.tableData)
         

 
          _this.tableData.splice(newIndex, 0, currRow);

         

      
        


          

        }
        
      })
    },

   
  }
}
</script>