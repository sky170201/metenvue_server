<template>
  <div class="footer">
    <div class="footer_top">
        <ul>
            <li>
                <img src="image/footer-icon01.png" alt="">
                <h4>英语教师团队</h4>
                <p>英语教师发展培训体系</p>
            </li>
            <li>
                <img src="image/footer-icon02.png" alt="">
                <h4>学习方案</h4>
                <p>1对1定制英语学习</p>
            </li>
            <li>
                <img src="image/footer-icon03.png" alt="">
                <h4>线下线上结合</h4>
                <p>线下系统学，线上自由练</p>
            </li>
            <li>
                <img src="image/footer-icon04.png" alt="">
                <h4>免费辅导</h4>
                <p>专职老师英语学习辅导</p>
            </li>
        </ul>
    </div>
    <div class="footer_mid">
        <div class="mid_list">
            <ul>
                <li><a id="list_a1" href="">关于我们</a></li>
                <li><a id="list_a2" href="">售后保障</a></li>
                <li><a id="list_a3" href="">掌上学习</a></li>
                <li><a id="list_a4" href="">免费服务</a></li>
                <li><a href="">发展历程</a></li>
                <li><a href="">订课app</a></li>
                <li><a href="">小程序</a></li>
                <li></li>
                <li class="list_li2"><a href="">联系我们</a></li>
                <li class="list_li2"><a href="">投诉建议</a></li>
                <li class="list_li2"><a href="">趣味单词</a></li>
                <li class="list_li2"><a href="">在线测试</a></li>
            </ul>
            <div class="mid_tel">
                <div class="mid_tel_top">
                    <span></span>
                    <div class="phone">
                        <span>全国热线</span><br>
                        <a href="">400-700-1003</a>
                    </div>
                </div>
                <div class="mid_tel_bot">
                    <span></span>
                    <div class="online">
                        <span>在线客服</span><br>
                        <span>点击咨询</span>
                    </div>
                </div>
            </div>
            <div class="mid_right">
                <div class="code">
                    <div>
                        <img src="image/footer-qrCode01-new.jpg" alt=""><br>
                        <p>领取英语面授课</p>
                    </div>
                    <div>
                        <img src="image/footer-qrCode03.jpg" alt=""><br>
                        <p>美联英语官方微信</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer_bot">
        <div class="bot_list">
            <h3>美联国际教育集团旗下品牌：</h3>
            <ul>
                <li><a href="">美联英语</a></li>
                <li><a href="">美联出国考试</a></li>
                <li><a href="">美联青少英语</a></li>
                <li><a href="">立刻说（在线）</a></li>
                <li><a href="">ABC青少英语</a></li>
            </ul>
            <div id="metenpos">
                <span>深圳市美联国际教育有限公司</span>
							<span class="span2">
								粤ICP备12018421号
							</span>
                <p>总部地址：深圳市南山区北环大道深云西二路天健创智中心A塔3楼</p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style>
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
.bot_list>ul>li>a{font-size: 14px;color:#999;line-height:30px;}
.bot_list>span>a{text-align:left;font-size:16px;color:#999;}
#metenpos{
    width:485px;margin:10px auto;
    font-size:16px;color:#999;font-weight:700;}
#metenpos>.span2>a{text-align:left;}
#metenpos>p{margin:10px 0px;}
</style>

