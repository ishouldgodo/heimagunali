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
// render中可以使用props吗？？？  可以
// rendr中如何实现数据双向绑定？？？？
// render函数中如何绑定id?????  使用关键字attrs
// render函数如何绑定class   使用关键字  class
// render函数如何绑定style  使用关键字  style

// render函数中如何绑定一个事件
// on: {
//     'click': function(event) {
//         console.log(event)
//     }
// }


// render如何添加事件修饰符  ~  只会执行一次
// on: {
//     '~click': function(event) {
//         console.log(event)
//     }
// }

// 在render函数中  style  classs 属性 是不属于 attrs  domProps属性的哈 

export default{
    data(){
        return{
        }
    },
    render(h){
        let that=this;//为了防止this的指向发生改变
       
       
        
       
       
        console.log("render中的this", this);//Proxy {}对象
        return h('div',{
           attrs:{
               id:"box"
           },
           class:{
               'demo':true
           },
           style:{
               'color':"red"
           },
       
          
        },
        // 
            [h('div','这是一个p标签')]
         
       );
    }
}

