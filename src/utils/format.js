const getOrdinal = number =>
  number > 0
    ? ['th', 'st', 'nd', 'rd'][
        (number > 3 && number < 21) || number % 10 > 3 ? 0 : number % 10
      ]
    : undefined

export const formatDate = date => {
  const day = date.getDate()
  const ordinal = getOrdinal(day)
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()

  return `${month} ${day}${ordinal}, ${year}`
}
