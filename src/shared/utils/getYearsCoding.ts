export function getYearsCoding() {
  const startedYearCoding = 2001
  const currentYear = new Date().getFullYear()
  const yearsCoding = currentYear - startedYearCoding

  return String(yearsCoding)
}
