<template>
    <div class="cart">

        <div class="header">
            <i class="arrow" @click="goBack"></i>
            购物车
        </div>

        <div class="content">
            <ul class="itemList" v-if="itemList.length>0">
                <li class="item box" v-for="(tem,i) in itemList" :key="tem.pic">
                    <div class="item">
                        <div class="itemPic">
                            <img :src="require('../assets/img/'+tem['pic'])" alt="">
                        </div>
                        <div class="detail">
                            <p class="pEname">{{ tem.pename }}</p>
                            <p class="pName">{{ tem.pname }}</p>
                            <p class="pSize">规格：{{ tem['dsize'] }}</p>
                            <div class="choseNum">
                                <p class="sPrice">
                                    <span class="p Price">
                                        ¥{{ tem['price'] }}
                                    </span>
                                </p>
                                <p class="handle">
                                    <span class="dish_box" v-show="tem.count<=1" @click="minus(i)">
                                        <img src="../assets/img/dishes.png" alt="" srcset="">
                                    </span>
                                    <span class="mins" v-show="tem.count>1" @click="minus(i)">
                                        <img src="../assets/img/mins.png" alt="">
                                    </span>
                                    <span class="add" @click="addCount(i)">
                                        <img src="../assets/img/add.png" alt="">
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <div class="noItem">
                <img src="../assets/img/cart.jpg" alt="">
                <p>购物车是空的, &nbsp;&nbsp;<router-link to="/" class="toMain">点击</router-link>&nbsp;回首页 </p>
            </div>

        </div>

        <div class="footer">
            <div class="toBuy">
                <div class="pay">下单</div>
                <span class="toPrice">
                    ¥ {{ totalPrice }}
                </span>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    data: function(){
        return {
            itemList: [],
            totalPrice: 0
        }
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        },
        minus: function(i){
            this.itemList[i].count--;
            var count = this.itemList[i].count;
            var pid = this.itemList[i].product_id;
            this.$http.get(`http://127.0.0.1/xbk/data/cart/update_count.php?pid=${pid}&count=${count}`);
            if(count == 0){
                this.loadData();
            }
        },
        loadData(){
            var uid = sessionStorage.getItem('loginUid');
            console.log(uid);
            if(!uid){
                return ;
            };
            this.$http
                .get(`http://127.0.0.1/xbk.data.cart.php?uid=${uid}`)
                .then((res)=>{
                    this.itemList = res.data;
                    console.log(this.itemList)
                })
        }
    }
}
</script>


<style>

</style>
