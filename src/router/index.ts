import { createRouter, createWebHistory } from 'vue-router'
import DeclarativeRendering from '../views/DeclarativeRendering/DeclarativeRendering.vue'
import AttributeBinding from '../views/AttributeBinding/AttributeBinding.vue'
import EventListeners from '../views/EventListeners/EventListeners.vue'
import FormBinding from '../views/FormBinding/FormBinding.vue'
import ConditionalRendering from '../views/ConditionalRendering/ConditionalRendering.vue'
import ListRendering from '../views/ListRendering/ListRendering.vue'
import Lifecycle from '../views/Lifecycle/Lifecycle.vue'
import Watchers from '../views/Watchers/Watchers.vue'
import Components from '../views/Components/Components.vue'

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
    {
      path: '/list_rendering',
      name: 'list_rendering',
      component: ListRendering
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: Lifecycle
    },
    {
      path: '/watchers',
      name: 'watchers',
      component: Watchers
    },
    {
      path: '/components',
      name: 'components',
      component: Components
    },
  ]
})

export default router
