module.exports = {
  semi: false,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,

  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrder: [
    '^src/(.*)$',
    '<THIRD_PARTY_MODULES>',
    // '^(.*)/components/(.*)$', // Add any folders you want to be separate
    '@/(.*)$' // Absolute path imports
  ],
  plugins: ['@trivago/prettier-plugin-sort-imports']
}
