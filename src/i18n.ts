import { createI18n } from 'vue-i18n'

let browserLanguage = window.navigator.language

// 先塞入瀏覽器預設語言在 i18n
if (browserLanguage.toLowerCase() === 'zh-tw') {
  browserLanguage = 'zh'
} else {
  browserLanguage = 'en'
}

const i18n = createI18n({
  legacy: false, // 要把 legacy 設為 false，才可以使用 Composition API
  locale: browserLanguage, // set locale
  fallbackLocale: 'en',
  globalInjection: true
})

export default i18n
