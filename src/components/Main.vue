<template>
    <div id="main">
        <div id="header">
           <img src="../assets/img/dg.png"  class="logo"> 
        </div>
        <div class="main_content" >
            <!-- 轮播图 -->
            <div v-if=banner.length >
                <v-swiper :banner="banner"></v-swiper>
            </div>

            <!-- 分类 -->
            <div class="classify" v-if="index">
                <div id="indexitems" style="flex: 1" v-for="(tem ,i) in index" :key="tem.pic" @click="toClassify(i)">
                    <img :src="require(`../assets/img/${tem.pic}`)" alt="">
                    <br>
                    {{ tem.title }}
                </div>
            </div>

            <!-- 榜单 -->
            <p class="topTitle">榜单</p>
            <div class="top">
                <div class="topItem" v-for="tem in top" :key="tem.pic">
                    <img :src="require(`../assets/img/${ tem.pic }`)" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import swiper from './swiper'

export default {
    data: function(){
        return {
            banner: [],
            index: [],
            top: []
        }
    },
    components: {
        'v-swiper': swiper
    },
    created: function(){
        this.loadData();
    },
    methods: {
        loadData: function(){
            this.$http.get(`http://127.0.0.1/xbk/data/product/index.php`)
                        .then((res)=>{
                            this.banner = res.data['carouselItems'];
                            this.index = res.data['recommendedItems'];
                            this.top = res.data['topSaleItems']
                        })
        },
        toClassify(i){
            this.$router.push(`/classify/${ i+1 }`);
        }
    }
}
</script>

<style>
.logo{
    width: 20%;
}
#header{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    box-shadow: 0 0.013333rem 0.026667rem rgba(0, 0, 0, .1);
    background: #fff;
    z-index: 10;
}
#main{
    font-size: 1.6rem;
    border: .1rem solid #fff;
    margin-bottom: 5rem;
}
#main .topTitle{
    font-size: 1.8rem;
    line-height: 5rem;
}
#main .classify{
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
}
#main .top{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 1rem;
}
#main .topItem{
    border-radius: 1.5rem;
    width: 49%;
}
#main .topItem img{
    width: 100%;
}
</style>
