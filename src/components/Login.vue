<template>
    <div class="login">
        <div class="header">
            <i class="arrow" @click="goBack"></i>
            登录
        </div>
        <div class="content">
            <input type="text" class="uname" placeholder="请输入手机号" v-model="uname" @blur="checkUname"> 
            <br>
            <div class="help_box">
                <span v-show="isUname">请输入用户名</span>
                <span v-show="isUnameCan" class="isUnameCan">用户存在</span>
                <span v-show="isUnameErr">用户不存在, 请重新输入</span>
            </div>
            <input type="password" class="upwd" placeholder="请输入密码" v-model="upwd" @blur="checkPwd">
            <br>
            <div class="help_box">
                <span v-show="isUpwdErr">密码不正确, 请重新输入</span>
                <span v-show="isUpwd">请输入密码</span>
            </div>
            <button @click="login">立即登录</button>
            <div class="toReg">
                还没注册?
                <router-link to="/regiter">立即注册</router-link>
            </div>
            <div class="loginSucc" v-if="loginSucc">
                <div class="sContent">
                    登录成功
                    <br>
                    <span>{{ time }}秒后转到首页</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            uname: "",
            upwd: "",
            isUname: false,
            isUnameCan: false,
            isUnameErr: false,
            isUpwdErr: false,
            isUpwd: false,
            time: 3,
            loginSucc: false
        }
    },
    methods: {
        goBack(){
            this.$router.go(-1);
        },
        checkUname(){
            if(this.uname != ""){
                this.$http.get(`http://localhost/xbk/data/user/check_uname.php?uname=${this.uname}`)
                            .then((res)=>{
                                if(res.data.code == 201){
                                    this.isUnameCan = true;
                                    this.isUnameErr = false;
                                }else if(res.data.code == 200){
                                    this.isUnameErr = true;
                                    this.isUnameCan = false;
                                }
                            })
            }else{
                this.isUname = true;
            }
        },
        checkPwd(){
            var reg = /^[a-zA-Z\d]{6,8}$/;
            if(!reg.test(this.upwd)){
                this.isUpwd = true;
            }else{
                this.isUpwd = false;
            }
        },
        login(){
            if(!this.isUpwd && !this.isUname && this.upwd!="" && this.uname != ""){
                this.$http.get(`http://localhost/xbk/data/user/login.php?uname=${this.uname}&upwd=${this.upwd}`)
                            .then((res)=>{
                                console.log('login')
                                console.log(res.data)
                                if(res.data.code == 200){
                                    this.loginSucc = true;
                                    console.log(1)
                                    var uid = res.data.uid;
                                    localStorage.setItem('uid',uid);
                                    var timer = setInterval(()=>{
                                        this.time--;
                                        if(this.time == 0){
                                            clearInterval(timer);
                                            timer = null;
                                            this.loginSucc = false;
                                            this.$router.push('/index');
                                        }
                                    },1000)
                                }else{
                                    this.isUpwdErr = true;
                                }
                            })
            }
        }
    }
}
</script>

<style>
.login .header{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 5rem;
    line-height: 5rem;
    font-size: 2.5rem;
    background: #fff;
    text-align: center;
    border-bottom: 1rem solid #ddd
}
.login .arrow{
    width: 5rem;
    height: 5rem;
    float: left;
    background: url("../assets/img/arrow.png") no-repeat left center;
}
.login .content{
    margin-top: 10rem;
} 
.login input{
    width: 80%;
    height: 5rem;
    border-radius: 2%;
    padding-left: 4rem;
    font-size: 3rem;
    margin-top: 1rem;
    outline: none;
}
.login .uname{
    background: url("../assets/img/user2.png") no-repeat left center;
}
.login .upwd{
    background: url("../assets/img/upwd.png") no-repeat left center;
}
.login button{
    width: 92%;
    height: 5rem;
    background: #00b369;
    outline: none;
    border: none;
    font-size: 2rem;
    color: #fff;
    margin-top: 1rem;
}
.login .help_box{
    padding: .5rem 3rem 0;
    font-size: 1.5rem;
    text-align: left;
    color: #ff714e;
    height: 1.5rem;
}
.login .isUnameCan{
    color: #00b369;
}
.login .loginSucc{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .4)
}
.login .sContent{
    position: absolute;
    top: 35%;
    left: 20%;
    width: 60%;
    height: 16rem;
    line-height: 8rem;
    font-size: 2rem;
    background: #f1f1f1;
    border-radius: 1rem;
}

.login .toReg{
    line-height: 5rem;
    font-size: 1.3rem;
    padding-left: 2rem;
    text-align: center;
}
</style>
