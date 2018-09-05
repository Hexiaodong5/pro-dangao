<template>
    <div id="classify">
        <div id="header">
            <img src="../assets/img/dg.png" class="logo">
            <div class="nav">
                <span><a @click="toGoodList(1)" :class="{ isHover:1==kw }">咖啡</a></span>
                <span><a @click="toGoodList(4)" :class="{ isHover:4==kw }">蛋糕</a></span>
                <span><a @click="toGoodList(2)" :class="{ isHover:2==kw }">冰淇淋</a></span>
                <span><a @click="toGoodList(3)" :class="{ isHover:3==kw }">小食</a></span>
            </div>
        </div>

        <div class="good_list_container">
            <v-good-list :search_kw="kw"></v-good-list>
        </div>

        <v-footer></v-footer>
    </div>
</template>

<script>
import vFooter from './Footer'
import vGoodList from './goodList'

    export default {
        data(){
            return {
                kw: 1
            }
        },
        components: {
            vFooter,
            vGoodList
        },
        created:function(){
            console.log(Boolean(this.$router.params))
            if(this.$router.params){
                this.kw = this.$router.params;
            }
        },
        methods: {
            toGoodList(kw){
                this.kw = kw
            }
        }
    }
</script>

<style>
#classify .logo{
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
#classify .nav{
    width: 100%;
    display: flex;
    justify-content: space-between
}
#classify .nav span{
    flex: 1;
    font-size: 2rem;
}
#classify .nav span a{
    padding: .5rem 0;
    display: inline-block;
}
#classify .isHover{
    border-bottom: 1px solid #000;
    color: #000;
    box-sizing: border-box;
}
</style>