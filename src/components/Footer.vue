<template>
    <div id="footer">
        <span class="guide_item" @click="lintTo('')">
            <i class="iconfont">&#xe6c8;</i>
            首页
        </span>
        <span class="guide_item" @click="lintTo('classify')">
            <i class="iconfont">&#xe7f9;</i>
            分类
        </span>
        <span class="guide_item" @click="lintTo('discuss')">
            <i class="iconfont">&#xe60a;</i>
            社区
        </span>
        <span class="guide_item" @click="lintTo('mine')">
            <i class="iconfont">&#xe600;</i>
            我的
        </span>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            curPage: 'main'
        }
    },
    methods: {
        lingTo(path){
            this.$router.push("/"+path)
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
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: .2rem;
    margin-top: .8rem;
}
</style>
