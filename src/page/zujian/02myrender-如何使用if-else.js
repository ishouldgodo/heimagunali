// 我的第一个render函数
// 使用render函数 实现以下的代码

{/* 
<template>
    <div :class="{'is-red':isRed }">
       <p>这是一个render</p>
    </div>
</template >

 */}




// render函数有哪些优势？
// 如何在<p></p>下面在创建一个元素。或者多件多个元素？
// 这是render函数的使用方法
export default{
    data(){
        return{
            isRed:true,
            arr:[1,2,3,4],
            inputValue:""
        }
    },
    //  h 最终创建的是一个元素
    // 第一个参数div  是表示创建一个div区域的元素
    // 第二个参数class表示的是这个div上有一个属性
    // 第三个参数可以是数组，表示div元素下的子元素
    render(h){
        // 在render函数中进行判断
        if (this.isRed==true){
            return h('div', {//第二个参数
                class: {
                    'is-red': this.isRed
                }
            },
            // 第三个参数
            [h('p', '这是一个render  true')]);
        }else{
            return h('div', {//第二个参数
                class: {
                    'is-red': this.isRed
                }
            },
            // 第三个参数
            [h('p', '我也是render函数isRed的值是false')]);
        }
    }
}

