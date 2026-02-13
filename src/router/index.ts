import { createRouter, createWebHistory } from 'vue-router'
import Menu from '@/components/Menu.vue'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import ThreePath from '@/views/ThreePath/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Menu,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'contact',
          component: Contact
        },
        {
          path: 'three-path',
          component: ThreePath
        }
      ]
    }
  ]
})

export default router