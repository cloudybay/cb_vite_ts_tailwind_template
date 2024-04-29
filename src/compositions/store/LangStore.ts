import { defineStore } from 'pinia'
import { reactive, readonly, DeepReadonly } from 'vue'

export interface Store {
  state: DeepReadonly<State>,
  set_lang: Function
}

export interface State {
  lang: string,
}

export const useLangStore = defineStore('LangStore', () => {
  const state: State = reactive({
    lang: '',
  })

  const set_lang = (lang: string) => {
    state.lang = lang
  }

  const store: Store = {
    state: readonly(state),
    set_lang
  }

  return store
})