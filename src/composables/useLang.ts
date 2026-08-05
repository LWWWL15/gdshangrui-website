import { computed, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export type Lang = 'cn' | 'mic' | 'vn' | 'ru'

export interface TranslationResult {
  cn: string
  mic: string
  vn?: string
}

export type Fallback = string | TranslationResult | undefined

// Module-level translation store, populated once at startup.
// Wrapped in reactive() so Vue components re-render when translations load asynchronously.
const translations = reactive<Record<Lang, Record<string, any>>>({
  cn: {},
  mic: {},
  vn: {},
  ru: {},
})

async function loadTranslations(lang: Lang): Promise<void> {
  try {
    const mod = await import(`@/locales/${lang}/common.json`)
    translations[lang] = mod.default || {}
  } catch (error) {
    console.warn(`Failed to load translations for ${lang}:`, error)
    translations[lang] = {}
  }
}

// Eagerly load all three languages.
Promise.all([
  loadTranslations('cn'),
  loadTranslations('mic'),
  loadTranslations('vn'),
  loadTranslations('ru'),
]).catch(console.error)

export function useLang() {
  const router = useRouter()
  const route = useRoute()

  // Current language comes from the route segment /:lang(cn|mic|vn).
  const lang = computed<Lang>(() => {
    const l = route.params.lang as string
    if (l === 'cn') return 'cn'
    if (l === 'vn') return 'vn'
    if (l === 'ru') return 'ru'
    return 'mic'
  })

  // Persist the current language to localStorage so the root redirect can use it.
  const setLang = (l: Lang) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('lang', l)
    }
  }

  // Four-argument translation helper for inline values.
  // t('中文', 'English', 'Tiếng Việt', 'Русский') returns the matching string for the active lang.
  const t = (zh: string, en: string, vn?: string, ru?: string): string => {
    const current = lang.value
    if (current === 'cn') return zh
    if (current === 'vn') return vn ?? en
    if (current === 'ru') return ru ?? en
    return en
  }

  // Resolve a nested key from common.json.
  //   tm('home.title')                           -> string for current lang
  //   tm('home.title', 'fallback string')        -> fallback when key is missing
  //   tm('home.title', { zh, en, vn })           -> object fallback for the active lang
  const tm = (key: string, fallback?: Fallback): string => {
    const current = lang.value
    const segments = key.split('.')
    const data = translations[current]

    let resolved: any
    if (segments.length > 1 && (segments[0] === 'cn' || segments[0] === 'mic' || segments[0] === 'vn' || segments[0] === 'zh')) {
      // Explicit language prefix in the key, e.g. "cn.home.title".
      const targetLang: Lang = segments[0] === 'zh' ? 'cn' : (segments[0] as Lang)
      resolved = segments.slice(1).reduce((obj: any, k: string) => obj?.[k], translations[targetLang])
    } else {
      resolved = segments.reduce((obj: any, k: string) => obj?.[k], data)
    }

    // If the value is an object with zh/en/vn, pick the right language.
    if (resolved && typeof resolved === 'object') {
      if (current === 'cn') return resolved.cn ?? pickFallback(fallback, current)
      if (current === 'vn') return resolved.vn ?? resolved.mic ?? pickFallback(fallback, current)
      if (current === 'ru') return resolved.ru ?? resolved.mic ?? pickFallback(fallback, current)
      return resolved.mic ?? pickFallback(fallback, current)
    }

    if (typeof resolved === 'string' && resolved.length > 0) return resolved
    return pickFallback(fallback, current)
  }

  // Switch language by rewriting the URL prefix.
  const switchLang = (targetLang: Lang) => {
    if (typeof window === 'undefined') return
    const stripped = window.location.pathname.replace(/^\/(cn|mic|vn|ru)/, '') || '/'
    const newPath = `/${targetLang}${stripped === '/' ? '/' : stripped}`
    router.push(newPath)
  }

  return { lang, setLang, t, tm, switchLang, translations }
}

function pickFallback(fallback: Fallback, current: Lang): string {
  if (!fallback) return ''
  if (typeof fallback === 'string') return fallback
  if (current === 'cn') return fallback.cn || ''
  if (current === 'vn') return fallback.vn || fallback.mic || ''
  return fallback.mic || ''
}

// Expose the raw translation map for debugging or admin tooling.
export { translations }