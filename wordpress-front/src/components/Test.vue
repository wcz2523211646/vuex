<template>
  <div :style="{width:'100%',height:'100%'}">
    {{msg}}
    <router-view/>
    <router-view name="name"/>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: 'test'
    }
  }
}
</script>

<style scoped>

</style>
