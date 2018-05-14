<template>
  <div :style="{position:'absolute',left:left+'px',top:top+'px'}">
    <div @mousedown="mousedown" class="box title" @click="titleClick">title</div>
    <div class="content" v-show="isShow">
      <slot></slot>
      <hr/>
      <slot name="two"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: '',
      left:0,
      top:0,
      isShow:false
    }
  },
  methods:{
    mousedown(ev){
      this.startTime = new Date().getTime();
      this.disx = ev.clientX - this.left;
      this.disy = ev.clientY - this.top;
      document.addEventListener('mousemove',this.move,false);
      document.addEventListener('mouseup',this.mouseup,false);
    },
    move(ev){
      let x = ev.clientX - this.disx;
      let y = ev.clientY - this.disy;
      this.left = x;
      this.top = y;
    },
    mouseup(){
      document.removeEventListener('mousemove',this.move,false);
      document.removeEventListener('mouseup',this.mouseup,false);
    },
    titleClick(){
      this.endTime = new Date().getTime();
      console.log(this.endTime - this.startTime);
      if(this.endTime - this.startTime < 150){
          this.isShow = !this.isShow;
      }
      
    }
  }
}
</script>

<style scoped>
    .box{
      width:10rem;
      height:3rem;
      background:red;
      cursor:pointer;
    }
</style>
