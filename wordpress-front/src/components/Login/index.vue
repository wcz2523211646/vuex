<template>
  <div class="login">
    <h1 class="title">
        <i class="el-icon-circle-close-outline"></i>
    </h1>
    <div :style="{marginBottom:'10px'}">
        <el-alert
            title="成功提示的文案"
            type="danger"
            :closable="closeable"
            center
            show-icon>   
        </el-alert>
    </div>
    <el-form class="from" label-position="top" label-width="80px" :model="formLabelAlign">
        <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="formLabelAlign.pwd"></el-input>
        </el-form-item>
        <el-form-item>
            <el-checkbox v-model="formLabelAlign.switch" class="fl">记住我的登录信息</el-checkbox>
            <el-button type="info" class="fr" @click="login">登录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
import {toQstring} from '../../assets/until'
export default {
  data(){
    return {
      message:"提示",
      closeable:false,
      formLabelAlign:{
          name:" ",
          pwd:" ",
          type:" ",
          switch:false
      }
    }
  },
  computed:{

  },
  methods:{
    login(){
        let host = this.$store.state.host;
        let set = toQstring({
            user_name:this.formLabelAlign.name,
            user_password:this.formLabelAlign.pwd
        });
        axios.post(host + '/users/login',set).then((response) => {
            console.log(response)
        })
    }
  }
}
</script>

<style scoped>
    .login{
        width:300px;margin:0 auto;
    }
    .title{
        text-align:center;
        margin-bottom:10px;
        font-size:20px;
    }
    .fl{
        float:left;
    }
    .fr{
        float:right;
    }
</style>
