// 我的第一个render函数
// 使用render函数 实现以下的代码

{/* 
<template>
    <ul>
      <li>青椒炒肉丝 </li>
      <li>西红柿炒肉丝 </li>
      <li>蘑菇炒肉丝 </li>
    </ul>
</template >

 */}




// render函数有哪些优势？
// 如何在<p></p>下面在创建一个元素。或者多件多个元素？
// 如何在render函数中绑定事件？？？
// 如何在render中循环？？？
// 循环map??? 
// map数组为空的时候 会报错吗？？
// 使用map的优势？？？
// 那种情况不能够使用map???

export default{
    data(){
        return{
            isRed:true,
            arr:["青椒炒肉丝","西红柿炒肉丝","蘑菇炒肉丝"],
            inputValue:""
        }
    },
    //  h 最终创建的是一个元素
    // 第一个参数div  是表示创建一个div区域的元素
    // 第二个参数class表示的是这个div上有一个属性
    // 第三个参数可以是数组，表示div元素下的子元素
    render(h){
        return h('ul',
        // 第三个参数
        this.arr.map(item=>h("li",item))
       );
        
    }
}

