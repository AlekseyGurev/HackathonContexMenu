export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function getRandomColor() {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)

  return `rgb(${red}, ${green}, ${blue})`
}

export function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)]
}

export function convertMsToDays(date) {
  let updateDate = Math.round(date/((1000 * 60 * 60 * 24)))
  return updateDate
}

export function getDayTitle(day) {
    if (day === 0) return 'дней'
    if (day === 1) return 'день'
    if (day > 1 && day <= 4) return 'дня'
    if (day >= 5) return 'дней'
}