<template>
    <div id="mine">
        <div class="img_bg">
            <img src="../assets/img/mine.jpg" v-if="isLogin">
            <div class="regAlog">

                <div class="avatar">
                    <img :src="avatar">
                </div>

                <div class="toLR islogin" v-if="isLogin" @click="regOut">
                    <span>
                        你好!  {{ loginName }}                        
                    </span>
                    <span>
                        注销登录
                    </span>
                </div>

                <div class="toLR" v-if="!isLogin">
                    <span @click="toPage('login')">登录</span>
                    <!-- <span>/</span> -->
                    <span @click="toPage('register')">注册</span>
                </div>

            </div>
        </div>

        <ul class="money">
            <li class="item">
                <span>0张</span>
                <span>优惠券</span>
            </li>
            <li class="item">
                <span>¥0.00</span>
                <span>余额</span>
            </li>
            <!-- <span>
                0张
                <br>
                优惠券
            </span>
            <span>
                ¥0.00
                <br>
                余额
            </span> -->
        </ul>

        <ul class="detail">

            <li v-for="(item,index) in detail" :key="index" class="item">
                <i v-html="item.icon"></i>
                <span>{{ item.item }}</span>
            </li>
            
        </ul>

        <ul class="other">
            <li v-for="(item, index) in other" :key="index" class="item">
                {{ item.item }}
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                isLogin: false,
                avatar: './static/avatar/avatar_default.png',
                loginName: null,
                detail:[
                        {item:'我的订单',icon:`<svg t="1544037269173" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4051" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48"><defs><style type="text/css"></style></defs><path d="M640 256v42.666667h-213.333333V234.666667c0-8.533333 0-12.8 4.266666-21.333334H298.666667v640h469.333333V213.333333h-132.266667c4.266667 8.533333 4.266667 12.8 4.266667 21.333334V256z m-170.666667 0h128v-21.333333c0-34.133333-29.866667-64-64-64S469.333333 200.533333 469.333333 234.666667V256z m-21.333333-85.333333c21.333333-25.6 51.2-42.666667 85.333333-42.666667s64 17.066667 85.333334 42.666667H810.666667v725.333333H256V170.666667h192z m-21.333333 298.666666h213.333333v42.666667h-213.333333v-42.666667z m0 85.333334h213.333333v42.666666h-213.333333v-42.666666z m0 85.333333h213.333333v42.666667h-213.333333v-42.666667z" fill="#444444" p-id="4052"></path></svg>`},
                        {item:'收货地址',icon:`<svg t="1544038020801" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4404" xmlns:xlink="http://www.w3.org/1999/xlink" width="36" height="36"><defs><style type="text/css"></style></defs><path d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z" fill="" p-id="4405"></path></svg>`},
                        {item:'购物车',icon:`<svg t="1544038088757" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4534" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40"><defs><style type="text/css"></style></defs><path d="M773.8 679.3H450.5c-59.7 0-111.4-40.5-125.7-98.4l-77-311c-9.8-39.5-45.1-67.1-85.8-67.1H94.3c-13.8 0-25-11.2-25-25s11.2-25 25-25H162c63.8 0 119 43.2 134.3 105.1l77 311c8.8 35.6 40.5 60.4 77.2 60.4h323.3c36.6 0 68.4-24.8 77.2-60.4l38.2-154.1c2.9-11.8 0.3-24.1-7.2-33.7-7.5-9.6-18.8-15.1-31-15.1H427.7c-13.8 0-25-11.2-25-25s11.2-25 25-25h423.2c27.7 0 53.3 12.5 70.4 34.3 17.1 21.8 23 49.7 16.4 76.6L899.5 581c-14.4 57.8-66 98.3-125.7 98.3z" p-id="4535"></path><path d="M410 800.3m-72.8 0a72.8 72.8 0 1 0 145.6 0 72.8 72.8 0 1 0-145.6 0Z" p-id="4536"></path><path d="M801.5 800.3m-72.8 0a72.8 72.8 0 1 0 145.6 0 72.8 72.8 0 1 0-145.6 0Z" p-id="4537"></path></svg>`},
                        {item:'余额充值',icon:`<svg t="1544037872266" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4273" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40"><defs><style type="text/css"></style></defs><path d="M569.376 479.968 512 537.504 454.624 479.968 432 502.64 488.64 559.44 432 559.44 432 591.536 496 591.536 496 623.616 432 623.616 432 655.696 496 655.696 496 719.872 528 719.872 528 655.696 592 655.696 592 623.616 528 623.616 528 591.536 592 591.536 592 559.44 535.376 559.44 592 502.64Z" p-id="4274"></path><path d="M667.936 314.752c17.76-22.24 28.096-46.736 28.096-69.856C696.032 207.2 672.128 144 512 144c-68.72 0-184.048 13.104-184.048 100.896 0 23.12 10.336 47.6 28.112 69.856C238.704 388.88 160 530.992 160 615.92 160 776.352 298.16 880 512 880c213.824 0 352-103.648 352-264.08C864 530.992 785.28 388.864 667.936 314.752zM512 848c-194.4 0-320-91.088-320-232.08 0-75.536 74.4-206.688 181.152-274.112l30.224-19.088-22.32-27.936c-13.616-17.056-21.12-34.768-21.12-49.888C359.952 182.72 466.288 176 512 176c56.784 0 152.032 8.944 152.032 68.88 0 15.136-7.488 32.848-21.104 49.888l-22.304 27.936 30.224 19.088C757.6 409.232 832 540.384 832 615.92 832 756.912 706.384 848 512 848z" p-id="4275"></path></svg>`},
                    ],
                other:[
                        {item:'用户反馈'},
                        {item:'用户协议'},
                        {item:'版本'},
                    ]

                
            }
        },
        methods: {
            toPage(router){
                 console.log(1)
                this.$router.push(`/${router}`)
            },
            regOut(){
                sessionStorage.removeItem('uid');
                this.isLogin = false;
                console.log(sessionStorage.length)
                this.avatar = './static/avatar/avatar_default.png';
            }
        },
        created(){
            var uid = sessionStorage.getItem('loginUid');
            var loginAvatar = sessionStorage.getItem('loginAvatar');
            var loginName = sessionStorage.getItem('loginName');

            if(uid){

                this.isLogin = true;
                this.avatar = `/static/avatar/${ loginAvatar.slice(1,-1) } `;
                this.loginName = loginName;

            }else{
                this.isLogin = false;
            }
        }
    }
</script>

<style>
#mine{
    font-size: 1.6rem;
    background: #f0f0f0;
    padding-bottom: 5rem;
}
#mine .img_bg{
    width: 100%;
    height: 20rem;
    overflow: hidden;
    position: relative;
}
#mine .img_bg>img{
    width: 100%;
}
#mine .regAlog{
    position: absolute;
    top: 35%;
    right: 10%;
    width: 80%;
    height: 6rem;
    background: #fff;
}
#mine .avatar{
    position: absolute;
    top: -1rem;
    left: 1rem;
    width: 20%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    border: .5rem solid #fff;
}
#mine .avatar img{
    width: 110%;    
    margin-top: -5%;
    margin-left: -5%;
}
#mine .toLR{
    font-size: 1.8rem;
    line-height: 6rem;
    height: 100%;
    width: 50%;
    padding-left: 30%;
}
#mine .toLR span{
    display: inline-block;
    width: 30%;
    height: 3rem;
    line-height: 3rem;
    /* margin-right: -15%; */
}
#mine .islogin{
    width: 70%;
    margin-left: 30%;
    padding: 0;
    font-size: 1.4rem;
}

#mine .money{
    display: flex;
    height: 5rem;
    box-shadow: 0 .1rem .1rem rgba(0, 0, 0, .5);
    background: #fff;
    /* margin-bottom: .5rem; */
    padding-top: 1.5rem;
}
#mine .money .item{
    flex: 1;
}
#mine .money .item span{
    display: inline-block;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
}
#mine .detail{
    display: block;
    border-bottom: 2px solid rgba(131, 128, 128, 0.253);
    /* margin-bottom: .5rem; */
}
#mine .detail .item{
    display: inline-block;
    width: 100%;
    height: 5rem;
    background: #fff;
    /* padding-bottom: 2px; */
}
#mine .detail .item i{
    float: left;
    width: 15%;
    height: 4rem;
    padding-top: 1rem;
}
#mine .detail .item span{
    display: inline-block;
    box-sizing: border-box;
    height: 100%;
    width: 80%;
    text-align: center;
    line-height: 5rem;
    font-size: 1.8rem;
    border-bottom: 2px solid rgba(131, 128, 128, 0.253)
}
#mine .detail .item:last-child span{
    border: none
}

/* #mine .detail .orderImg{
    background: url('../assets/img/order.png') no-repeat center center; 
}
#mine .detail .yueImg{
    background: url('../assets/img/yue.png') no-repeat center center; 
}
#mine .detail .cheaperImg{
    background: url('../assets/img/cheaper.png') no-repeat center center; 
}
#mine .detail .locationImg{
    background: url('../assets/img/location.png') no-repeat center center; 
} */

#mine .other{
    display: block;
} 

#mine .other .item{
    display: inline-block;
    background: #fff;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    width: 95%;
    padding-left: 2rem;
    /* bottom: .1rem solid #ddd; */
    border-bottom: .2rem solid #ddd;
}
#mine .other{
    background: #fff;
}
</style>