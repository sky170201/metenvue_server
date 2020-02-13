<template>
  <div>
    <loginreg :show="show" :isRight="isRight" @close="close"></loginreg>
    <div id="fix">
      <ul>
          <li class="li1">
              <em></em>
              <img src="image/fr-div-new-icon01.png" alt="">
              <p>课程咨询</p>
          </li>
          <li class="li2">
              <em></em>
              <img src="image/fr-div-new-icon02.png" alt="">
              <p>收费标准</p>
          </li>
          <li class="li3">
              <em></em>
              <img src="image/fr-div-new-icon03.png" alt="">
              <p>预约试听</p>
          </li>
          <li class="li4">
              <em></em>
              <img src="image/fr-div-new-icon04.png" alt="">
              <p>水平测试</p>
          </li>
          <li class="li5">
              <em></em>
              <img src="image/fr-div-icon05.png" alt="">
              <p><a href="#">回到顶部</a></p>
          </li>
      </ul>
    </div>
    <div class="top">
      <div	class="top_info">
          <div class="top_right">
              <div class="info_left">
                  全站导航
                  <div class="info_hidden">
                      <div class="hidden__link1">
                          <a href="javascript:;">
                              <img src="image/cou-nav-logo1.png" alt=""/>
                          </a>
                          <a href="javascript:;">零基础英语</a>
                          <em>|</em>
                          <a href="javascript:;">实用英语口语</a>
                          <em>|</em>
                          <a href="javascript:;">个人储备英语</a>
                          <em>|</em>
                          <a href="javascript:;">职场英语</a>
                          <em>|</em>
                          <a href="javascript:;">旅游英语</a>
                          <em>|</em>
                          <a href="javascript:;">学生英语</a>
                      </div>
                      <div class="hidden__link2">
                          <a href="javascript:;">
                              <img src="image/cou-nav-logo2.png" alt=""/>
                          </a>
                          <a href="javascript:;">16-18岁</a>
                          <em>|</em>
                          <a href="javascript:;">13-16岁</a>
                          <em>|</em>
                          <a href="javascript:;">10-13岁</a>
                          <em>|</em>
                          <a href="javascript:;">6-10岁</a>
                          <em>|</em>
                          <a href="javascript:;">3-6岁</a>
                      </div>
                      <div class="hidden__link3">
                          <a href="javascript:;">
                              <img src="image/cou-nav-logo3.png" alt=""/>
                          </a>
                          <a href="javascript:;">雅思</a>
                          <em>|</em>
                          <a href="javascript:;">托福</a>
                          <em>|</em>
                          <a href="javascript:;">ACT</a>
                          <em>|</em>
                          <a href="javascript:;">SAT</a>
                      </div>
                      <div class="hidden__link4">
                          <a href="javascript:;">
                              <img src="image/cou-nav-logo5.png" alt=""/>
                          </a>
                          <a href="javascript:;">通用英语</a>
                          <em>|</em>
                          <a href="javascript:;">青少英语</a>
                          <em>|</em>
                          <a href="javascript:;">出国考试</a>
                          <em>|</em>
                          <a href="javascript:;">行业英语</a>
                      </div>
                  </div>
              </div>
              <div class="info_right">
                  <span><a class="ira1" href="javscript:;" @click="changeNone(2)">注册</a></span>
                  <em></em>
                  <span><a class="ira2" href="javscript:;"  @click="changeNone(1)">登录</a></span>
              </div>
              <div class="info_tel">
                  <img src="image/new-hd-tel-icon.png" alt="">
                  <span>400-700-1003</span>
                  <div class="tel_hidden">*致电后，我们将为您提供定制化服务</div>
              </div>
          </div>
      </div>
    </div>
    <div class="header">
      <div class="header_content">
          <div class="header_content_left">
              <div class="left_logo">
                  <img src="image/logo_new.png" alt="">
              </div>
              <div class="header_line"></div>
              <div class="header_content_left_right index_cit">
                  <div class="posi">
                      <img class="img1" src="image/pos-icon01.png" alt="">
                      <span>深圳</span>
                      <img class="img2" src="image/new-tr-icon.png" alt="">
                      <div class="nav_hidlist_cit">
                          <h4>欢迎来到美联英语，请选择合适的美联英语校区所在地</h4>
                          <ul>
                              <li>
                                  <i>B</i><a href="">北京</a>
                              </li>
                              <li>
                                  <i>C</i><a href="">长沙</a><a href="">成都</a><a href="">重庆</a>
                              </li>
                              <li>
                                  <i>D</i><a href="">东莞</a><a href="">大连</a>
                              </li>
                              <li>
                                  <i>F</i><a href="">佛山</a><a href="">福州</a>
                              </li>
                              <li>
                                  <i>G</i><a href="">广州</a>
                              </li>
                              <li class="nav_hidlist_cit_li1">
                                  <i>H</i><a href="">惠州</a><a href="">合肥</a><a href="">哈尔滨</a><a href="">杭州</a>
                              </li>
                              <li>
                                  <i>J</i><a href="">江门</a>
                              </li>
                              <li>
                                  <i>K</i><a href="">昆明</a>
                              </li>
                              <li>
                                  <i>M</i><a href="">绵阳</a>
                              </li>
                              <li>
                                  <i>N</i><a href="">南昌</a><a href="">南京</a><a href="">宁波</a><a href="">南通</a>
                              </li>
                              <li>
                                  <i>Q</i><a href="">泉州</a>
                              </li>
                              <li>
                                  <i>S</i><a href="">深圳</a><a href="">汕头</a><a href="">沈阳</a><a href="">苏州</a>
                              </li>
                              <li>
                                  <i>W</i><a href="">武汉</a><a href="">无锡</a>
                              </li>
                              <li>
                                  <i>X</i><a href="">西安</a><a href="">厦门</a>
                              </li>
                              <li>
                                  <i>Z</i><a href="">中山</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div class="header_content_right">
              <ul>
                  <li class="index1">
                      <router-link to="/">首页</router-link>
                      <span></span>
                  </li>
                  <li class="index2 index_cou">
                      <a class="nav_top_li" href="javascript:;">课程设置</a>
                      <span class="index_border"></span>
                      <div class="nav_hidlist_cou">
                          <ul>
                              <li><a href="">零基础英语</a></li>
                              <li><a href="">英语口语</a></li>
                              <li><a href="">个人储备英语</a></li>
                              <li><a href="">职场英语</a></li>
                              <li><a href="">学生英语</a></li>
                          </ul>
                          <ul>
                              <li><a href="">在线英语</a></li>
                              <li><a href="">青少英语</a></li>
                              <li><a href="">雅思IELTS</a></li>
                              <li><a href="">托福TOTEFL</a></li>
                          </ul>
                      </div>
                  </li>
                  <li class="index2">
                      <router-link class="nav_top_li" to="/teacher" >授课老师</router-link>
                      <span class="index_border"></span></li>
                  <li class="index2 index_sch">
                      <router-link class="nav_top_li" to="/school">校区分布</router-link>
                      <span class="index_border"></span>
                      <div class="nav_hidlist_sch">
                          <ul>
                              <li>
                                  <i>B</i><a href="">北京</a>
                              </li>
                              <li>
                                  <i>C</i><a href="">长沙</a><a href="">成都</a><a href="">重庆</a>
                              </li>
                              <li>
                                  <i>D</i><a href="">东莞</a><a href="">大连</a>
                              </li>
                              <li>
                                  <i>F</i><a href="">佛山</a><a href="">福州</a>
                              </li>
                              <li>
                                  <i>G</i><a href="">广州</a>
                              </li>
                              <li>
                                  <i>H</i><a href="">惠州</a><a href="">合肥</a><a href="">哈尔滨</a><a href="">杭州</a>
                              </li>
                              <li>
                                  <i>J</i><a href="">江门</a>
                              </li>
                              <li>
                                  <i>K</i><a href="">昆明</a>
                              </li>
                              <li>
                                  <i>M</i><a href="">绵阳</a>
                              </li>
                              <li>
                                  <i>N</i><a href="">南昌</a><a href="">南京</a><a href="">宁波</a><a href="">南通</a>
                              </li>
                              <li>
                                  <i>Q</i><a href="">泉州</a>
                              </li>
                              <li>
                                  <i>S</i><a href="">深圳</a><a href="">汕头</a><a href="">沈阳</a><a href="">苏州</a>
                              </li>
                              <li>
                                  <i>W</i><a href="">武汉</a><a href="">无锡</a>
                              </li>
                              <li>
                                  <i>X</i><a href="">西安</a><a href="">厦门</a>
                              </li>
                              <li>
                                  <i>Z</i><a href="">中山</a>
                              </li>
                          </ul>
                      </div>
                  </li>
                  <li class="index2">
                      <router-link to="tuition">学习费用</router-link>
                      <span class="index_border"></span>
                  </li>
                  <li class="index2">
                      <a href="">教学服务</a>
                      <span class="index_border"></span>
                  </li>
                  <li class="index2 index_abt">
                      <a class="nav_top_li" href="">关于美联</a>
                      <span class="index_border"></span>
                      <div class="nav_hidlist_abt">
                          <ul>
                              <li><a href="">品牌荣誉</a></li>
                              <li><a href="">美联资讯</a></li>
                          </ul>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import loginreg from './login_reg.vue'
export default {
  components:{loginreg},
  data(){
      return{
          show:1,
          isRight:false,
      }
  },
  methods:{
    changeNone(n){
        this.isRight=true;
        this.show=n
    },
    close(){
        this.isRight=false;
    },
  },
}
</script>
<style>
/* 登录注册样式 */
/* .hideRegLog1{
  display: block;
}
.hideRegLog{
  display: none;
} */
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
/* 首页内容样式 */
  #fix{
    position:fixed;width:65px;top:22%;right:0px;
    background:#86c138;z-index:9988;font-size:12px;color:#fff;}
#fix li{
    height:59px;
    text-align:center;
    position: relative;
    cursor: pointer;
}
#fix li>img{margin-top:9px;}
#fix li>p{padding:0 8px;}
#fix .li5>p{margin-top:13px;}
#fix .li5>p a{font-size:12px;color:#fff;}
#fix li~li{border-top:1px solid #fff;}
.li1>em,.li2>em,.li3>em,.li4>em{
    width:30px;
    height:25px;
    position: absolute;
    top:9px;
    right:18px;
    opacity: 0;

}
.li1>em{
    background: url(/image/fr-div-new-hover-icon01.png)no-repeat;
}
.li2>em{
    background: url(/image/fr-div-new-hover-icon02.png)no-repeat;
}
.li3>em{
    background: url(/image/fr-div-new-hover-icon03.png)no-repeat;
}
.li4>em{
    background: url(/image/fr-div-new-hover-icon04.png)no-repeat;
}
.li1:hover,.li2:hover,.li3:hover,.li4:hover{
    background: #fff;
    color: #86c138;
}
.li1:hover>em,.li2:hover>em,.li3:hover>em,.li4:hover>em{
    opacity: 1;
}
.li1:hover>img,.li2:hover>img,.li3:hover>img,.li4:hover>img{
    opacity: 0;
}

/*��������¼��ע��*/
.top{width:100%;height:40px;background:#f0f0f0;}
.top_info{
    width:1200px;height:40px;font-size:14px;
    color:#333;margin:0 auto;position:relative;}
.top_right{
    float:right;width:289px;
    height:40px;line-height:40px;
    position:relative;}
.info_left{
    width:72px;
    height:40px;
    float:left;
    line-height:40px;
    cursor:pointer;
    position: relative;
}
.info_hidden{
    width:693px;
    height:0px;
    overflow: hidden;
    transition: all 0.3s linear;
    border-radius:15px;
    background:url(/image/kczx-bg.png)no-repeat;
    position: absolute;
    top:39px;
    right:-218px;
    z-index: 500;
}
.info_left:hover{
    color:#86c138;
}
.info_left:hover .info_hidden{
    height:285px;
}
.info_hidden>div{
    margin:25px 0 15px 25px;
}
.info_hidden>div>a{
    float:none;
    color:#666;
}
.info_hidden>div>a:hover{
    color:#86c138;
}
.info_hidden>div>a>img{
    margin-right:5px;
}
.info_hidden>div>em{
    padding:0 5px;
}
.info_right{
    float:left;
    width:80px;
    line-height:40px;
    margin-left:5px;
    cursor:pointer;
    position:relative;
}
.info_right a{
    position: absolute;
    top:0px;
    color:#333;
}
.info_right a:hover{
    color:#86c138;
}
.info_right .ira1{
    left:0;
}
.info_right .ira2{
    right:0;
}
.info_right>em{
    display: inline-block;
    position: absolute;
    top:12px;
    left:38px;
    width:1px;
    height:15px;
    background: #333;
}
.info_tel{
    position:absolute;
    top:0px;right:0px;
    line-height:40px;
}
.tel_hidden{
    width:214px;
    height:35px;
    line-height: 35px;
    text-align: center;
    background:url(/image/hd-tel-hover-bg.png)no-repeat;
    font-size: 12px;
    color:#777;
    border-radius: 5px;
    position:absolute;
    top:27px;
    right:-4px;
    display: none;
}
.info_tel:hover .tel_hidden{
    display: block;
}
/*������Ϣ*/
.header{width:100%;height:80px;background:#fff;}
.header_content{width:1200px;height:80px;margin:0 auto;}
.header_content_left{
    width:271px;height:80px;
    float:left;padding-top:20px;
    position:relative;
}
.header_content_left img{
    vertical-align:middle;
}
.header_content_left left_logo{
    width:110px;
    height:80px;
    float:left;
}
.header_content_left .img1{
    display:block;
    padding:3px 0px 0px 20px;
    float:left;
}
.header_content_left .img2{
    display:block;
    float:left;
    margin:11px 0px 0px;
}
.header_content_left span{
    display:block;float:left;width:52px;
    height:28px;text-align:center;
    line-height:28px;color:#333;font-size:16px;}
.header_line{
    width:1px;
    height:40px;
    position:absolute;
    top:25px;
    left:130px;
    background:#888;
}
.header_content_left_right{
    width:136px;
    height:60px;
    position:absolute;
    top:27px;
    right:0;
}
.posi{margin-top:4px;position:relative;}
.header_content_right{width:876px;height:80px;float:right;}
.header_content_right>ul{
    height:80px;
    margin:0;padding:0;}
.header_content_right>ul>li{
    float:left;
    height:80px;
}
.header_content_right>ul>li>a{
    padding:0px 30px;height:80px;
    text-align:center;line-height:80px;
    cursor:pointer;font-size:16px;color:#333;}
.index1{position:relative;color:#86c138;}
.index1>span{
    width:95px;height:5px;
    background:#86c138;
    position:absolute;bottom:0px;left:0px;}
.index2{position:relative;color:#86c138;}
.index2>span{
    display:none;
    width:95px;height:5px;
    background:#86c138;margin-left:16px;
    position:absolute;bottom:0px;left:0px;}
.index2:hover .nav_top_li{
    color:#86c138;
}
.index2:hover .index_border{
    display:block;
}

.nav_hidlist_cit{
    /*display: none;*/
    position:absolute;
    top:49px;left:5px;
    z-index: 300;
    width:400px;
    height:0px;
    overflow: hidden;
    transition: all 0.3s linear;
    background:url(/image/cho-bg01.png) no-repeat;
}
.nav_hidlist_cit>h4{
    width:390px;height:50px;
    line-height:50px;
    font-weight: 400;
    font-size:14px;
    color:#333;
    margin:18px 5px 0;
    text-align: center;
    background:#f0f0f0;
}
.nav_hidlist_cit>ul>li{
    float:left;
    width:170px;height:40px;
    line-height: 40px;
    padding-left:8px;
}
.nav_hidlist_cit .nav_hidlist_cit_li1{
    width:180px;
}
.nav_hidlist_cit>ul>li a{
    color:#666;font-size:14px;
    padding-left:8px;
    float:none;line-height:0;
    cursor:pointer;
}
.nav_hidlist_cit>ul>li i{
    font-size:14px;
    color:#68d3ff;
    font-style: normal;
    font-weight:400;
}
.index_cit:hover .nav_hidlist_cit{
    /*display: block;*/
    height:418px;
}
.nav_hidlist_cit a:hover{
    color:#86c138;
}
.nav_hidlist_cou{
    position:absolute;
    top:81px;left:5px;
    z-index: 500;
    width:270px;
    height:0px;
    overflow: hidden;
    transition: all 0.3s linear;
    background:url(/image/nav-cou-list-bg01.png) no-repeat;
}
.nav_hidlist_cou a{font-size:14px;color:#666;float:none;}
.index_cou:hover .nav_hidlist_cou{
    height:285px;
}
.nav_hidlist_cou a:hover{
    color:#86c138;
}
.nav_hidlist_cou>ul{float:left;}
.nav_hidlist_cou>ul>li{
    margin:19px 10px;
    text-align:center;
    width:110px;height:37px;
    line-height: 37px;
    border-bottom:1px dashed #d8d8d8;
}
.nav_hidlist_sch{
    position:absolute;
    top:81px;left:-278px;
    z-index: 400;
    width:400px;
    height:0;
    overflow: hidden;
    transition: all 0.3s linear;
    background:url(/image/schCity-bg.png) no-repeat;
}
.nav_hidlist_sch>ul{margin-top:20px;}
.nav_hidlist_sch>ul>li{
    float:left;
    width:177px;height:40px;
    line-height: 40px;
    padding-left:8px;
}
.nav_hidlist_sch>ul>li a{
    color:#666;font-size:14px;
    padding-left:8px;
    float:none;line-height:0;
    cursor:pointer;
}
.nav_hidlist_sch>ul>li i{
    font-size:14px;
    color:#68d3ff;
    font-style: normal;
    font-weight:400;
}
.index_sch:hover .nav_hidlist_sch{
    height:346px;
}
.nav_hidlist_sch a:hover{
    color:#86c138;
}

.nav_hidlist_abt{
    position:absolute;
    top:77px;left:2px;
    z-index:450;
    border-radius:5px;
    text-align:center;
    width:121px;
    height:0px;
    overflow: hidden;
    transition:all 0.3s linear;
    background:url(/image/pinpai-list-bg.png) no-repeat;
}
.nav_hidlist_abt>ul{
    margin-top:23px;
    text-align: center;
}
.nav_hidlist_abt>ul>li{
    height:36px;
    margin-top:10px;
    border-bottom:1px dashed #666;
}
.nav_hidlist_abt>ul>li>a{
    font-size:14px;
    color:#666;
}
.index_abt:hover .nav_hidlist_abt{
    height:105px;
}
.nav_hidlist_abt a:hover{
    color:#86c138;
}
</style>
