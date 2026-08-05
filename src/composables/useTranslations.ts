import { computed, reactive } from 'vue'
import { useRoute } from 'vue-router'

export type Lang = 'cn' | 'mic' | 'vn' | 'ru'

export interface TranslationResult {
  cn: string
  mic: string
  vn?: string
}

export type Fallback = string | TranslationResult | undefined

// Module-level blog translation store (separate from common.json).
// Wrapped in reactive() so Vue components re-render when translations load asynchronously.
const translations = reactive<Record<Lang, Record<string, any>>>({
  cn: {},
  mic: {},
  vn: {},
  ru: {},
})

async function loadTranslations(lang: Lang): Promise<void> {
  try {
    const mod = await import(`@/locales/${lang}/blog.json`)
    translations[lang] = mod.default || {}
  } catch (error) {
    console.warn(`Failed to load blog translations for ${lang}:`, error)
    translations[lang] = {}
  }
}

Promise.all([
  loadTranslations('cn'),
  loadTranslations('mic'),
  loadTranslations('vn'),
  loadTranslations('ru'),
]).catch(console.error)

/**
 * Dedicated composable for the blog detail page. Reads from locales/<lang>/blog.json
 * so the blog content team can manage blog copy independently of the global common.json.
 *
 * API mirrors useLang so BlogDetailView can keep its existing call sites:
 *   t('中文', 'English', 'Tiếng Việt', 'Русский')   -> string for current lang
 *   tm('detail.projectBackground')                   -> string for current lang
 *   tm('detail.projectBackground', 'Fallback')      -> fallback string
 *   tm('detail.projectBackground', { zh, en, vn })  -> object fallback
 */
export function useTranslations() {
  const route = useRoute()

  const lang = computed<Lang>(() => {
    const l = route.params.lang as string
    if (l === 'cn') return 'cn'
    if (l === 'vn') return 'vn'
    if (l === 'ru') return 'ru'
    return 'mic'
  })

  // Four-argument translation helper for inline values.
  // t('中文', 'English', 'Tiếng Việt', 'Русский') returns the matching string for the active lang.
  const t = (zh: string, en: string, vn?: string, ru?: string): string => {
    const current = lang.value
    if (current === 'cn') return zh
    if (current === 'vn') return vn ?? en
    if (current === 'ru') return ru ?? en
    return en
  }

  const tm = (key: string, fallback?: Fallback): string => {
    const current = lang.value
    const segments = key.split('.')

    let resolved: any
    if (segments.length > 1 && (segments[0] === 'cn' || segments[0] === 'mic' || segments[0] === 'vn' || segments[0] === 'zh')) {
      const targetLang: Lang = segments[0] === 'zh' ? 'cn' : (segments[0] as Lang)
      resolved = segments.slice(1).reduce((obj: any, k: string) => obj?.[k], translations[targetLang])
    } else {
      resolved = segments.reduce((obj: any, k: string) => obj?.[k], translations[current])
    }

    if (resolved && typeof resolved === 'object') {
      if (current === 'cn') return resolved.cn ?? pickFallback(fallback, current)
      if (current === 'vn') return resolved.vn ?? resolved.mic ?? pickFallback(fallback, current)
      return resolved.mic ?? pickFallback(fallback, current)
    }

    if (typeof resolved === 'string' && resolved.length > 0) return resolved
    return pickFallback(fallback, current)
  }

  return { lang, t, tm, translations }
}

function pickFallback(fallback: Fallback, current: Lang): string {
  if (!fallback) return ''
  if (typeof fallback === 'string') return fallback
  if (current === 'cn') return fallback.cn || ''
  if (current === 'vn') return fallback.vn || fallback.mic || ''
  return fallback.mic || ''
}