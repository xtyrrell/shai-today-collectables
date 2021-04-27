export function formatted(date) {
  const dateString = date.toISOString()
  return dateString.slice(0, dateString.indexOf("T"))
}

export function todayFormatted() {
  return formatted(new Date())
}
