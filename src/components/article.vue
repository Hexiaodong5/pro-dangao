<template>
    <div class="article">
        <div class="header">
            <i class="arrow" @click="goBack"></i>
            芒果
        </div>
        <div><img src="../assets/img/mangguo.jpg" alt="芒果" srcset=""></div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit esse dicta itaque facere iste, sed nobis provident aspernatur eos nisi facilis eaque quisquam nemo tempore tempora. Illum illo laudantium ut?</p>
        <div><img src="C:\Users\15305\Desktop\pro_self\xbk\src\assets\img\mangguo2.jpg" alt="芒果" srcset=""></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam mollitia vitae ex dicta quod qui porro amet beatae recusandae non, iste officiis, velit perspiciatis rem repudiandae assumenda ad magni.</p>
        <div><img src="../assets/img/brave.jpg" alt="" srcset=""></div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, aspernatur consequatur fugit esse facere amet doloribus voluptatibus dignissimos unde? Voluptatibus ea saepe consectetur voluptate hic fugiat temporibus atque blanditiis tempora?
        </p>

    </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>

<style>
.article{
    margin-top: 5rem;
    font-size: 1.6rem;
    border: 1.rem solid #fff;
    padding: 0 .5rem;
}
.article .header{
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    height: 5rem;
    line-height: 5rem;
    font-size: 2.5rem;
    background: #fff;
    text-align: center;
    border-bottom: .1rem solid #ddd;
}
.article .arrow{
    width: 5rem;
    height: 5rem;
    float: left;
    background: url("../assets/img/arrow.png") no-repeat center center;
}
.article p{
    text-indent: 3.4rem;
}
.article img{
    width: 100%;
}
</style>
