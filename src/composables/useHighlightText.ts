const csMap: Record<string, string> = {
  a: '[aá]',
  e: '[eéě]',
  i: '[ií]',
  o: '[oó]',
  u: '[uúůû]',
  y: '[yý]',
  c: '[cč]',
  d: '[dď]',
  n: '[nň]',
  r: '[rř]',
  s: '[sš]',
  t: '[tť]',
  z: '[zž]',
}

function escapeRegex(text: string) {
  return text.replace(/[-[\]{}()+?.,\\^$|#\s]/g, '\\$&')
}

function buildDiacriticRegex(query: string): RegExp {
  const safe = escapeRegex(query.toLowerCase())
  const pattern = safe.replace(/\*/g, '.*?').replace(/./g, (char) => csMap[char] || char)
  return new RegExp(pattern, 'i') // case-insensitive, single match
}

export function useHighlightText() {
  const highlightText = (
    text: string | null | undefined,
    query: string | null | undefined,
  ): string => {
    if (!text || !query?.trim()) return text || ''
    const regex = buildDiacriticRegex(query)
    return text.replace(
      new RegExp(regex, 'gi'),
      (match) => `<span class="highlight">${match}</span>`,
    )
  }

  const matches_text = (
    text: string | null | undefined,
    query: string | null | undefined,
  ): boolean => {
    if (!text || !query?.trim()) return false
    const regex = buildDiacriticRegex(query)
    return regex.test(text)
  }

  return { highlightText, matches_text }
}
