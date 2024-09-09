import { createRouter, createWebHistory } from 'vue-router'
import DeclarativeRendering from '../views/DeclarativeRendering.vue'
import AttributeBinding from '../views/AttributeBinding.vue'
import EventListeners from '../views/EventListeners.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/declarative_rendering'
    },
    {
      path: '/declarative_rendering',
      name: 'declarative_rendering',
      component: DeclarativeRendering
    },
    {
      path: '/attribute_binding',
      name: 'attribute_binding',
      component: AttributeBinding
    },
    {
      path: '/event_listeners',
      name: 'event_listeners',
      component: EventListeners
    },
  ]
})

export default router
