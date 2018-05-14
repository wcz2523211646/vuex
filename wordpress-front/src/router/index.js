import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Son from '@/components/Son'
import Home from '@/components/Home'
import Login from '@/components/Login/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component:Login
    },
    {
      path: '/:id',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
        home:Home
      }
    },
    {
      path: '/test',
      component: Test,
      children:[
        {
          path: 'son',
          components: {
            default:Son,
            // name:Bro
          }
        }
      ]
    }
  ]
})
