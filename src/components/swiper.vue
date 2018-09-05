<template>
    <div class="banner">
        <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide v-for="tem in banner" :key="tem.pic" class="swiper-item"> 
                <img :src="require('../assets/img/'+tem.pic)">
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>

        </swiper>
    </div>
</template>


<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        props: ['banner'],
        data() {
            return {
                swiperOption: {
                    autoplay: {
                        deplay: 2500,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    },
                    effect : 'slide',
                    pagination: { 
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    },
                    loop: true
                    
                }
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style>
.banner{
    padding-top: 5rem;
}
.banner .swiper-box{
    width: 100%;
    height: 20rem;
    margin: 0 auto;
}
.banner .swiper-item{
    width: 100%;
    text-align: center;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.banner .swiper-item img{
    width: 100%;
    height: 100%;
}
</style>