<template>
<div>
  <div class="pic"></div>
  <div class="topic">
    <div class="module0">
      <div class="m0_d1">
        <span>快速了解美联</span>
        <img src="image/banner-play-icon01.png">
      </div>
      <div class="module0_border">
        <div class="module0_border_label">
          <span>价值</span>
          <div>450元</div>
        </div>
        <h2 class="module0_border_word">领取<span>免费</span>试听课</h2>
        <input class="reg_input" type="tel" maxlength="11" value="请输入手机号" onfocus="if(value=='请输入手机号'){value=''}" onblur="if(value==''){value='请输入手机号'}">	
        <div class="reg_btn">立即领取</div>
        <div class="reg_btn_count"><span>759742</span>位用户已预约</div>
        <div class="metentips">
          <div class="tip_info">
            <span>
              <em @click="chosen(1)" class="chonclick" :class="gou"></em>
              同意<a href="" target="_blank">《美联用户隐私保护协议》</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- <script>
      var emcho=document.querySelector("[emcho]");
      emcho.onclick=function(){
        if(this.className==" bgchonclick chonclick"){
          this.className="chonclick";
        }else{
          this.className=" bgchonclick chonclick";
        }
      }
    </script> -->
    <div class="part1">
        <div class="part1_top">
          <h2>英语课程 - 针对不同人群 提供个性课程</h2>
          <h3>- Courses -</h3>
        </div>
        <div class="part1_list">
          <div class="list_right">
            <span>换一批</span>
            <em></em>
          </div>
          <ul class="part1_li">
            <li>
              <a href="">
                <img src="image/part1-img01.jpg" alt="">
                <h4>零基础英语</h4>
                <p>从零基础开始，会说英语，会用英语</p>
              </a>
              <div><a href="">免费试听</a></div>
            </li>
            <li>
              <a href="">
                <img src="image/part1-img07.jpg" alt="">
                <h4>常用英语口语</h4>
                <p>英语口语，地道发音，流利对话交流</p>
              </a>
              <div><a href="">免费试听</a></div>
            </li>
            <li>
              <a href="">
                <img src="image/part1-img02.jpg" alt="">
                <h4>个人英语储备</h4>
                <p>培养兴趣，学习英语，以备将来之需</p>
              </a>
              <div><a href="">免费试听</a></div>
            </li>
            <li>
              <a href="">
                <img src="image/part1-img03.jpg" alt="">
                <h4>职场英语</h4>
                <p>掌握职场英语，个人进步，职场升职</p>
              </a>
              <div><a href="">免费试听</a></div>
            </li>
            <li>
              <a href="">
                <img src="image/part1-img11.jpg" alt="">
                <h4>雅思IELTS</h4>
                <p>夯实基础，强化方法，针对性训练</p>
              </a>
              <div><a href="">免费试听</a></div>
            </li>
            <li>
              <a href="">
                <img src="image/part1-img08.jpg" alt="">
                <h4>在线英语</h4>
                <p>英语外教，真人在线，学习自由灵活</p>
              </a>
              <div><a href="">免费试听</a></div>
            </li>
          </ul>
        </div>
        <div class="part1_tip" @click="Open" :id="op">
          <em></em>
          温馨小贴士：英语学习者四大难题 帮你解决 >
        </div>
        <div class="hid">
          <em></em>
          <div class="hid_list">
            <div class="hid_list_d1 hid_list_d1_post">
              <h3>英语很难学不会</h3>
              <h4>有趣教材、英语老师、欢乐课堂。</h4>
              <h5>在美联，学习是愉悦而美好的！</h5>
              <div><em></em></div>
            </div>
            <div class="hid_list_d1 hid_list_d2_post">
              <h3>没有基础不敢学</h3>
              <h4>科学规划的课程，能力相仿的同学。</h4>
              <h5>在美联，你不是一个人在奋斗！</h5>
              <div><em></em></div>
            </div>
            <div class="hid_list_d1 hid_list_d3_post">
              <h3>工作太忙时间少</h3>
              <h4>手机自由约课，线上线下灵活上课。</h4>
              <h5>在美联，工作学习两不误！</h5>
              <div><em></em></div>
            </div>
            <div class="hid_list_d1 hid_list_d4_post">
              <h3>毅力不够怕放弃</h3>
              <h4>学习督导老师跟进英语学习流程。</h4>
              <h5>在美联，你能获得很多英语学习帮助！</h5>
              <div><em></em></div>
            </div>
            <img src="image/part1-hide-img.png" alt=""/>
            <div class="hid_btn">免费预约体检 ></div>
          </div>
        </div>
      <!-- part1隐藏部分下拉-->
      <!-- <script>
        var divOpen=document.querySelector("div.part1>div.part1_tip");
        divOpen.onclick=function(){
          if(this.id=="open"){
            this.id="";
          }else{
            this.id="open";
          }
        }
      </script> -->
      </div>
    <div class="part2">
      <div class="part2_cont">
        <div class="part2_cont_left">
          <em></em>
          <h3>学费评估</h3>
          <h3>Expenses</h3>
          <h3>-</h3>
          <h4>英语课程与服务</h4>
          <h4>您的学费您做主</h4>
        </div>
        <div class="part2_cont_right">
          <div class="part5_icon02">算</div>
          <h4>学好英语 需要花多少钱？</h4>
          <div class="select">
            <h4>请选择预期达到的目标</h4>
            <ul class="d-flex flex-wrap">
              <li style="color:#86c138">
                <em p2_emcho class="part2_em bgpart2_em" v-click1></em>
                个人储备
              </li>
              <li>
                <em p2_emcho class="part2_em" v-click1></em>
                日常口语
              </li>
              <li>
                <em p2_emcho class="part2_em" v-click1></em>
                商务交流
              </li>
              <li>
                <em p2_emcho class="part2_em" v-click1></em>
                出国旅游
              </li>
              <li>
                <em p2_emcho class="part2_em" v-click1></em>
                雅思托福
              </li>
              <li>
                <em p2_emcho class="part2_em" v-click1></em>
                青少英语
              </li>
            </ul>
            <h4>请选择意向的学习方式</h4>
            <ul class="d-flex flex-wrap danx">
              <li  style="color:#86c138">
                <em p2_emcho2 class="part2_em bgpart2_em" v-click></em>
                1-4人小班
              </li>
              <li>
                <em p2_emcho2 class="part2_em" v-click></em>
                VIP一对一
              </li>
              <li>
                <em p2_emcho2 class="part2_em" v-click></em>
                在线学习
              </li>
            </ul>
          </div>
          <!-- part2 单选方框选择功能，选择一个，关闭另一个-->
          <!-- <script>
            var emchos2=document.querySelectorAll("[p2_emcho2]");
            console.log(emchos2);
            for(emcho of emchos2){
              emcho.onclick=function(){
                if(this.className=="part2_em bgpart2_em"){
                  this.className="part2_em";
                  this.parentNode.style.color="#212529";
                }else{
                  var count=document.querySelector(
                      "ul.danx>li>em.bgpart2_em"
                  );
                  console.log(count);
                  if(count!==null){
                    count.className="part2_em";
                    count.parentNode.style.color="#212529";
                    this.className="part2_em bgpart2_em";
                    this.parentNode.style.color="#86c138";
                  }else{
                    this.className="part2_em bgpart2_em";
                    this.parentNode.style.color="#86c138";
                  }
                }
              }
            }
          </script> -->
          <!-- part2 多选方框选择功能，最多两个-->
          <!-- <script>
            var emchos=document.querySelectorAll("[p2_emcho]");
            console.log(emchos);
            for(emcho of emchos){
              emcho.onclick=function(){
                if(this.className=="part2_em bgpart2_em"){
                  this.className="part2_em";
                  this.parentNode.style.color="#212529";
                }else{
                  var count=document.getElementsByClassName("bgpart2_em");
                  console.log(count);
                  if(count.length<3){
                    this.className="part2_em bgpart2_em";
                    var li_color=this.parentNode;
                    console.log(li_color);
                    this.parentNode.style.color="#86c138";
                  }else{
                    alert("您最多可以选择两个")
                  }
                }
              }
            }
          </script> -->
          <div class="assess">
            <div class="clearfix">
              <input type="tel" maxlength="11" class="ass_input" value="请输入手机号，评估学习费用" onfocus="if(value=='请输入手机号，评估学习费用'){value=''}" onblur="if(value==''){value='请输入手机号，评估学习费用'}">
              <div class="ass_d1">免费评估</div>
            </div>
            <div class="ass_tip">
              <span @click="chosen(2)" :class="gou1" class="ass_box"></span>
              <span>
                同意<a href="" target="_blank">《美联用户隐私保护协议》</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    <!-- part2 免费评估同意方框-->
    <!-- <script>
      var assbtns=document.getElementsByClassName("ass_box");
      console.log(assbtns);
      for(var assbtn of assbtns){
        assbtn.onclick=function(){
          if(this.className=="ass_box ass_onclick"){
            this.className="ass_box";
          }else{
            this.className="ass_box ass_onclick";
          }
        }
      }
    </script> -->
    <div class="part3">
      <div class="part3_tiltel">
        <p class="p1">等级设置 - 欧洲CEFR标准 科学划分英语等级</p>
        <p class="p2">- Levels -</p>
      </div>
      <div class="part3_img">
        <ul>
          <li>
            <div>
              <h4>能力描述(M1-M3)</h4>
              <p>能够交流生活和工作中的基本信息和观点；</p>
              <p>能够使用英语进行购物、讨论生活、活动建议等；</p>
              <p>能读懂并撰写简单的商务通知、邮件信函等。</p>
            </div>
          </li>
          <li>
            <div>
              <h4>能力描述(M4-M6)</h4>
              <p>能够在工作中进行评估、讨论、演讲等工作；</p>
              <p>能够就大部分日常生活话题进行沟通讨论交流；</p>
              <p>可以胜任商务职场上一般性的英语语言要求场合。</p>
            </div>
          </li>
          <li>
            <div>
              <h4>能力描述(M7-M9)</h4>
              <p>能够清晰准确理解表达工作及生活中大部分话题；</p>
              <p>能够在适当帮助下在自己专长领域参加工作谈判；</p>
              <p>探讨商务活动中的常见问题及发表不同意见等。</p>
            </div>
          </li>
          <li>
            <div>
              <h4>能力描述(M10-M12)</h4>
              <p>能够在社交、学术和工作中顺畅交流大部分话题；</p>
              <p>可以对复杂事物用清晰流畅丰富的语言进行陈述；</p>
              <p>能够组织讨论社会工作生活艺术话题并进行交流等。</p>
            </div>
          </li>
        </ul>
        <img src="image/part4-img-bt.png" alt=""/>
      </div>
      <div class="part3_btn">免费测试英语水平</div>
    </div>
    <div class="part4">
      <div class="part4_content">
        <div class="part4_content_left">
          <em></em>
          <h2>
            学习目录<br>
            Goals<br>
            -
          </h2>
          <h3>
            把知识带进教师<br>
            把教室带进生活
          </h3>
        </div>
        <div class="part4_content_right">
          <ul>
            <li>
              <img src="image/part2-img01.jpg" alt=""/>
              <h4>长远视野</h4>
              <div class="part4_hid_div">
                <h5>长远视野</h5>
                <ul>
                  <li>• 与时俱进的外国文化</li>
                  <li>• 着眼未来的长远视野</li>
                  <li>• 批判严谨的思维模式</li>
                  <li>• 坚持不懈的行为习惯</li>
                </ul>
              </div>
            </li>
            <li>
              <img src="image/part2-img02.jpg" alt=""/>
              <h4>地道表达</h4>
              <div class="part4_hid_div">
                <h5>地道表达</h5>
                <ul>
                  <li>• 标准准确的英语发音/li>
                  <li>• 流利地道的英语口语</li>
                  <li>• 应答顺畅的沟通交流</li>
                  <li>• 从容潇洒的自我风采</li>
                </ul>
              </div>
            </li>
            <li>
              <img src="image/part2-img03.jpg" alt=""/>
              <h4>P21学习技能</h4>
              <div class="part4_hid_div">
                <h5>21世纪学习技能</h5>
                <ul>
                  <li>• 沟通能力 Communication</li>
                  <li>• 合作能力 Collaboration</li>
                  <li>• 批判性思维 Critical Thinking</li>
                  <li>• 创造能力 Creativity</li>
                </ul>
              </div>
            </li>
            <li>
              <img src="image/part2-img04.jpg" alt=""/>
              <h4>自主学习能力</h4>
              <div class="part4_hid_div">
                <h5>自主学习能力</h5>
                <ul>
                  <li>• 系统培养自主学习能力</li>
                  <li>• 养成坚持不懈进步习惯</li>
                  <li>• 努力挖掘美好的自己</li>
                  <li>• 适应社会发展变化趋势</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="part5">
      <div class="part3_tiltel">
        <p class="p1">教学特色 - 六大学习服务 给你不同学习体验</p>
        <p class="p2">- Advantages -</p>
      </div>
      <div class="part5_content clearfix">
        <ul>
          <li>
            <img src="image/part3-icon01.png" alt=""/>
            <div class="part5_content_word">
              <h4>英语团队研发教材</h4>
              <p>
                携手美国国家地理学习<br>
                合作研发Explore教材
              </p>
            </div>
          </li>
          <li>
            <img src="image/part3-icon02.png" alt=""/>
            <div class="part5_content_word">
              <h4>英语团队研发教材</h4>
              <p>
                携手美国国家地理学习<br>
                合作研发Explore教材
              </p>
            </div>
          </li>
          <li>
            <img src="image/part3-icon03.png" alt=""/>
            <div class="part5_content_word">
              <h4>英语团队研发教材</h4>
              <p>
                携手美国国家地理学习<br>
                合作研发Explore教材
              </p>
            </div>
          </li>
          <li>
            <img src="image/part3-icon04.png" alt=""/>
            <div class="part5_content_word">
              <h4>英语团队研发教材</h4>
              <p>
                携手美国国家地理学习<br>
                合作研发Explore教材
              </p>
            </div>
          </li>
          <li>
            <img src="image/part3-icon05.png" alt=""/>
            <div class="part5_content_word">
              <h4>英语团队研发教材</h4>
              <p>
                携手美国国家地理学习<br>
                合作研发Explore教材
              </p>
            </div>
          </li>
          <li>
            <img src="image/part3-icon06.png" alt=""/>
      <div class="part5_content_word">
        <h4>英语团队研发教材</h4>
        <p>
          携手美国国家地理学习<br>
          合作研发Explore教材
        </p>
      </div>
      </li>
      </ul>
    </div>
    </div>
    <div class="part6">
      <div class="part3_tiltel">
        <p class="p1">校区分布 - 百余家校区 就近学习节省时间</p>
        <p class="p2">- Schools -</p>
      </div>
      <h4>
        <a href="">
          <em></em>
          <span>720°在线参观校区环境</span>
        </a>
      </h4>
    </div>
    <div class="part7">
      <div class="part3_tiltel">
        <p class="p1">美联大数据 - 真实数据有温度 明智选择才放心</p>
        <p class="p2">- Datas -</p>
      </div>
      <div class="part7_content">
        <div class="part7_table">
          <div class="part7_table_tiltle">数据来源：美联学习后台系
          </div>
          <div>
            <ul class="part7_ul1">
              <li class="part7_table_li1">
                <h3>200,000+</h3>
                <h5>累计毕业学员</h5>
              </li>
              <li class="part7_table_li2">
                <h3>859,213+</h3>
                <h5>累计授课课时(2018年)</h5>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li class="part7_table_li3">
                <h3>13年</h3>
                <h5>专注英语教育</h5>
              </li>
              <li class="part7_table_li4">
                <h3>6,513</h3>
                <h5>11月份新增学员</h5>
              </li>
              <li class="part7_table_li5">
                <h3>2500+</h3>
                <h5>美联老师</h5>
              </li>
            </ul>
          </div>
          <div class="part7_bottom"></div>
        </div>
      </div>
    </div>
    <div class="part8">
      <div class="part3_tiltel">
        <p class="p1">开始学习 - 免费领取英语学习礼包</p>
        <p class="p2">- Start -</p>
      </div>
      <div class="part8_content">
        <div class="part8_cont_left">
          <img src="image/part8-img.jpg" alt=""/>
        </div>
        <div class="part8_cont_right">
          <h4>英语学习礼包</h4>
          <div class="part8_cont_right_top">
            <img src="image/part8-pre-icon.png" alt=""/>
            <div class="d1">
              <ul>
                <li>
                  <em></em>
                  <span>1对1英语学习规划与指导</span>
                </li>
                <li>
                  <em></em>
                  <span>500精选主题试听课任选1节</span>
                </li>
                <li>
                  <em></em>
                  <span>报名领取1000元奖学金</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="part8_cont_right_bottom">
            <div class="bottom_input">
              <input type="text" value="输入手机号，预约免费领取礼包" onfocus="if(value=='输入手机号，预约免费领取礼包'){value=''}" onblur="if(value==''){value='输入手机号，预约免费领取礼包'}"/>
            </div>
            <div class="part8_btn">免费领取</div>
          </div>
          <div class="ass_tip">
            <span class="ass2_box" @click="chosen(3)" :class="gou3"></span>
            <span>
              同意<a href="" target="_blank">《美联用户隐私保护协议》</a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- part8 免费领取同意方框-->
    <!-- <script>
      var assbtns=document.getElementsByClassName("ass2_box");
      console.log(assbtns);
      for(var assbtn of assbtns){
        assbtn.onclick=function(){
          if(this.className=="ass2_box ass_onclick"){
            this.className="ass2_box";
          }else{
            this.className="ass2_box ass_onclick";
          }
        }
      }
    </script> -->
  </div>
</div>
</template>
<script>
export default {
  data(){
    return{
      gou:"",
      gou1:"",
      gou3:"",
      op:"",
    }
  },
  methods:{
    // var emcho=document.querySelector("[emcho]");
      chosen(i){
        if(i=="1"){
          this.gou==" bgchonclick "?this.gou="":(this.gou=" bgchonclick ")
        }else if(i=="2"){
          this.gou1==" bgchonclick "?this.gou1="":(this.gou1=" bgchonclick ")
        }else{
          this.gou3==" bgchonclick "?this.gou3="":(this.gou3=" bgchonclick ")
        }
    },
    Open(){
      this.op==""?this.op="open":(this.op="");
    }
  }
}
</script>
<style>
.pic{
width:100%;height:560px;
	background:#015c88 url(/image/banner-temp.jpg) -230px;
	background-size:1920px 560px;
	position:absolute;}
  .topic{background:#fff;}
.module0{
	width:1200px;height:560px;
	margin:0 auto;position:relative;}
.m0_d1{
	position:absolute;
	left:10px;
	bottom:90px;
	background:#86c138;
	border-radius:60px;
	padding:12px 40px 34px;
	cursor:pointer;
	height:20px;
	line-height:20px;
}
.m0_d1>span{
	font-size:16px;
	color:#fff;
	float:left;
}
.m0_d1>img{float:left;margin-left:15px;}
.module0_border{
	width:340px;background:#fff;
	position:absolute;top:165px;
	left:830px;border-radius:5px;}
.module0_border_label{
	width:96px;height:96px;
	background:url(/image/reg-label01.png);
	position:absolute;top:-45px;right:-20px;}
.module0_border_label>span{
	color:#ffa019;font-size:16px;
	position:absolute;top:36px;left:20px;}
.module0_border_label>div{
	color:#fefefe;font-size:16px;
	position:absolute;top:63px;left:14px;}
.module0_border_word{
	color:#333;font-weight:700;
	font-size:20px;height:75px;
	line-height:75px;text-align:center;
	display:block;margin:0;padding:0;}
.module0_border_word>span{color:#86c138;}
.reg_input{
	width:298px;height:44px;line-height:44px;
	margin:0 auto 15px;border:1px solid #d8d8d8;
	color:#999;text-align:center;font-size:16px;
	  background:url(/image/phone-icon.png) no-repeat 15px center; 
	display:block;border-radius:3px;outline:0;}
.reg_btn{
	height:44px;width:300px;margin:0 auto;
	border-radius:3px;text-align:center;
	line-height:44px;background:#86c138;
	color:#fff;font-size:18px;cursor:pointer;}
.reg_btn_count{
	color:#666;font-size:16px;
	padding:10px 0 20px;text-align:center;}
.reg_btn_count>span{color:#86c138;}
.metentips{
	width:100%;height:30px;
	background:#f7f7f7;border-radius:0 0 5px 5px;}
.tip_info{width:220px;height:30px;margin:0 auto;}
.checkBox{
	width:16px;height:16px;
	border:1px solid #999;border-radius:2px;
	margin-top:6px;cursor:pointer;
	float:left;line-height:16px;}
.chonclick{
	display: block;
	position:absolute;
	top:7px;
	left:-23px;
	width:16px;
	height:16px;
	line-height: 16px;
	border:1px solid #999;
	border-radius:2px;
	cursor: pointer;
}
.bgchonclick{
	background:url(/image/chooseBtn01.png) no-repeat;
}
.tip_info span,.tip_info a{
	position:relative;
	float:right;
	font-size:14px;
	color:#999;
	line-height:30px;
}
.tip_info a:hover,.ass_tip a:hover{
	color:#86c138;
	text-decoration: underline;
}
.part1{
	width:1200px;
	margin:0 auto;
	padding-top:50px;
}
.part1_top{
	text-align:center;
}
.part1_top>h2{
	font-size:30px;
	padding-bottom:15px;
	color:#333;
	font-weight: 400;
}
.part1_top>h3{color:#666;font-size:25px;font-weight:400;}
.part1_list{width:100%;position:relative;}
.list_right{width:100%;float:right;height:30px;}
.list_right>em{
	display:block;float:right;
	width:21px;height:18px;
	background:url(/image/part1-icon01.png) no-repeat;
	margin-top:6px;margin-right:7px;}
.list_right>span{float:right;font-size: 16px;color:#666;line-height: 30px;}
/*һ¥*/
.part1_list>ul{
	width:100%;display:flex;flex-flow:row wrap;
	justify-content:space-around;}
.part1_li>li{
	width:31%;background:#f7f7f7;
	transition:all .4s ease-in-out;text-align: center;}
.part1_li>li:hover{transform:translate(0,-10px);box-shadow:0 0 15px #7f7b7b;}
.part1_li img{width:100%;text-align:center;}
.part1_li>li{margin-top:20px;}
.part1_li li h4{
	float:none;color:#333;
	font-size:20px;font-weight:700;
	padding:20px 0 12px;}
.part1_li>li p{float:none;color:#666;font-size:16px;padding:0 0 20px;}
.part1_li li a{float: none;}
.part1_li li div>a{
	display:block;width:200px;height:46px;
	border-radius:60px;background:#86c138;
	color:#fff;font-size:16px;
	line-height:45px;margin:0 auto 20px;}
.part1_tip{
	width:38%;
	padding:35px 0;
	margin:auto;
	font-size:14px;
	color:#666;
	text-align: center;
	cursor:pointer;
	position:relative;
}
.part1_tip>em{
	display:inline-block;
	padding-left:20px;
	position: absolute;
	top:32px;
	left:54px;
	height:25px;
	width:25px;
	margin-top:5px;
	background:url(/image/part1-icon02.png) no-repeat;
	margin-right: 0.5rem;}

/*һ¥��������*/
.hid{
	width:100%;background:#f7f7f7;
	position:relative;
	height: 0px;
	overflow: hidden;
	transition: all 0.5s linear;
	box-sizing: border-box;
}
#open+.hid{
	height:442px;
}
.hid>em{
	display:block;width:37px;height:19px;
	background:#f7f7f7 url(/image/part1-tr-icon.png) center top no-repeat;
	margin:auto;position: absolute;top:-18px;left:526px;}
.hid_list{
	width:95%;height:255px;
	margin:auto;
	padding:50px 0;
	position:relative;}
.hid_list_d1{width:235px;height:100px;}
.hid_list_d1_post{position:absolute;top:30;left:0;text-align: right;}
.hid_list_d1>h3{
	color:#333;font-size:18px;
	font-weight: 700;margin-bottom:13px;}
.hid_list_d1>h4{
	color:#666;
  font-size:14px;
	font-weight: 400;
  margin-bottom:10px;
  width:235px;
}
.hid_list_d1_post>h4{float:right;}
.hid_list_d1>h5{
	color:#86c138;
	font-size:14px;
	font-weight: 400;
	margin-bottom:15px;
}
.hid_list_d1>div{
	height:3px;width:100%;
	background:#ddd;position:relative;}
.hid_list_d1>div>em{
	display:block;width:50px;
	background:#86c138;height:3px;
	position:absolute;right:0;}
.hid_list_d3_post>div>em{
	display:block;width:50px;
	background:#86c138;height:3px;
	position:absolute;left:0;}
.hid_list_d4_post>div>em{
	display:block;width:50px;
	background:#86c138;height:3px;
	position:absolute;left:0;}
.hid_list_d2_post{position:absolute;bottom:-25px;left:0;text-align: right;}
.hid_list_d3_post{position:absolute;top:25px;right:0;text-align: left;}
.hid_list_d4_post{position:absolute;bottom:-25px;right:0;text-align: left;}
.hid_list>img{position:absolute;top:24px;left:320px;}
.hid_btn{
	width:300px;height:48px;line-height:48px;
	color:#fff;font-size: 16px;margin:45px auto 0;
	position:absolute;bottom:-125px;left:35%;
	background:#86c138;text-align:center;border-radius: 60px;}
.hid_btn:hover{background:#7bb233;cursor: pointer;}
/*��¥*/
.part2{width:100%;height:540px;background:url(/image/part5-bg.jpg) no-repeat center;}
.part2_cont{width:1200px;margin:auto;padding:50px 0;}
.part2_cont_left{float:left;padding:111px 0 0 50px;}
.part2_cont_left>em{
	display:block;margin-bottom:11px;
	width:36px;height:36px;
	background:url(/image/part5-icon01.png) no-repeat;
  }
.part2_cont_left>h3{color:#fff;font-size:34px;}
.part2_cont_left>h4{float:none;color:#fff;font-weight:400;font-size:26px;}
.part2_cont_right{
	float:right;background:#fff;
	text-align:center;width:58%;
	position: relative;}
.part5_icon02{
	position: absolute;top:20px;left:-15px;
	width:59px;height:59px;
	background:url(/image/part5-icon02.png) no-repeat center top;
	font-size: 28px;color:#fff;text-align: center;line-height: 47px; }
.part2_cont_right>h4{
	float:none;text-align: center;
	width:100%;font-size:26px;color:#333;text-align:center;
	line-height: 1.2;padding:50px 0 38px;}
.select{width:80%;padding:0 50px 5px;margin-left:80px;}
.select>h4{
	float:none;
	border-left:2px solid #86c138;
	font-size:18px;
	padding-left:20px;
	margin:20px 0 3px;
	text-align:left;}
.select>ul>li{
	width:30%;
	height:42px;
	line-height: 42px;
	font-size:16px;
	padding:8px;
	position:relative;
}
.part2_em{
	display:block;
	position: absolute;
	top:20px;
	left:3px;
	width:20px;height:20px;
	background:#fff;
	border:1px solid #999;
	cursor:pointer;
}
.bgpart2_em{
	background:url(/image/part5-tr-icon.png) no-repeat;
}
.assess{
	width:500px;
	margin:auto;
	margin-top:20px;
	text-align: center;
}
.ass_input{
	float:left;
	width:350px;
	height:44px;
	line-height:44px;
	text-align:center;
	border-radius:60px;
	border:1px solid #999;
	font-size:16px;
	color:#999;
	background: #f7f7f7;
}
.ass_d1{
	float:left;width:190px;height:44px;line-height:44px;
	background:#86c138;border-radius:60px;
	color:#fff;font-size:16px;font-weight:700;
	cursor:pointer;text-align:center;margin-left:-40px;}
.ass_tip{
	width:225px;
	margin:0 auto;
	font-size:14px;
	color:#999;
	text-align: center;
	height:40px;
	line-height:40px;
	margin-top:10px;
	margin-bottom:5px;
	position: relative;
}
.ass_box{
	display: inline-block;
	width:16px;height:16px;
	border:1px solid #999;
	border-radius:2px;
	cursor:pointer;
	position: absolute;
	top:11px;
	left:-7px;
}
.ass_onclick{
	background:url(/image/chooseBtn01.png) no-repeat;
}
.ass_tip a{
	float:none;
  color:#999;
}
/*��¥*/
.part3{padding-bottom: 50px;}
.part3_tiltel{text-align:center;padding:50px 80px 0;}
.part3_tiltel>.p1{color:#333;font-size: 30px;float:none;}
.part3_tiltel>.p2{color:#666;font-size: 25px;float:none;}
.part3_img{text-align:center;}
.part3_img>ul{
	width:1078px;height:307px;margin:auto;
	background:url(/image/part4-img-tp.png) no-repeat center;
  }
.part3_img>ul>li{width:25%;height:310px;float:left;}
.part3_img>ul li div{
	background:#86c138;
	padding-bottom: 50px;display:none;}
.part3_img>ul li:hover div{display:block;}
.part3_img>ul>li>div>h4{
	float:none;color:#fff;
	text-align:center;font-size:20px;
	padding:30px 0;font-weight: 400;}
.part3_img>ul>li>div>p{
	float:none;color:#fff;font-size:15px;
	padding:0 20px;margin-top:15px;text-align: left;}
.part3_img>img{margin:15px 0;}
.part3>.part3_btn{
	margin:30px auto 0;background:#86c138;
	width:300px;height:48px;line-height:48px;
	color:#fff;text-align:center;
	border-radius:60px;}
.part3>.part3_btn:hover{
	background:#7bb233;
	cursor:pointer;
}
.part4{
	background:url(/image/part2-bg.png) no-repeat center top;
	width:100%; height:450px;}
.part4_content{width:1200px;padding:50px 0;margin:auto;}
.part4_content_left{float:left;padding:15px 0;}
.part4_content_left>em{
	display:block;width:41px;height:41px;
	background:url(/image/part2-icon.png) no-repeat center top;
}
.part4_content_left>h2{
	color:#fff;font-size: 34px;
	padding:20px 0 0;
}
.part4_content_left>h3{
	color:#fff;font-size: 26px;
	line-height:40px;
}
.part4_content_right{float:right;}
.part4_content_right>ul>li{
	float:left;position:relative;
}
.part4_content_right>ul>li+li{margin-left:3px;}
.part4_content_right>ul>li>h4{
	height:50px;line-height:50px;text-align:center;
	color:#333;background:#fff;font-size:20px;
	float:none;
}
.part4_content_right>ul>li:hover .part4_hid_div{display:block;}
.part4_hid_div{
	display:none;
	width:220px;height:304px;padding:15px 0;
	position:absolute;top:0;left:0;
	text-align:center;background:rgba(134,193,56,.95)
}
.part4_hid_div>h5{
	color:#fff;font-size:20px;
	padding:40px 0 20px;font-weight: 400;
}
.part4_hid_div>ul>li{
	font-size:14px;margin-bottom:10px;
	color:#fff;height:35px;line-height:35px;
	text-align:center;
}
/*5¥*/
.part5{
	width:1200px;background:#fff;
	padding:50px 0;
	margin:auto;
}
.part5 h4,p{float:none;}
.part5_content>ul>li{
	float:left;margin:8px;
	padding:30px 60px;
	border:1px solid #ccc;
	transition:all .4s ease-in-out;
}
.part5_content>ul>li:hover{
	transform:translate(0,-10px);
	box-shadow:0 0 15px #7f7b7b;
}
.part5_content>ul>li>img{float:left;margin-top:10px;}
.part5_content_word{float:left;margin-left:30px;}
.part5_content_word>h4{
	color:#333;font-size:20px;
	font-weight:700;padding-bottom:10px;
}
.part5_content_word>p{
	color:#666;font-size:16px;
}
/*��¥*/
.part6{padding:0 0 50px;}
.part6>h4{
	width:300px;
	height:32px;line-height:32px;
	margin:20px auto 5px;
	padding:0 30px;
	position:relative;float:none;
}
.part6>h4>a{color:#86c138;font-size:18px;}
.part6>h4 em{
	display:block;position:absolute;top:3px;
	width:25px;height:25px;
	background:url(/image/part6-show-icon.png) no-repeat;
}
.part6>h4 span{float:left;margin-left:35px;}

/*��¥*/
.part7{
	width:100%;height:626px;
	background:url(/image/part7-bg.jpg) no-repeat -205px;
}
.part7_content{
	width:1200px;margin:auto;
	position:relative;
}
.part7_table{
	width:730px;
	position:absolute;
	top:10px;left:5px;
	padding-top:50px;
}
.part7_table>.div{
	width:100%;
}
.part7_table>.part7_table_tiltle{
	height:50px;line-height:50px;
	background:#86c138;color:#fff;
	text-align:center;
}
.part7_table ul>li{
	float:left;
	padding:35px;
	overflow: hidden;
	text-align:center;
}
.part7_table ul::after{
	content:"";
	display:block;
	clear:both;
}
.part7_ul1{border-bottom:1px solid #73a82d;}
.part7_table_li1,.part7_table_li2{
	width:50%;
}
.part7_table_li3,.part7_table_li4,.part7_table_li5{
	width:33.33%;
}
.part7_table_li3{border-right:1px solid #73a82d;}
.part7_table_li1,.part7_table_li4{
	background:#fbfff5;
	border-right:1px solid #73a82d;
	transition:.3s linear;
}
.part7_table_li1:hover,.part7_table_li4:hover{
	transform:scale(1.02);
	box-shadow:3px 3px 15px #d8e9c2;
}
.part7_table_li2,.part7_table_li3,.part7_table_li5{
	background:#fff;
	transition:.3s linear;
}
.part7_table_li2:hover,.part7_table_li3:hover,.part7_table_li5:hover{
	transform:scalex(1.02);
	overflow: hidden;
	box-shadow:3px 3px 15px #d8e9c2;
}
.part7_table h3{
	color:#73a82d;
	font-size:30px;
	padding-bottom:25px;
	font-weight:400;
}
.part7_table h5{
	color:#666;
	font-size:18px;
}
.part7_bottom{
	width:100%;height:5px;
	background:#86c138;
}
/*��¥*/
.part8{
	width:100%;height:640px;
	background:url(/image/part8-bg.jpg) no-repeat;
}
.part8>.part3_tiltel>p{color:#fff;}
.part8_content{
	width:1200px;margin:auto;
	padding:50px 0;
}
.part8_cont_left{float:left;}
.part8_cont_right{
	width:570px;height:390px;
	background:url(/image/part8-rt-bg.png) no-repeat;
	float:left;
}
.part8_cont_right>h4{
	float:none;
	width:505px;height:70px;line-height:70px;
	font-size:22px;color:#86c138;
	border-bottom:1px dashed #86c138;
	margin:auto;
}
.part8_cont_right_top{
	width:505px;margin:auto;
	padding:10px 30px;
}
.part8_cont_right_top:after{
	content:"";
	display:block;
	clear:both;
}
.part8_cont_right_top>img,.part8_cont_right_top>.d1{
	float:left;
	margin-left:25px;
	text-align:left;
}
.part8_cont_right_top>img{
	margin-top:15px;
}
.part8_cont_right_top ul>li>em{
	float:left;
	display:block;
	margin-top:5px;
	margin-right:10px;
	width:22px;height:22px;
	background:url(/image/part8-correct-icon.png) no-repeat;
}
.part8_cont_right_top ul>li>span{
	font-size:16px;
	color:#333;
}
.part8_cont_right_top ul>li{
	margin-bottom:15px;
}
.bottom_input{
	text-align:center;
}
.bottom_input>input{
	width:380px;height:45px;
	margin:auto;
	border:1px solid #666;
	border-radius:60px;
	background:#f7f7f7;
	padding-left:20px;
	color:#999;font-size:16px;
	text-align:center;
}
.part8_btn{
	background:#7bb233;
	cursor:pointer;
	width:380px;height:45px;
	line-height:45px;font-size:16px;
	border-radius:60px;
	margin:10px auto 0;
	color:#fff;text-align:center;
}
.ass2_box{
	display: inline-block;
	width:16px;height:16px;
	border:1px solid #999;
	border-radius:2px;
	cursor:pointer;
	position: absolute;
	top:12px;
	left:-7px;
}

/*�ײ���Ϣ*/
.footer{
	width:100%;padding:50px 0px 20px;
	background:#333;color:#ccc;}
.footer::after{
			content:"";
			display:block;
			clear:both;
		}
.footer_top{width:1200px;margin:0 auto;}
.footer_top>ul{
	display:flex;font-size:16px;
	justify-content:space-around;}
.footer_top>ul>li>img{float:left;}
.footer_top>ul>li>h4{float:left;}
.footer_top>ul>li>p{float:left;}
.footer_top>ul img{vertical-align:baseline;margin-right:10px;}
.footer_top>ul h4{
	color:#fff;text-align:left;
	margin-bottom:13px;font-size:20px;}
.footer_top>ul p{color:#999;text-align:left;}
.footer_mid{width:1200px;margin:0 auto;padding-top:50px;}
.footer_mid::after{
			content:"";
			display:block;
			clear:both;
		}
.mid_list>ul{width:620px;height:120px;float:left;}
.mid_list>ul>li{
	width:25%;height:20px;
	float:left;margin-bottom:30px;}
.mid_list>ul>li>a{float:left;font-size:16px;color:#999;}
#list_a1,#list_a2,#list_a3,#list_a4{color:#ccc; font-weight:700;}
.list_li2{margin-bottom:0;}
.list_li2>a{color:#ccc;}
.mid_tel{width:172px;float:left;}
.phone,.online{float:left;}
.phone{padding-bottom:30px;}
.mid_tel{color:#999;font-size:16px;font-weight:700;}
.phone>a{font-size:14px;color:#999;font-weight:700;}
.mid_tel_top>span{
	display:inline-block;
	width:42px;height:42px;
	background:url(/image/footer-tel-icon.png);
	float:left;margin-right:15px;}
.mid_tel_bot>span{
	display:inline-block;
	width:42px;height:42px;
	background:url(/image/footer-ask-icon.png);
	float:left;margin-right:15px;}
.mid_right{float:right;width:300px;padding-right:30px;}
.code{display:flex;justify-content:space-around;}
.code p{font-size:14px;color:#999;}
.code>div{align-self:center;}
.code>div>img{margin-bottom:10px;padding-left:5px;}
.footer_bot{width:100%;}
.bot_list{
	width:800px;padding:50px 0 20px;
	margin:0 auto;display:flex;
	flex-flow:row wrap;}
.bot_list a:hover{color:#999;}
.bot_list ul{float:left;}
.bot_list>h3{
	float:left;color:#999;
	font-size:16px;padding-top:4px;}
.bot_list>ul>li{float:left;padding:0 13px;}
.bot_list>span>a{text-align:left;font-size:16px;color:#999;}
#metenpos{
	width:485px;margin:10px auto;
	font-size:16px;color:#999;font-weight:700;}
#metenpos>.span2>a{text-align:left;}
#metenpos>p{margin:10px 0px;}
</style>
