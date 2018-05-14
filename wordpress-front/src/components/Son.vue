<template>
  <div>
    {{msg}}
    <Drag>
      <span>我是页面</span>
      <span>我是页面</span>

      <span slot="two">第二个页面</span>
    </Drag>
  </div>
</template>

<script>
import Drag from './Drag'
export default {
  name: '',
  data () {
    return {
      msg: 'come on my son'
    }
  },
  components:{
    Drag
  }
}
</script>

<style scoped>

</style>
