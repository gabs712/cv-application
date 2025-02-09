export default function beautifyString(string) {
  return string
    .split('')
    .map((char, i) => {
      if (i === 0) return char.toUpperCase()
      if (char === char.toUpperCase()) return ` ${char}`
      return char
    })
    .join('')
}
