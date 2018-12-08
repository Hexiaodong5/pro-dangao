<template>
    <div class="goodList">
        <div class="items" v-for="tem in goodList" :key="tem.pid" @click="toDetail(tem.pid)">
            <img :src="require(`../assets/img/${tem.pic}`)" alt="">
            <h3>{{ tem.pename }}</h3>
            <h3>{{ tem.pname }}</h3>
            <p>{{ tem.price }}/{{ tem.size }} <i class="icon_cart"></i> </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['search_kw'],
        data(){
            return {
                goodList: null
            }
        },
        created(){
            this.loadData()
        },
        watch: {
            search_kw(){
                this.loadData();
            }
        },
        methods: {
            loadData(){
                this.$http.get(`http://127.0.0.1/xbk/data/product/list.php?kw=${this.search_kw}`)
                        .then((res)=>{
                            this.goodList = res.data.data;
                            console.log(this.goodList)
                        })
            },
            toDetail(pid){
                this.$router.push(`/detail/${pid}`)
            }
        }
    }
</script>

<style>
.goodList{
    margin-top: 10rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 1rem;
}
.goodList .items{
    width: 46%;
    padding: 1rem 0;
}
.goodList .items img{
    width: 100%;
}
.goodList .icon_cart{
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;
    position: relative;
    right: -1rem;
    bottom: -1rem;
    background: url("../assets/img/cart_b.png") no-repeat center center;
    z-index: 1;;
}

</style>