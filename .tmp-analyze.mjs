import { readFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

const ROOT = 'D:/Qclaw/gdshangrui/src/views'
const files = readdirSync(ROOT).filter(f => f.endsWith('.vue'))

for (const f of files) {
  const content = readFileSync(join(ROOT, f), 'utf8')

  // Find all {{ t(...) }} calls
  const tCalls = [...content.matchAll(/\{\{\s*t\(([^)]+)\)\s*\}\}/gs)]
  let args4 = 0, args3 = 0, args2 = 0, argsOther = 0
  const examples = { 4: [], 3: [], 2: [], other: [] }

  for (const m of tCalls) {
    const args = m[1].trim()
    let depth = 0
    const parts = []
    let current = ''
    let inStr = null
    for (let i = 0; i < args.length; i++) {
      const ch = args[i]
      if (inStr) {
        if (ch === '\\') { current += ch; if (i + 1 < args.length) { current += args[++i] } continue }
        if (ch === inStr) { inStr = null; current += ch; continue }
        current += ch
        continue
      }
      if (ch === "'" || ch === '"' || ch === '`') { inStr = ch; current += ch; continue }
      if (ch === '(') { depth++; current += ch; continue }
      if (ch === ')') { depth--; current += ch; continue }
      if (ch === ',' && depth === 0) { parts.push(current.trim()); current = ''; continue }
      current += ch
    }
    if (current.trim()) parts.push(current.trim())

    let stringCount = 0
    for (const p of parts) {
      const pt = p.trim()
      if (/^['"`].*['"`]$/.test(pt)) stringCount++
    }

    const preview = parts[0]?.substring(0, 30) || ''
    if (stringCount >= 4) { args4++; if (examples[4].length < 2) examples[4].push(`${parts.length} args: ${preview}...`) }
    else if (stringCount === 3) { args3++; if (examples[3].length < 2) examples[3].push(`${parts.length} args: ${preview}...`) }
    else if (stringCount === 2) { args2++; if (examples[2].length < 2) examples[2].push(`${parts.length} args: ${preview}...`) }
    else { argsOther++; if (examples.other.length < 2) examples.other.push(`${parts.length} args: ${preview}...`) }
  }

  console.log(`\n=== ${f} === (total ${tCalls.length})`)
  console.log(`  4-arg: ${args4}, 3-arg: ${args3}, 2-arg: ${args2}, other: ${argsOther}`)
  for (const k of ['4', '3', '2', 'other']) {
    if (examples[k].length) {
      console.log(`  ${k}-arg examples:`)
      examples[k].forEach(e => console.log(`    ${e}`))
    }
  }
}
