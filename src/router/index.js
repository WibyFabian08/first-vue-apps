import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from "../layout/Layout.vue"
import DetailMeal from "../views/DetailMeal.vue";
import SearchMeal from "../views/SearchMeal.vue"
import Ingredietns from "../views/Ingredients.vue";
import ByIngredient from "../views/ByIngredient.vue"
import ByLetter from "../views/ByLetter.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: "/by-name",
          name: "byName",
          component: SearchMeal
        },
        {
          path: "/ingredietns",
          name: "ingredietns",
          component: Ingredietns
        },
        {
          path: "/meal/:id?",
          name: "mealDetail",
          component: DetailMeal
        },
        {
          path: "/by-ingredient/:ingredient",
          name: "byIngredient",
          component: ByIngredient
        },
        {
          path: "/by-letter",
          name: "byLetter",
          component: ByLetter
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
  ]
})

export default router
