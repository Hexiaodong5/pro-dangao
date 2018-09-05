<template>
    <div id="detail" v-if="detail">

        <div class="header">
            <i class="arrow" @click="goBack"></i>
            {{ detail.pname }}
        </div>

        <div class="content">
            <img :src="require(`../assets/img/${ detail.pic }`)">

            <div class="defChose">
                <p class="pename">{{ detail.pename }}</p>
                <p class="pname">{{ detail.pname }}</p>
                <p class="pintro">{{ detail.intro }}</p>
                <p class="dPrice">{{ '¥ '+detail.price }}</p>
                <div class="choseSize">
                    已选择：{{ detail.dsize }}
                    <i class="arrow_right" @click="detailShow"></i>
                </div>
            </div>

            <div class="toCart" @click="toCartPage">
                <i class="icon_cart"></i>
                <div class="addOne" v-if="isAdd">+1</div>
            </div>

        </div>

        <div class="footer">
            <span class="addCart" @click="addToCart">
                加入购物车
            </span>
            <span class="price">
                {{ '¥ '+ price }}
            </span>
        </div>

        <div class="dShow" v-show="isDShow">
            <p class="dPrice">{{ '¥ ' + price }}</p>
            <ul class="suit">
                <li v-for="tem in sizeObj" :key="tem">
                    {{ tem }}
                </li>
            </ul>
            <p class="sizeT">商品规格</p>
            <ul class="size">
                <li v-for="(tem, index) in sizeList" :key="tem.dsize" 
                    @click="changeSize(index)" 
                    :class="{ isChecked: index == checkNum }"
                >
                {{ tem.dsize }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                pid: null,
                did: null,
                detail: null,
                sizeList: null,
                sizeCur: null,
                sizeObj: null,
                checkNum: 0,
                price: 0,
                isDShow: false,
                isAdd: true
            }
        },
        created(){
            // this.pid = this.$router.params.pid;
            this.pid = 1;
            this.loadData();
        },
        methods: {
            loadData(){
                this.$http.get(`http://127.0.0.1/xbk/data/product/details.php?pid=${this.pid}`)
                        .then((res)=>{
                            this.detail = res.data.details[0];
                            this.sizeList = res.data.details;
                            for(let n = 0; n<this.sizeList.length;n++){
                                console.log(this.sizeList[n])
                                console.log(this.sizeList[n].detail)
                                let arr = this.sizeList[n].detail.split("/");
                                this.sizeList[n].detail = [];
                                this.sizeList[n].detail.push(arr)
                                console.log(this.sizeList[n].detail)
                            }
                            this.sizeCur = this.sizeList[0];
                            
                            // console.log(this.detail === this.sizeCur)

                            this.sizeObj = this.sizeCur['detail'][0];
                            this.price = this.sizeCur['price'];
                            this.pid = this.detail.pid;
                        })
            },
            goBack(){
                this.$router.go(-1);
            },
            changeSize(index){
                this.checkNum = index;
                console.log(index);
                this.sizeCur = this.sizeList[index];
                this.sizeObj = this.sizeCur['detail'][0];
                this.price = this.sizeCur['price'];
                this.pid = this.detail.pid;
            },
            addToCart(){
                if(this.isDShow == false){
                    this.isDShow = true;
                }else{
                    var uid = localStorage.getItem('uid');
                    if(uid){
                        this.$http.get(`http://127.0.0.1/xbk/data/cart/add.php?pid=${this.pid}&uid=${uid}`)
                                    .then((res)=>{
                                        console.log(res.data)
                                    })
                    }
                }
            },
            detailShow(){
                this.isDShow = true;
                console.log(1)
            },
            toCartPage(){
                this.$router.push('/cart')
            }
        }
    }
</script>

<style>
#detail{
    text-align: center;
    font-size: 2rem;
    color: #030303;
}
.header{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 5rem;
    line-height: 5rem;
    font-size: 2.5rem;
    background: #fff;
    z-index: 10;
}
#detail .arrow{
    position: fixed;
    top: 0;
    left: 0;
    /* float: left; */
    width: 5rem;
    height: 5rem;
    background: url("../assets/img/arrow.png") no-repeat center center;
}
#detail .content{
    position: absolute;
    top: 5rem;
    right: 0;
    bottom: 5rem;
    left: 0;
}
#detail img{
    width: 100%;
}
#detail .defChose{
    padding: 1rem 2rem;
}
#detail .pename{
    font-size: 3rem;
}
#detail .pname{
    font-size: 1.8rem;
}
#detail .pintro{
    font-size: 1.6rem;
    line-height: 2rem;
    padding: 1.5rem 0;
    color: #9f9f9f;
}
#detail .toCart{
    width: 5rem;
    height: 5rem;
    position: fixed;
    bottom: 6rem;
    left: 1rem;
    display: inline-block;
    background: url("../assets/img/cart_b.png") no-repeat center center;
    border-radius: 50%;
}
#detail .addOne{
    position: absolute;
    top: -.5rem;
    right: 0;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: red;
    color: #fff;
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
}
#detail .icon_cart{
    font-size: 3rem;
}
#detail .choseSize{
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    font-size: 1.8rem;
    margin-bottom: 5rem;
    border-top: .1rem solid #ddd;
    border-bottom: .1rem solid #ddd;
}
#detail .arrow_right{
    float: right;
    width: 5rem;
    height: 5rem;
    background: url("../assets/img/arrow_right.png") no-repeat center center;
}
#detail .footer{
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: flex;
    height: 5rem;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    line-height: 5rem;
    background: #fff;
}
#detail .footer span{
    flex: 1
}
#detail .addCart{
    background: #000 !important;
    color: #fff;
    font-size: 2rem;
    text-align: center;
}
#detail .price{
    font-size: 2rem;
    padding-right: 1rem;
    text-align: center;
}
#detail .dShow{
    position: fixed;
    right: 0;
    bottom: 5rem;
    left: 0;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, .1);
    background: #fff;
    padding: .5rem;
    z-index: 10;
}
#detail .dPrice{
    font-size: 2rem;
    color: #ff714d;
    padding-bottom: 1rem;
}
#detail .suit, #detail .size{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 1rem;
}
#detail .suit li{
    width: 40%;
    padding: .5rem 0 0 3rem;
    height: 2rem;
    font-size: 1.3rem;
}
#detail .suit li:nth-child(1){
    background: url("../assets/img/size.png") no-repeat left center;
}
#detail .suit li:nth-child(2){
    background: url("../assets/img/person.png") no-repeat left center;
}
#detail .suit li:nth-child(3){
    background: url("../assets/img/saozi.png") no-repeat left center;
}
#detail .suit li:nth-child(4){
    background: url("../assets/img/time.png") no-repeat left center;
}
#detail .sizeT{
    font-size: 1.3rem;
    padding-bottom: 1rem;
}
#detail .size li{
    width: 23%;
    font-size: 1.8rem;
    text-align: center;
    line-height: 3.5rem;
    background: #f7f7f7;
    margin-bottom: .6rem;
}
#detail .isChecked{
    background: url("../assets/img/gou.png") no-repeat -.3rem -.3rem #fff !important ;
    border: .1rem solid #000;
}
</style>