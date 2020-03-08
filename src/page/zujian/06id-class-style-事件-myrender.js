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




// render函数有哪些优势？？？？
// 如何在<p></p>下面在创建一个元素。或者多件多个元素？？？？




// 使用map的优势  可以返回一个全新的数组  可以用于过滤
// 如何在render函数中绑定事件
// 如何在render中循环  使用map
// map数组为空的时候 会报错吗   不会
// render中可以使用props吗  可以
// rendr中如何实现数据双向绑定
// render函数中如何绑定id  使用关键字attrs
// render函数如何绑定class   使用关键字  class
// render函数如何绑定style  使用关键字  style

// 1、render函数是什么
// 在vue中我们使用模板HTML语法组建页面的
// 除此之外，使用还可以使用render函数，用js语言来动态穿件构建DOM
// 因为vue是虚拟DOM，拿到template模板时也要转译成VNode的函数。
// 而直接使用render函数构建DOM。vue就免去了转译的过程。
// 当使用render函数描述虚拟DOM时，vue提供一个函数。
// 这个函数的名字叫createElement。还有约定的简写叫h,
// vm中有一个方法_c,也是这个函数的别名



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
        //    on:{
        //        'click':function(event){
        //            event.stopPropgation();//阻止默认事件
        //            event.stopPrevent();
        //            event.target===event.target.current //点击的当前元素
        //        }
        //    }
          
        },
        "这是一个div元素"
       );
    }
}

