<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<style>
body,a,ul,li,input,h2,p,h3,h4,h5{
    margin:0;padding:0;list-style:none;
    text-decoration:none;outline:0;border:0;}
a:hover{text-decoration:none;}
body{background:#f0f0f0;}
em{
    font-style: normal;
}
</style>
