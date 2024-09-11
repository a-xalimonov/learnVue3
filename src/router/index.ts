import { createRouter, createWebHistory } from 'vue-router'
import DeclarativeRendering from '../views/DeclarativeRendering.vue'
import AttributeBinding from '../views/AttributeBinding.vue'
import EventListeners from '../views/EventListeners.vue'
import FormBinding from '../views/FormBinding.vue'
import ConditionalRendering from '../views/ConditionalRendering.vue'

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
    {
      path: '/form_binding',
      name: 'form_binding',
      component: FormBinding
    },
    {
      path: '/conditional_rendering',
      name: 'conditional_rendering',
      component: ConditionalRendering
    },
    
  ]
})

export default router
