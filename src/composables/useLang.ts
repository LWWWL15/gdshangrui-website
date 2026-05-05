import { ref, readonly } from 'vue'

type Lang = 'zh' | 'en'

const lang = ref<Lang>('en')

export function useLang() {
  const setLang = (l: Lang) => {
    lang.value = l
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('lang', l)
    }
  }

  const t = (zh: string, en: string) => lang.value === 'zh' ? zh : en

  return { lang: readonly(lang), setLang, t }
}
