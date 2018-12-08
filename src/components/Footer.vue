<template>
    <div id="footer">

        <span v-for="(item,index) in footerList" :key="index" @click="goTo(item.path)" class="guide_item">
            <!-- {{item.icon}} -->
            <i :class="item.class"></i>
            {{ item.name }}
        </span>
        
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            footerList:[
                {name: '首页',class: 'iconfont icon-index',path:'/'},
                {name: '分类',class: 'iconfont icon-classify2',path:'/classify'},
                {name: '社区',class: 'iconfont icon-community',path:'/discuss'},
                {name: '我的',class: 'iconfont icon-mine',path:'/mine'}           
             ]
        }
    },
    methods: {
        goTo(path){
            this.$router.push(path)
        }
    }
}
</script>

<style>
#footer{
    position: fixed;
    z-index: 10;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, .1);
    background: #fafafa;
    
}
.guide_item{
    display: flex;
    flex: 1;
    flex-direction: column;
    text-align: center;
    margin-bottom: .2rem;
    margin-top: .8rem;
}
</style>
