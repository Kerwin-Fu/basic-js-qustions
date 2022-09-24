import { def } from '@vue/shared'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import QOne from '@/components/QOne.vue'
import QTwo from '@/components/QTwo.vue'
import QThree from '@/components/QThree.vue'
import QFour from '@/components/QFour.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/questionOne',
        component: QOne
      },
      {
        path: '/questionTwo',
        component: QTwo
      },
      {
        path: '/questionThree',
        component: QThree
      },
      {
        path: '/questionFour',
        component: QFour
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
