<template>
    <div v-show="isRight">
        <div class="maskDiv"></div>  
        <div class="reglogDiv">
            <span class="close" @click="close"></span>
            <ul class="tabul">
                <li @click="change(1)" :class="{navOn:show=='1'}">登录</li>
                <li @click="change(2)" :class="{navOn:show=='2'}">注册</li>
            </ul>
            <div v-if="show==1" class="reg">
                <input class="reginput1" type="text" placeholder="请输入您的手机号" maxlength="11"><span class="regbtn">获取验证码</span>
                <input class="reginput2" type="text" placeholder="请输入短信验证码" >
                <div class="regbtn1">登 录</div>
                <div class="tip_info">
                  <span>
                      <em @click="chosen" :class="{bgchonclick:selected}" class="ass_box"></em>
                      同意<a href="" target="_blank">《美联用户隐私保护协议》</a>
                  </span>
                </div>
            </div>
            <div v-else class="reg">
              <input class="reginput1 loginput1" type="text" placeholder="请输入姓名/昵称">
              <input class="reginput2 loginput2" type="text" placeholder="请输入您的手机号" maxlength="11">
              <div class="regbtn1">注 册</div>
              <div class="tip_info">
                <span>
                    <em @click="chosen" :class="{bgchonclick:selected}" class="ass_box"></em>
                    同意<a href="" target="_blank">《美联用户隐私保护协议》</a>
                </span>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
  props:["show","isRight"],
  // props:{
  //   show:{default:""},
  //   isRight:{default:""}
  // },
  data(){
    return{
      show:"",
      // isRight:"",
      selected:true,
    }
  },
  methods:{
    chosen(){
      this.selected=!this.selected;
    },
    close(){
    //     console.log("isRight")
    //     this.isRight=false;
      this.$emit("close",this.isRight)
    },
    change(i){
      this.show=i;
      // this.$emit("change(i)",this.show)
    },
  }
}
</script>
<style>
.hideRegLog1{
  display: block;
}
.hideRegLog{
  display: none;
}
.maskDiv{
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  background:#000;
  opacity:0.6;
  z-index:1999;
}
.reglogDiv{
  width:340px;
  height:300px;
  position:fixed;
  top:50%;
  left:50%;
  margin-left:-170px;
  margin-top:-150px;
  border-radius:5px;
  padding:20px;
  z-index: 2000;
  box-shadow:-3px 3px 5px;
  background:#fff;
  box-sizing:content-box;
}
.close{
  width:17px;
  height:17px;
  position:absolute;
  top:25px;
  right:25px;
  background:url(/image/closeIcon.png) no-repeat;
}
.tabul{
  width:100%;
  height:58px;
  line-height: 58px;
  padding-left:110px;
  border-bottom:1px solid #999;
}
.tabul>li{
  float:left;
  font-size:18px;
  color:#999;
  font-weight: 700;
  cursor: pointer;
  margin-right:30px;
}
.reg{
  width:298px;
  margin:auto;
  text-align:center; 
  position: relative;
}
.reg>input{
  height:40px;
  line-height:40px;
  color:#ccc;
  font-size:16px;
  border:1px solid #999;
  margin:auto;
  margin-top:30px;
  width:100%;
  padding-left:44px;
  border-radius:3px;
}
.reginput1{
  background:url(/image/telPhoneIcon.png) no-repeat 17px 9px;
}
.reginput2{
  background:url(/image/codeIcon.png) no-repeat 17px 9px;
}
.loginput1{
  background:url(/image/nameIcon.png) no-repeat 17px 9px;
}
.loginput2{
  background:url(/image/telPhoneIcon.png) no-repeat 17px 9px;
}
.regbtn{
  position: absolute;
  top:30px;
  right:0px;
  width:98px;
  background:#86c138;
  color:#fff;
  font-size: 16px;
  text-align:center;
  border-radius:3px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.regbtn1{
  width:298px;
  height:40px;
  line-height: 40px;
  text-align:center;
  border-radius:3px;
  font-size:20px;
  color:#fff;
  background:#86c138;
  cursor: pointer;
  margin:30px 0 15px;
}
.reglogDiv .ass_box{
  top:8px;
  left:-20px;
}
.tabul>.navOn{
  font-size: 24px;
  color:#86c138;
}
</style>
