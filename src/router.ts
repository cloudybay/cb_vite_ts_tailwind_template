import { createRouter, createWebHistory } from 'vue-router'
import { useLangStore } from './compositions/store/LangStore.ts'
import i18n from './i18n'

const default_langs = ['zh', 'en']

const get_navigator_lang = () => {
  let [user_locale, _] = window.navigator.language.split('-')
  if (!default_langs.includes(user_locale)) {
    user_locale = 'en'
  }
  return user_locale
}

const forceLocale = (to: any, _from: any) => {
  const LangStore = useLangStore()
  let lang = LangStore.state.lang || to.query.lang

  if (lang) {
    if (!default_langs.includes(lang)) {
      // 使用者在 URL 亂輸的話，強制是 en
      lang = 'en'
    }
    if (i18n.global.locale.value !== lang) {
      i18n.global.locale.value = lang
    }
    if (to.query.lang !== i18n.global.locale.value) {
      return {
        ...to,
        query: {
          ...to.query,
          lang: i18n.global.locale.value,
        },
      }
    }
  } else {
    return {
      ...to,
      query: {
        ...to.query,
        lang: get_navigator_lang(),
      },
    }
  }
}

const forceZH = (_to: any, _from: any) => {
  i18n.global.locale.value = 'zh'
}

const forceEN = (_to: any, _from: any) => {
  i18n.global.locale.value = 'en'
}

const routes = [
  {
    path: '',
    name: 'Home',
    component: () => import('./views/Main.vue'),
    beforeEnter: [forceLocale],
  },
  {
    path: '/500',
    name: 'InternalServerError',
    component: () => import('./views/Page500.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('./views/Page404.vue'),
  },
]

const options = {
  history: createWebHistory(),
  scrollBehavior(to: any, from: any) {
    // scroll to top when component changed
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
          })
        }, 200)
      })
    } else if (to.name !== from.name) {
      return { top: 0 }
    }
  },
  routes,
}

const router = createRouter(options)
export default router
