import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import myHeader from './components/my-header.vue'
import myFooter from './components/my-footer.vue'
Vue.component("my-header",myHeader);
Vue.component("my-footer",myFooter);

Vue.config.productionTip = false

Vue.directive("click",{
  inserted(domElem){
    domElem.onclick=function(){
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
})

Vue.directive("click1",{
  inserted(domElem){
    domElem.onclick=function(){
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
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
