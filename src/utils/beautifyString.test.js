import beautifyString from './beautifyString'
const b = beautifyString

test('Capitalize first char', () => {
  expect(b('string')).toBe('String')
})

test('Separate camelCase', () => {
  expect(b('camelCase')).toBe('Camel Case')
})
