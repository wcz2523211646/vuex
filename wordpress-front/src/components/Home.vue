<template>
  <div>
    {{msg}}
    {{$route.params.id}}
    {{$store.state.host}}
    {{$store.state.num}}
    <div @click="divClick">
      加
    </div>
    <el-button @click="sureClick">确定</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  data () {
    return {
      msg: 'come back'
    }
  },
  mounted(){
      console.log(this.$route);
      console.log(this.$router);
      console.log(this.$store.state);
  },
  methods:{
      divClick(){
          this.$store.commit('addNum');
          //请求接口
          let host = this.$store.state.host;
          axios.get(host+'/test').then((data) => {
              console.log(data.data);
          })
      },
      sureClick(){
          let host = this.$store.state.host;
          axios.post(host+'/test','id=123&usernam=www&pwd=345').then((data) => {
              console.log(data.data);
          })
      }
  }
}
</script>

<style scoped>

</style>
