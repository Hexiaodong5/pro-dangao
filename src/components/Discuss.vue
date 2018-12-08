<template>
    <div id="discuss">

        <div id="header">社区</div>
        <div id="itemList">
            <ul>
                <li v-for="(item, index) of list" :key="index">
                    <div class="ttime">{{ item.ttime }}</div>
                    <div class="item">
                        <p class="title">{{ item.title }}</p>
                        <p class="time">{{ item.ttime }}</p>
                        <div class="artImg">
                            <img :src="require(`../assets/img/${ item.pic }`)" alt="">
                        </div>
                        <div class="place">会员精选</div>
                        <div class="lookmore" @click="lookMore(index)">
                            阅读全文
                            <span>
                                <img src="../assets/img/arrow_right.png" alt="">
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list: []
            }
        },
        created(){
            this.loadData();
        },
        methods: {
            loadData(){
                this.$http.get('http://localhost/xbk/data/discuss.php')
                            .then((res)=>{
                                console.log(res)
                                this.list = res.data;
                            })
            },
            lookMore(i){
                this.$router.push(`/article/${i}`);
            }
        }
    }
</script>

<style>

#header{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    box-shadow: 0 0.013333rem 0.026667rem rgba(0, 0, 0, .1);
    background: #fff;
    z-index: 10;
    font-size: 2.5rem;
}
#discuss #itemList{
    position: absolute;
    top: 3rem;
    padding-bottom: 5rem;
}
#discuss #itemList ul{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
}
#discuss #itemList li{
    flex: 1;
    position: relative;
    padding: 3rem;
    
}
#discuss .artImg img{
    width: 90%;
    height: 100%;
}
#itemList .ttime{
    position: absolute;
    top: .5rem;
    left: 2rem;
    font-size: 2rem;
}
#itemList .item{
    background: #FBFBFB;
    border-radius: 1rem;
}
#itemList .title{
    font-size: 1.8rem;
    height: 5rem;
    line-height: 5rem;
}

#itemList .time{
    position: absolute;
    right: 3.5rem;
    bottom: 1rem;
    font-size: 1rem
}
#itemList .place{
    position: absolute;
    bottom: 1rem;
    left: 3.5rem;
    color: crimson
}
#itemList .lookmore{
    display: inline-block;
    width: 33%;
    height: 3rem;
    font-size: 2rem;
    line-height: 3rem;
    position: relative;
}
#itemList .lookmore span{
    position:absolute;
    top:2px;
}
</style>
