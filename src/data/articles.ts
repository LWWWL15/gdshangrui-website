// 文章数据定义
// 每篇文章对应一个语言版本(单语言记录)
// 缺语言时前台列表不显示该文章,详情页跳 404

export type ArticleLang = 'cn' | 'mic' | 'vn' | 'ru'

export interface Article {
  id: string              // 6 位数字字符串,如 "000001",跨语言全局唯一
  slug: string            // URL 标识符 = 拼音/拉丁转写 + "-" + id
  language: ArticleLang   // 文章语言:'cn' | 'mic' | 'vn' | 'ru'

  title: string           // 标题(单语言)
  desc: string            // 简短描述(列表卡片显示)
  content: string         // 项目背景
  solution: string        // 解决方案
  results: string         // 实施结果
  feedback: string        // 客户反馈

  customerName: string    // 客户名称(单语言)
  region: string          // 国家/地区(单语言,如 "🇻🇳 越南")
  date: string            // 合作时间,2024-03 格式
  productId: string       // 关联产品 ID

  cover?: string          // 封面图路径,可空,如 "/blog/xxx.webp"
  color: string           // 无封面时的占位渐变色
  icon: string            // 无封面时的占位 emoji
}

export const articles: Article[] = [

]







