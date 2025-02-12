import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "",
    name: "Main",
    component: () => import("./views/Main.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes,
  scrollBehavior(to: any, from: any) {
    // scroll to top when component changed
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: "smooth",
          })
        }, 200)
      })
    } else if (to.name !== from.name) {
      return { top: 0 }
    }
  },
})

export default router
