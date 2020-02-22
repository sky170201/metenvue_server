<template>
  <div>
    <!-- 预约免费英语试听课弹窗 -->
    <div class="maskdiv" v-show="open"></div>
    <div class="appointment" v-show="open">
      <h2>预约免费英语试听课<span @click="closeMask">x</span></h2>
      <div class="app_info">
        <p>小美将双手为您奉上：</p>
        <ul>
          <li>· 1对1英语学习规划与指导</li>
          <li>· 500主题试听课任选1节</li>
          <li>· 报名领取1000元奖学金</li>
        </ul>
      </div>
      <div class="app_form">
        <span></span>
        <input type="text" placeholder="请输入您的手机号" maxlength="11">
        <a href="javascript:;">确认预约</a>
      </div>
      <div class="app_tips">
        <span>
          <em @click="chosen" :class="{bgchonclick:selected}" class="ass_box"></em>
          同意<a href="" target="_blank">《美联用户隐私保护协议》</a>
        </span>
      </div>
    </div>
    <div class="course_banner">
      <img :src="`http://127.0.0.1:4000/${others.banner}`">
      <div class="cou_title">
        <div class="cou_nav">
          <ul>
            <li>首页</li>
            <li>零基础英语</li>
          </ul>
        </div>
        <div class="cou_content">
          <div class="cou_carousel">
            <div class="bigpic">
              <img v-show="i==1" :src="`http://127.0.0.1:4000/${imgList.img1}`">
              <img v-show="i==2" :src="`http://127.0.0.1:4000/${imgList.img2}`">
              <img v-show="i==3" :src="`http://127.0.0.1:4000/${imgList.img3}`">
              <img v-show="i==4" :src="`http://127.0.0.1:4000/${imgList.img4}`">
            </div>
            <ul class="smapic">
              <li class="liBorder" :class="{changeColor:i==1}">
                <img :src="`http://127.0.0.1:4000/${imgList.img1}`">
              </li>
              <li class="liBorder" :class="{changeColor:i==2}">
                <img :src="`http://127.0.0.1:4000/${imgList.img2}`">
              </li>
              <li class="liBorder" :class="{changeColor:i==3}">
                <img :src="`http://127.0.0.1:4000/${imgList.img3}`">
              </li>
              <li class="liBorder" :class="{changeColor:i==4}">
                <img :src="`http://127.0.0.1:4000/${imgList.img4}`">
              </li>
            </ul>
            <span class="car_left" @click="subI" @mouseenter="topTimer" @mouseleave="startTimer"></span>
            <span class="car_right" @click="addI" @mouseenter="topTimer" @mouseleave="startTimer"></span>
          </div>
          <div class="cou_info">
            <h3>{{others.title}}</h3>
            <div class="cou_first" @click="openMask">
              <span :style="`background:url(http://127.0.0.1:4000/${others.icon1})`">预约礼</span>
              <ul>
                <li>· 1对1英语学习规划与指导</li>
                <li>· 500主题试听课任选1节</li>
                <li>· 报名领取1000元奖学金</li>
              </ul>
            </div>
            <div class="cou_last">
              <div>课程特色</div>
              <ul>
                <li :style="`background:url(http://127.0.0.1:4000/${others.icon2}) no-repeat 0 2px;`">{{others.tit1}}</li>
                <li :style="`background:url(http://127.0.0.1:4000/${others.icon2}) no-repeat 0 2px;`">{{others.tit2}}</li>
                <li :style="`background:url(http://127.0.0.1:4000/${others.icon2}) no-repeat 0 2px;`">{{others.tit3}}</li>
                <li :style="`background:url(http://127.0.0.1:4000/${others.icon2}) no-repeat 0 2px;`">{{others.tit4}}</li>
                <li :style="`background:url(http://127.0.0.1:4000/${others.icon2}) no-repeat 0 2px;`">{{others.tit5}}</li>
                <li :style="`background:url(http://127.0.0.1:4000/${others.icon2}) no-repeat 0 2px;`">{{others.tit6}}</li>
              </ul>
            </div>
            <div class="cou_btn">
              <a href="javascript:;" @click="openMask">免费试听</a>
              <a href="javascript:;">咨询客服</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fix_nav" style="position:static;top:0px;" :style="fixn">
      <div class="fn_list">
        <ul>
          <li :class="{active:n==1}">课程内容<em v-show="n==1"></em></li>
          <li :class="{active:n==2}">学习内容<em v-show="n==2"></em></li>
          <li :class="{active:n==3}">课程学费<em v-show="n==3"></em></li>
          <li :class="{active:n==4}">上课形式<em v-show="n==4"></em></li>
          <li :class="{active:n==5}">授课师资<em v-show="n==5"></em></li>
          <li :class="{active:n==6}">校区分布<em v-show="n==6"></em></li>
        </ul>
        <span v-show="showFree" @click="openMask">免费试听</span>
      </div>
    </div>
    <!-- 课程收藏弹窗 -->
    <div class="maskdiv" v-show="open1"></div>
    <div class="appointment" v-show="open1">
      <h2>先收藏一下 有时间再来学<span @click="closecollect">x</span></h2>
      <div class="app_info">
        <p>把课程收藏到【手机号】账户：</p>
        <ul>
          <li>· 有空随时免费体验学习</li>
          <li>· 个人专属老师面授指导</li>
          <li>· 时间/地点/主题您说了算</li>
        </ul>
      </div>
      <div class="app_form">
        <span></span>
        <input type="text" placeholder="请输入您的手机号" maxlength="11">
        <a href="javascript:;">收藏课程</a>
      </div>
      <div class="app_tips">
        <span>
          <em @click="chosen1" :class="{bgchonclick:selected1}" class="ass_box"></em>
          同意<a href="" target="_blank">《美联用户隐私保护协议》</a>
        </span>
      </div>
    </div>
    <!-- part1课程简介 -->
    <div class="cou_part1">
      <div class="sc_tit">
        <div>
          <em class="tit_lt"></em>
          <h2>
            <b>课程简介</b>
            <b class="lastb">Introduction</b>
          </h2>
          <em class="tit_lt"></em>
        </div>
      </div>
      <div class="part1_con">
        <div class="collect" @click="collect">
          <span>收藏一下 有空来学</span>
        </div>
      </div>
      <div class="partList">
        <div class="plLeft">
          <h3>适合人群</h3>
          <ul>
            <li>1. 英语零基础或基础比较薄弱</li>
            <li>2. 想重新开始学好英语却苦于没有方法</li>
            <li>3. 有闲暇时间学习充电以备将来不时之需</li>
          </ul>
        </div>
        <div class="plRight">
          <h3>学习目标</h3>
          <ul>
            <li>1. 语言目标：</li>
            <li>标准发音、流利口语、日常生活英语应用交流</li>
            <li>2. 能力目标：</li>
            <li>长远视野、地道表达、21世纪学习技能、自主学习能力</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- part2学习内容 -->
    <div class="cou_part2">
      <div class="sc_tit">
        <div>
          <em class="tit_lt"></em>
          <h2>
            <b>学习内容</b>
            <b class="lastb">Contents</b>
          </h2>
          <em class="tit_lt"></em>
        </div>
        <p>美联与国家地理杂志及TED演讲合作研发Explore系列教材，学习内容是按照Explore教材来设置的。</p>
      </div>
      <div class="cp2con">
        <div class="cp2Left">
          <img src="/image/course_basic/part2-basic07.jpg" alt="">
          <ul>
            <li>国家地理学习NGL教材</li>
            <li>TED Talks风格，提供机会开口说英语</li>
            <li>覆盖社会生活各个领域，帮助不同人群学习英语，让英语学习生动有趣</li>
          </ul>
        </div>
        <div class="cp2Right">
          <p><strong>课程大纲</strong>（EM举例）</p>
          <ul>
            <li>1. Personal information 个人信息</li>
            <li>2. Greet people 打招呼</li>
            <li>3. Talk about your family 讨论家庭</li>
            <li>4. Ask for and give directions 问路指路</li>
            <li>5. Talk on the phone 打电话</li>
            <li>6. Talk about your weekend 讨论周末</li>
            <li>7. Order food and drinks 点餐</li>
            <li>8. Ask to use something 请求使用某物</li>
            <li>9. Likes and dislikes 喜好和讨厌</li>
            <li>10. TV shows and music 电视节目和音乐</li>
            <li>11. Get sb's attention 吸引某人注意</li>
            <li>12. Describe appearance 描述外貌</li>
          </ul>
          <div class="cp2Btn" @click="openFree">免费体验</div>
        </div>
      </div>
    </div>
      <!-- 学习内容——免费体验 -->
    <div class="maskdiv" v-show="open2"></div>
    <div class="appointment appFree" v-show="open2">
      <div class="free">预约免费英语试听课<span @click="closeFree">x</span></div>
      <div class="app_form">
        <span></span>
        <input type="text" placeholder="请输入手机号" maxlength="11">
        <a href="javascript:;">立即预约</a>
      </div>
      <div class="app_tips">
        <span>
          <em @click="chosen2" :class="{bgchonclick:selected2}" class="ass_box"></em>
          同意<a href="" target="_blank">《美联用户隐私保护协议》</a>
        </span>
      </div>
    </div>
    <!-- part3课程学费 -->
    <div class="cou_part3">
      <div class="sc_tit">
        <div>
          <em class="tit_lt"></em>
          <h2>
            <b>课程学费</b>
            <b class="lastb">Expenses</b>
          </h2>
          <em class="tit_lt"></em>
        </div>
      </div>
      <div class="cp3con">
        <div class="cp3left">
          <img src="/image/course_basic/part8-img01.jpg" alt="">
        </div>
        <div class="cp3right">
          <span class="cp3Span"></span>
          <div class="select">
            <h4>请选择学习目的</h4>
            <ul class="d-flex flex-wrap">
              <li style="color:#86c138">
                <em p2_emcho class="part2_em bgpart2_em" v-click1></em>
                日常口语
              </li>
              <li>
                <em p2_emcho class="part2_em" v-click1></em>
                商务交流
              </li>
              <li>
                <em p2_emcho class="part2_em" v-click1></em>
                个人储备
              </li>
              <li>
                <em p2_emcho class="part2_em" v-click1></em>
                出国旅游
              </li>
              <li>
                <em p2_emcho class="part2_em" v-click1></em>
                留学移民
              </li>
              <li>
                <em p2_emcho class="part2_em" v-click1></em>
                应试考试
              </li>
            </ul>
            <h4>请选择学习方式</h4>
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
          <div class="assess">
            <div class="clearfix">
              <input type="tel" maxlength="11" class="ass_input" value="输入手机号码，定制课程报价" onfocus="if(value=='输入手机号码，定制课程报价'){value=''}" onblur="if(value==''){value='输入手机号码，定制课程报价'}">
              <div class="ass_d1">课程报价</div>
            </div>
            <div class="ass_tip">
              <span @click="chosenInfo" :class="{bgchonclick:sel}" class="ass_box"></span>
              <span>
                同意<a href="" target="_blank">《美联用户隐私保护协议》</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- part4上课形式 -->
    <div class="cou_part4">
      <div class="sc_tit">
        <div>
          <em class="tit_lt"></em>
          <h2>
            <b>上课形式</b>
            <b class="lastb">Classes</b>
          </h2>
          <em class="tit_lt"></em>
        </div>
      </div>
      <ul class="cp4con">
        <li class="cp4conlist1">
          <h2>自主预习</h2>
          <div class="cp4CList">
            <div class="cp4Info">
              <em></em>
              <h4>美联同学APP</h4>
            </div>
            <div class="cp4Hide">
              <h5>美联同学APP</h5>
              <p>课前预习和水平检测</p>
              <p>趣味视频观看学习</p>
              <p>单词和句子点读发音</p>
            </div>
          </div>
          <i class="icon1"></i>
        </li>
        <li class="cp4conlist2">
          <h2>面授课</h2>
          <div class="cp4li2">
            <div class="cp4CList">
              <div class="cp4Info">
                <em class="icon2"></em>
                <h4>上课时间</h4>
              </div>
              <div class="cp4Hide">
                <h5>上课时间</h5>
                <p>周一至周日 </p>
                <p>10:00-21:00</p>
                <p>自由约课上课</p>
              </div>
            </div>
            <div class="cp4CList">
              <div class="cp4Info">
                <em class="icon3"></em>
                <h4>课程班型</h4>
              </div>
              <div class="cp4Hide cp4Hide1">
                <h5>课程班型</h5>
                <p>1对1小班课</p>
                <p>1对4小班课</p>
                <p>活动课</p>
              </div>
            </div>
            <div class="cp4CList">
              <div class="cp4Info">
                <em class="icon4"></em>
                <h4>上课内容</h4>
              </div>
              <div class="cp4Hide cp4Hide2">
                <h5>上课内容</h5>
                <p>流利语音课</p>
                <p>地道表达课</p>
                <p>自信演讲课</p>
              </div>
            </div>
            <div class="cp4CList">
              <div class="cp4Info">
                <em class="icon5"></em>
                <h4>增值服务</h4>
              </div>
              <div class="cp4Hide cp4Hide1 cp4Hide2">
                <h5>增值服务</h5>
                <p>口语测试、咖啡厅、</p>
                <p>电影院、交际活动、</p>
                <p>趣味主题活动</p>
              </div>
            </div>
          </div>
          <i class="icon1 list2Icon"></i>
        </li>
        <li class="cp4conlist3">
          <h2>课外辅导</h2>
          <div class="cp4CList">
            <div class="cp4Info">
              <em class="list3Icon"></em>
              <h4>辅导课</h4>
            </div>
            <div class="cp4Hide">
              <h5>辅导课</h5>
              <p>课本知识的梳理和总结</p>
              <p>针对学员个性化辅导</p>
              <p>主修课的重要补充</p>
            </div>
          </div>
          <i class="icon1"></i>
        </li>
        <li class="cp4conlist4">
          <h2>线上课</h2>
          <div class="cp4CList cp4CList1">
            <div class="cp4Info">
              <em class="icon8"></em>
              <h4>线上英语课</h4>
            </div>
            <div class="cp4Hide">
              <h5>线上英语课</h5>
              <p>线上提供丰富的课程</p>
              <p>真人在线互动教学</p>
              <p>自由自在学</p>
            </div>
          </div>
          <div class="cp4CList cp4CList1">
            <div class="cp4Info">
              <em class="icon9"></em>
              <h4>MTSP资源平台</h4>
            </div>
            <div class="cp4Hide">
              <h5>MTSP资源平台</h5>
              <p>匹配当前课程进度</p>
              <p>标准化英语学习资料库</p>
              <p>在家获得英语学习资源</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- part5授课师资 -->
    <div class="cou_part5">
      <div class="sc_tit">
        <div>
          <em class="tit_lt"></em>
          <h2>
            <b>授课师资</b>
            <b class="lastb">Teachers</b>
          </h2>
          <em class="tit_lt"></em>
        </div>
      </div>
      <div class="cp5con">
        <div class="cp5cLeft">
          <div>
            <img src="/image/course_basic/part9-img01.png" alt="">
          </div>
          <ul>
            <li><span>背景：</span>大部分来自欧美国家</li>
            <li><span>资质：</span>大部分有英语教学资格证书</li>
            <li><span>履历：</span>有英语教学及辅导经验</li>
            <li><span>考核：</span>学员评分，不合格者定期淘汰，保障教学质量</li>
          </ul>
        </div>
        <div class="cp5cLeft cp5cRight">
          <div>
            <img src="/image/course_basic/part9-img02.png" alt="">
          </div>
          <ul>
            <li><span>学历：</span>院校本科或研究生毕业</li>
            <li><span>水平：</span>定期考核老师英语教学水平</li>
            <li><span>资质：</span>部分持有剑桥大学教学证书</li>
            <li><span>经历：</span>有英语教学及研究的工作经验</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- part6校区分布 -->
    <div class="cou_part6">
      <div class="sc_tit">
        <div>
          <em class="tit_lt"></em>
          <h2>
            <b>校区分布</b>
            <b class="lastb">Schools</b>
          </h2>
          <em class="tit_lt"></em>
        </div>
      </div>
      <div class="cp6con">
        <div class="cp6cLeft">
          <img src="/image/course_basic/map.png" alt="">
        </div>
        <div class="cp6cRight">
          <div class="ccpTitle">
            <span>筛选：</span>
            <select name="" id="store">
              <option value="">全部校区</option>
              <option value="">宏发中心</option>
              <option value="">科学馆中心</option>
              <option value="">深国投中心</option>
              <option value="">CBD中心</option>
              <option value="">南山中心</option>
              <option value="">龙华中心</option>
              <option value="">南山书城Mini中心</option>
              <option value="">壹方城中心</option>
              <option value="">万象汇中心</option>
              <option value="">天利中心</option>
              <option value="">科技园中心</option>
            </select>
            <select name="" id="">
              <option value="">深圳</option>
              <option value="">广州</option>
              <option value="">佛山</option>
              <option value="">长沙</option>
              <option value="">中山</option>
              <option value="">东莞</option>
              <option value="">惠州</option>
              <option value="">江门</option>
              <option value="">汕头</option>
              <option value="">成都</option>
              <option value="">西安</option>
              <option value="">武汉</option>
              <option value="">北京</option>
              <option value="">合肥</option>
              <option value="">绵阳</option>
              <option value="">南昌</option>
            </select>
          </div>
          <div class="ccpCenter">
            <ul>
              <li>
                <div class="centerTit" @mouseover="showthis(0)">
                  <span>宏发中心</span>
                  <span class="freelis">免费试听</span>
                </div>
                <div class="centerDel" :style="{height:showList[0].isChose}">
                  <p>地 &nbsp;&nbsp;&nbsp;址：<b>深圳市宝安区宏发中心大厦东面1-2楼</b></p>
                  <p>开放时间：10:00-21:00</p>
                </div>
              </li>
              <li>
                <div class="centerTit" @mouseover="showthis(1)">
                  <span>科学馆中心</span>
                  <span class="freelis">免费试听</span>
                </div>
                <div class="centerDel"  :style="{height:showList[1].isChose}">
                  <p>地 &nbsp;&nbsp;&nbsp;址：<b>深圳市福田区深南中路中核大厦（原深圳购书中心）5楼</b></p>
                  <p>开放时间：10:00-21:00</p>
                </div>
              </li>
              <li>
                <div class="centerTit" @mouseover="showthis(2)">
                  <span>深国投中心</span>
                  <span class="freelis">免费试听</span>
                </div>
                <div class="centerDel"  :style="{height:showList[2].isChose}">
                  <p>地 &nbsp;&nbsp;&nbsp;址：<b>深圳市福田区农林路69号印力中心1号写字楼10楼美联英语</b></p>
                  <p>开放时间：10:00-21:00</p>
                </div>
              </li>
              <li>
                <div class="centerTit" @mouseover="showthis(3)">
                  <span>CBD中心</span>
                  <span class="freelis">免费试听</span>
                </div>
                <div class="centerDel" :style="{height:showList[3].isChose}">
                  <p>地 &nbsp;&nbsp;&nbsp;址：<b>深圳市福田区福华三路88号时代财富大厦3楼</b></p>
                  <p>开放时间：10:00-21:00</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="pages">
            <a href="javascript:;">上一页</a>
            <a href="javascript:;">下一页</a>
            <a href="javascript:;">1/3</a>
            <a href="javascript:;">共3页</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:["lid"],
  data(){
    return{
      showList:[ //"手风琴" 变量
        {isChose:"63px"},
        {isChose:0},
        {isChose:0},
        {isChose:0},
      ],
      sel:true,
      i:1,
      selected:true,
      selected1:true,
      selected2:true,
      open:false,
      open1:false,
      open2:false,
      n:1,  //控制滚动固定导航栏
      fixn:{position:""}, //固定导航条变量
      showFree:false,
      timer:"",  //周期性定时器变量
      imgList:{},//获取服务器端请求来的图片数据
      others:{}
    }
  },
  mounted(){
    // BOM操作，给window添加一个scroll滚动事件
    window.addEventListener("scroll",this.fixNav)
  },
  methods:{
    // 操作"手风琴"变量
     showthis(n){
       var length=this.showList.length;
       for(var i=0;i<length;i++){
         if(i==n){
           this.showList[i].isChose="63px";
         }else{
           this.showList[i].isChose=0;
         }
       }
     },
    chosenInfo(){
      this.sel=!this.sel;
    },
    // 打开、关闭 学习内容——免费体验
    closeFree(){
      this.open2=false;
    },
    openFree(){
      this.open2=true;
    },
    chosen2(){
      this.selected2=!this.selected2;
    },
    // 鼠标进入和移出 控制定时器 开始和停止
    topTimer(){
      // console.log(this.timer);
      clearInterval(this.timer);
    },
    startTimer(){
      this.timer=setInterval(()=>{
        this.i ++;
        if(this.i==5){
          this.i=1;
        }
      }, 2000);
    },
    // 打开、关闭课程收藏 "弹框"
    closecollect(){
      this.open1=false;
    },
    collect(){
      this.open1=true;
    },
    chosen1(){
      this.selected1=!this.selected1;
    },
    // 滚动条控制固定导航栏样式
    fixNav(){
      var scrollTop3=0;
      scrollTop3=document.body.scrollTop||document.documentElement.scrollTop;
      console.log(scrollTop3);
      scrollTop3>=745?this.showFree=true:this.showFree=false;
      scrollTop3>=745?this.fixn.position="fixed":(this.fixn.position="");
      if(scrollTop3<1270)this.n=1;
      if(scrollTop3>=1270&&scrollTop3<1970)this.n=2;
      if(scrollTop3>=1970&&scrollTop3<2670)this.n=3;
      if(scrollTop3>=2670&&scrollTop3<3270)this.n=4;
      if(scrollTop3>=3270&&scrollTop3<3870)this.n=5;
      if(scrollTop3>=3870)this.n=6;
    },
    // 打开、关闭预约免费英语试听课 "弹框"
    closeMask(){
      this.open=false;
    },
    openMask(){
      this.open=true;
    },
    chosen(){
      this.selected=!this.selected;
    },
    // 轮播左侧按钮
    subI(){
      if(this.i==1){
        this.i=4;
      }else{
        this.i--
      }
    },
    // 轮播右侧按钮
    addI(){
      if(this.i==4){
        this.i=1
      }else{
        this.i++
      }
    },
  },
  created(){
    // 页面加载完成给轮播图添加一个周期性定时器，用于修改this.i ++
    this.timer=setInterval(()=>{
      this.i ++;
      if(this.i==5){
        this.i=1;
      }
    }, 2000);
    // 发送axios请求获取服务器端数据
    this.axios.get("course_basic_img",{params:{lid:1}}).then(res=>{
      // console.log(res.data.data);
      this.imgList=res.data.data;
      console.log(this.imgList);
    }),
    this.axios.get("course_basic_other",{params:{lid:1}}).then(res=>{
      // console.log(res.data.data);
      this.others=res.data.data;
      console.log(this.others);
    })
  }
}
</script>
<style>
  /* 第六部分 cou_part6 校区分布样式 */
  .cou_part6{
    width:100%;
    margin:auto;
    padding:65px 0;
    overflow: hidden;
    background:url(/image/course_basic/part7-bg.jpg) no-repeat center top;
  }
  .cp6con{
    width:1200px;
    margin:auto;
    margin-top:50px;
  }
  .cp6cLeft{
    float:left;
    width:560px;
    height:490px;
    padding:20px;
    background:url(/image/course_basic/part7-map-bg.jpg) no-repeat center top;
  }
  .cp6cLeft>img{
    width:100%;
  }
  .cp6cRight{
    float:right;
    width:590px;
  }
  .ccpTitle{
    line-height: 40px;
    overflow: hidden;
  }
  .ccpTitle>span{
    float:left;
  }
  .ccpTitle>select{
    float: right;
    margin-left:10px;
    width:120px;
    height:40px;
    line-height: 40;
    border:1px solid #d8d8d8;
    cursor: pointer;
    text-indent: 20px;
    color:#333;
    font-size: 16px;
    background:#FBFBFB;
  }
  #store{
    width:240px;
  }
  .ccpCenter>ul{
    margin-top:30px;
    height:308px;
  }
  .ccpCenter>ul>li{
    border-top:1px dashed #d8d8d8;
  }
  .ccpCenter>ul>li:last-child{
    border-bottom:1px dashed #d8d8d8;
  }
  .centerTit{
    display:flex;
    justify-content: space-between;
    line-height: 60px;
  }
  .centerTit:hover>span:first-child{
    text-decoration:underline;
    cursor: pointer;
  }
  .freelis{
    color:#8ad142;
    padding-right:30px;
    background:url(/image/course_basic/part7-tr-icon.png) no-repeat right center;
  }
  .centerDel{
    height:0;
    overflow: hidden;
    transition:all 0.3s linear;
  }
  .centerDel>p{
    margin-bottom:15px;
    color:#666;
  }
  .centerDel>p>b{
    font-weight: 400;
  }
  .centerDel>p>b:hover{
    text-decoration:underline;
    cursor: pointer;
  }
  .pages{
    text-align: center;
    padding-top:30px;
  }
  .pages>a{
    color:#999;
    cursor: pointer;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    text-align: center;
    margin-right:20px;
  }
  .pages>a:first-child{
    border:1px solid #999;
    background:#fff;
    padding:10px 30px;
  }
  .pages>a:nth-child(2){
    background:#f0f0f0;
    color:#333;
    padding:10px 30px;
    border:1px solid #999;
  }

  /* 第五部分 cou_part5 授课师资样式 */
  .cou_part5{
    width:100%;
    margin:auto;
    padding:65px 0 0;
    overflow: hidden;
    background:url(/image/course_basic/part9-bg.jpg) no-repeat center top;
  }
  .cp5con{
    width:1200px;
    margin:auto;
  }
  .cp5cLeft{
    float:left;
  }
  .cp5cLeft>div{
    float:left;
  }
  .cp5cLeft>ul{
    float:left;
    width:324px;
    height:221px;
    margin:96px 0 96px 20px;
    padding:20px;
    background:url(/image/course_basic/part9-lt-infoBg.png) no-repeat;
  }
  .cp5cLeft>ul>li{
    color:#666;
    line-height: 35px;
  }
  .cp5cLeft>ul>li>span{
    font-weight: bold;
    color:#333;
  }
  .cp5cRight{
    float:right;
  }
  .cp5cRight>ul{
    background:url(/image/course_basic/part9-rt-infoBg.png) no-repeat;
  }

  /* 第四部分 cou_part4 上课形式样式 */
  .cou_part4{
    width:100%;
    margin:auto;
    padding:65px 0;
    overflow: hidden;
    background:url(/image/course_basic/part8-bg.jpg) no-repeat center top;
  }
  .cp4con{
    width:1150px;
    margin:60px auto 0;
    overflow: hidden;
  }
  .cp4con>li{
    float:left;
  }
  /* part4 第一板块 开始 */
  .cp4conlist1{
    width:190px;
    position: relative;
    margin-right:70px;
    margin-top:95px;
    background:#fff;
  }
  .cp4con>li>h2{
    padding:30px 0 15px;
    font-size:20px;
    text-align: center;
    color:#86c138;
  }
  .cp4CList{
    width:188px;
    height:158px;
    background:#fff;
    padding:1px;
    position:relative;
  }
  .cp4Info{
    width:158px;
    height:128px;
    margin:15px auto 0;
    background:#fbfef8;
    padding:1px;
    border:1px solid #86c138;
  }
  .cp4Info>em{
    display: block;
    width:22px;
    height:44px;
    margin:25px auto 0;
    background:url(/image/course_basic/part3-icon01.png) no-repeat center center;
  }
  .cp4Info>h4{
    color:#333;
    text-align: center;
    font-size:16px;
    padding:15px 0 0;
  }
  .cp4CList:hover>.cp4Hide{
    display:block;
  }
  .cp4Hide{
    display:none;
    width:190px;
    height:160px;
    position: absolute;
    top:0;
    left:0;
    z-index: 99;
    text-align: center;
    background:url(/image/course_basic/part3-hide-bg.png) no-repeat center center;
  }
  .cp4Hide1{
    left:-18px;
  }
  .cp4Hide2{
    top:-5px;
  }
  .cp4Hide>h5{
    color:#fff;
    font-size: 16px;
    padding:20px 0 12px;
    font-weight: bold;
  }
  .cp4Hide>p{
    color:#fff;
    font-size:12px;
    line-height: 30px;
  }
  .icon1{
    position: absolute;
    top:130px;
    right:-50px;
    width:26px;
    height:19px;
    background:url(/image/course_basic/part3-right-icon.png) no-repeat;
  }
  /* part4 第一板块 结束 */
  /* part4 第二板块 开始 */
  .cp4conlist2{
    width:368px;
    position: relative;
    margin-right:70px;
    background:#fff;
  }
  .cp4li2{
    display:flex;
    justify-content: space-between;
    flex-flow:row wrap;
    padding: 10px 10px;
  }
  .cp4li2>div{
    width:50%;
    height:50%;
  }
  .cp4Info>.icon2{
    width:46px;
    height:46px;
    background:url(/image/course_basic/part3-icon09.png) no-repeat;
  }
  .cp4Info>.icon3{
    width:46px;
    height:46px;
    background:url(/image/course_basic/part3-icon10.png) no-repeat;
  }
  .cp4Info>.icon4{
    width:46px;
    height:46px;
    background:url(/image/course_basic/part3-icon11.png) no-repeat;
  }
  .cp4Info>.icon5{
    width:46px;
    height:46px;
    background:url(/image/course_basic/part3-icon12.png) no-repeat;
  }
  .list2Icon{
    top:229px;
  }
  /* part4 第二板块 结束 */
  /* part4 第三板块 开始 */
  .cp4conlist3{
    width:190px;
    position: relative;
    margin-right:70px;
    margin-top:95px;
    background:#fff;
  }
  .cp4Info>.list3Icon{
    width:43px;
    height:44px;
    background:url(/image/course_basic/part3-icon06.png) no-repeat;
  }
  /* part4 第三板块 结束 */
  /* part4 第四板块 开始 */
  .cp4conlist4{
    width:190px;
    position: relative;
    background:#fff;
    padding:0 12px 10px;
  }
  .cp4CList1{
    margin-left:-12px;
    height:152px;
  }
  .cp4Info>.icon8{
    width:42px;
    height:42px;
    background:url(/image/course_basic/part3-icon07.png) no-repeat;
  }
  .cp4Info>.icon9{
    width:50px;
    height:34px;
    background:url(/image/course_basic/part3-icon08.png) no-repeat;
  }
  /* part4 第四板块 结束 */

  /* 第三部分 cou_part3 课程学费样式 */
  .cou_part3{
    width:100%;
    margin:auto;
    padding:65px 0;
    overflow: hidden;
    background:url(/image/course_basic/part3-bg.jpg) no-repeat center top;
  }
  .cp3con{
    width:1200px;
    margin:auto;
    margin-top:50px;
  }
  .cp3con>div{
    float:left;
  }
  .cp3right{
    width:660px;
    background:#fff;
    padding:50px 0 0 70px;
    position: relative;
    height:406px;
  }
  .cp3Span{
    position:absolute;
    top:0;
    right:0;
    width:37px;
    height:41px;
    background:url(/image/course_basic/part8-tr-label.jpg) no-repeat;
  }
  /* 多选、单选框样式 开始 */
  .select{
    width:80%;
    padding:0 50px 5px;
    margin-left:80px;
  }
  .select>h4{
    float:none;
    border-left:2px solid #86c138;
    font-size:18px;
    padding-left:20px;
    margin:20px 0 3px;
    text-align:left;
    margin-left:-70px;
  }
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
    left:-20px;
    width:20px;height:20px;
    background:#fff;
    border:1px solid #999;
    cursor:pointer;
  }
  .bgpart2_em{
    background:url(/image/course_basic/part5-tr-icon.png) no-repeat;
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
  /* 多选、单选框样式 结束 */
  /* 第二部分 cou_part2 学习内容样式 */
  .cou_part2{
    width:100%;
    margin:auto;
    /* height:559px; */
    padding:65px 0;
    background:url(/image/course_basic/part2-bg01.jpg) no-repeat center top;
  }
  .sc_tit>p{
    color:#666;
    font-size:16px;
    text-align:center;
    padding:22px 0;
  }
  .cp2con{
    width:1160px;
    padding:20px;
    margin:25px auto 0;
    border:1px solid #ececec;
    /* height:340px; */
    border-right:3px solid #8ad142;
    overflow: hidden;
  }
  .cp2Left{
    width:440px;
    /* height:340px; */
    float:left;
    overflow: hidden;
    position: relative;
  }
  .cp2Left>img{
    width:100%;
  }
  .cp2Left>ul{
    position:absolute;
    bottom:0;
    left:0;
    background:rgba(0,0,0,0.6);
    width:325px;
    padding:25px 20px;
  }
  .cp2Left>ul>li{
    color:#fff;
    font-size:14px;
    padding-left:30px;
    line-height: 30px;
    background:url(/image/course_basic/correct-icon.png) no-repeat 0 6px;
  }
  .cp2Right{
    float:left;
    color:#333;
    font-size:18px;
    padding:15px;
    margin-left:25px;
    width:650px;
  }
  .cp2Right>p{
    line-height: 30px;
    position: relative;
    padding-left:15px;
  }
  .cp2Right>p::before{
    content:"";
    display:inline-block;
    width:4px;
    height:24px;
    position: absolute;
    left:0;
    top:3px;
    background:#8ad142;
  }
  .cp2Right>ul{
    display:flex;
    justify-content: space-around;
    flex-flow:row wrap;
    padding-left:15px;
    margin-bottom:10px;
  }
  .cp2Right>ul>li{
    width:50%;
    color:#666666;
    font-size:16px;
    line-height: 39px;
  }
  .cp2Btn{
    margin-left:15px;
    width:180px;
    height:40px;
    background:#86c138;
    text-align:center;
    line-height:40px;
    color:#fff;
    font-size:16px;
    border-radius:60px;
    border:1px solid #86c138;
    cursor: pointer;
  }
  /* 免费体验 "弹框" */
  div.appFree{
    width:340px;
    height:280px;
    margin-left:-170px;
    margin-top:-140px;
  }
  .appointment>.free{
    font-size:18px;
    font-weight:400;
    padding:10px 0 16px;
    border-bottom:2px solid #86c138;
    margin-bottom:30px;
    text-align:center;
    width:289px;
    margin:auto;
    position: relative;
  }
  .free>span{
    position: absolute;
    top:0;
    right:-25px;
    width:20px;
    height:20px;
    line-height: 18px;
    text-align: center;
    color:#fff;
    background:#86c138;
    cursor: pointer;
  }
  .appFree>.app_form>input{
    width:248px;
    font-size:14px;
  }
  .appFree>.app_form>a{
    width:248px;
    font-size:16px;
  }
  .appFree>.app_form>span::before{
    content:"*";
    display: inline-block;
    color:red;
    position:absolute;
    left:-25px;
  }
  .appFree>.app_tips>span>em{
    left:49px;
  }

  /* 第一部分 cou_part1 样式 */
  .cou_part1{
    width:100%;
    overflow: hidden;
    background:url(/image/course_basic/part1-bg.jpg) no-repeat center top;
    padding:75px 0 100px;
  }
  .sc_tit{
    text-align:center;
  }
  .sc_tit>div{
    position: relative;
    display: inline-block;
  }
  .tit_lt{
    position:absolute;
    width:40px;
    height:2px;
    background:#999;
    display: block;
    top:50%;
  }
  .sc_tit>div>em:first-child{
    left:0;
  }
  .sc_tit>div>em:last-child{
    right:0;
  }
  .sc_tit>div>h2{
    display: inline-block;
    padding: 0 65px;
  }
  .sc_tit>div>h2>b{
    display:block;
    font-size:36px;
    line-height:36px;
    color:#333;
    font-style: normal;
    font-weight: 400;
  }
  .sc_tit>div>h2>b.lastb{
    color:#666;
    padding:15px 0 0;
    font-size:30px;
  }
  .part1_con{
    width:1200px;
    margin:auto;
    padding:30px;
    position: relative;
  }
  .collect{
    position:absolute;
    top:10px;
    right:0;
  }
  .collect>span{
    display:inline-block;
    width:185px;
    height:35px;
    border-radius:3px;
    text-align:center;
    cursor: pointer;
    border:1px solid #d9d9d9;
    color:#666;
    line-height: 35px;
    font-size:14px;
    padding-left: 20px;
    background:url(/image/course_basic/part1-icon07.png) no-repeat 12px 8px;
  }
  .partList{
    width:1200px;
    margin:auto;
    overflow: hidden;
  }
  .plLeft,.plRight{
    float:left;
    padding:20px 50px 20px;
    background:#fff;
    width:590px;
  }
  .plLeft{
    margin-right:20px;
    padding-bottom:59px;
  }
  .plLeft>h3,.plRight>h3{
    margin:15px 0;
    color:#333;
    font-size:18px;
    font-weight: bold;
    padding-left:40px;
  }
  .plLeft>h3{
    background:url(/image/course_basic/part1-icon01.png) no-repeat 0 -2px;
  }
  .plRight>h3{
    background:url(/image/course_basic/part1-icon02.png) no-repeat 0 -2px;
  }
  .plLeft>ul>li,.plRight>ul>li{
    margin:15px 0;
    font-size:16px;
    color:#666;
  }
  .plLeft>ul,.plRight>ul{
    padding-left:40px;
  }
  /* 固定导航条fix_nav */
  .fix_nav{
    width:100%;
    height:54px;
    background:#666;
    color:#fff;
    font-size:18px;
    overflow: hidden;
    z-index: 99;
  }
  .fn_list{
    width:1200px;
    margin:auto;
    overflow: hidden;
    position: relative;
  }
  .fn_list>ul>li{
    float: left;
    line-height: 54px;
    width:145px;
    text-align:center;
    position:relative;
    cursor: pointer;
  }
  .fn_list>ul>li>em{
    display: block;
    width:110px;
    height:4px;
    background:#8ad142;
    position:absolute;
    bottom:0;
    left:17.5px;
  }
  .fn_list>span{
    position:absolute;
    right:3px;
    top:10px;
    background:#8ad142;
    width:166px;
    height:34px;
    line-height:34px;
    color:#fff;
    text-align:center;
    border-radius:5px;
    font-size:18px;
    cursor: pointer;
  }
  .active{
    color:#8ad142;
  }
  /* 面包屑 */
  .cou_nav>ul{
    display: flex;
    margin:22px 0;
  }
  .cou_nav>ul>li+li::before{
    content:">";
  }
  /* 左侧轮播 */
  .course_banner{
    width:100%;
    height:629px;
    position: relative;
    overflow: hidden;
  }
  .course_banner>img{
    width:100%;
  }
  .cou_title{
    width:1200px;
    margin:auto;
    position: absolute;
    top:0;
    color:#666;
    left:50%;
    margin-left:-600px;
  }
  .cou_content{
    width:1200px;
    height:518px;
    background:#fff;
  }
  .cou_content>div{
    float:left;
  }
  .cou_carousel{
    width:556px;
    padding:27px 0 0 22px;
    position: relative;
  }
  .bigpic>img{
    width:100%;
  }
  .smapic{
    width:530px;
    margin:auto;
    margin-top:10px;
    display:flex;
    justify-content: space-between;
  }
  .smapic>li{
    width:23%;
  }
  .smapic>li>img{
    width:100%;
  }
  .liBorder{
    border:2px solid transparent;/*#8ad142;*/
  }
  .changeColor{
    border:2px solid #8ad142;
  }
  .car_left,.car_right{
    position: absolute;
    top:172px;
    width:30px;
    height:88px;
    cursor: pointer;
    opacity: .4;
  }
  .car_left{
    left:22px;
    background:#000 url(/image/course_basic/left.png) no-repeat 5px;
  }
  .car_right{
    right:0;
    background:#000 url(/image/course_basic/right.png)no-repeat 5px;
  }
/* 右侧内容 */
  .cou_info{
    margin:27px 0 0 65px;
  }
  .cou_info>h3{
    font-size:24px;
    height:26px;
    color:#333;
    font-weight: 400;
  }
  .cou_first{
    margin-top:100px;
  }
  .cou_first>span{
    float:left;
    width:142px;
    height:62px;
    line-height: 62px;
    text-align: center;
    color:#fff;
    font-weight: 700;
    font-size:18px;
    cursor: pointer;
    
  }
  .cou_first>ul{
    float: left;
    margin-top:-25px;
    margin-left:40px;
  }
  .cou_first>ul>li{
    color:#7faf44;
    line-height:36px;
    cursor: pointer;
  }
  .cou_first::after{
    content:"";
    display:block;
    clear: both;
  }
  .cou_last{
    margin-top:100px;
  }
  .cou_last>div{
    float:left;
    margin-right:40px;
  }
  .cou_last>ul{
    float:left;
    display:flex;
    justify-content: space-around;
    flex-flow: row wrap;
    width:350px;
  }
  .cou_last>ul>li{
    width:33%;
    color:#333;
    font-size:14px;
    padding-left:25px;
    background:url(/image/course_basic/cou-icon02.png) no-repeat 0 2px;
  }
  .cou_last>ul>li:nth-child(4),.cou_last>ul>li:nth-child(5),.cou_last>ul>li:nth-child(6){
    margin-top:10px;
  }
  .cou_last::after{
    content:"";
    display:block;
    clear: both;
  }
  .cou_btn{
    text-align: center;
    margin-top:50px;
  }
  .cou_btn>a{
    display:inline-block;
    height:40px;
    line-height: 40px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    font-size:20px;
  }
  .cou_btn>a:first-child{
    width:240px;
    color:#fff;
    background: #8ad142;
    margin-right:30px;
  }
  .cou_btn>a:last-child{
    width:137px;
    color:#8ad142;
    border:1px solid #8ad142;
  }
  /* 预约免费英语试听课 */
  .maskdiv{
    width:100%;
    height:100%;
    background:#000;
    position: fixed;
    top:0;
    left:0;
    opacity: .6;
    z-index: 888;
  }
  .appointment{
    width:378px;
    height:446px;
    padding-bottom:20px;
    position: fixed;
    z-index: 999;
    left:50%;
    top:50%;
    margin-left:-189px;
    margin-top:-223px;
    background:#fff;
    box-shadow: 2px 2px 3px;
    border-radius:5px;
  }
  .appointment>h2{
    height:50px;
    line-height: 50px;
    width: 100%;
    background:#8ad142;
    color:#fff;
    text-align:center;
    position: relative;
    font-size:24px;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
  }
  .appointment>h2>span{
    position: absolute;
    top:-5px;
    right:15px;
    font-size:28px;
    cursor: pointer;
  }
  .app_info{
    padding:22px 40px 32px;
    background:#ededed;
    border:1px solid #d1d1d1;
    color:#666;
    line-height: 30px;
    font-size:20px;
  }
  .app_info>ul{
    font-size:18px;
  }
  .app_form{
    padding:22px 40px 32px;
    position: relative;
    text-align: center;
  }
  .app_form>input{
    border:1px solid #999;
    color:#999;
    width:296px;
    height:40px;
    line-height: 40px;
    font-size:16px;
    border-radius:3px;
    text-indent:44px;
    margin-top:15px;
  }
  .app_form>span{
    position: absolute;
    top:44px;
    left:58px;
    width:12px;
    height:24px;
    background:url(/image/course_basic/pc-masterIcon.png) no-repeat -302px 0;
  }
  .app_form>a{
    display: inline-block;
    width:296px;
    height:40px;
    line-height: 40px;
    text-align: center;
    color:#fff;
    background:#86c138;
    border-radius:5px;
    font-size:20px;
    margin-top:15px;
  }
  .app_form>a:hover{
    background:#7bb233;
  }
  .app_tips{
    text-align: center;
    position: relative;
    padding-left:22px;
  }
  .app_tips>span,.app_tips>span>a{
    color:#999;
  }
  .app_tips>span>a:hover{
    color:#86c138;
	  text-decoration: underline;
  }
  .app_tips>span>.ass_box{
    top:4px;
    left:68px;
    width:18px;
    height:18px;
  }
  .bgchonclick{
    background:url(/image/chooseBtn01.png) no-repeat;
  }
</style>
