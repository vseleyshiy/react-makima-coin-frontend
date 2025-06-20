export function formatAbsenceTime(seconds: number) {
	const minutes = Math.floor(seconds / 60)
	const hours = Math.floor(minutes / 60)
	const remainingMinutes = minutes % 60

	// Если 3 часа или больше
	if (hours >= 3) {
		return 'Вас не было более 3-ёх часов, награда будет присвоена за 3 часа'
	}

	// Форматируем время от 5 минут до 2 часов 59 минут
	const parts = []

	if (hours > 0) {
		parts.push(declension(hours, ['час', 'часа', 'часов']))
	}

	if (remainingMinutes > 0) {
		parts.push(declension(remainingMinutes, ['минуту', 'минуты', 'минут']))
	}

	return `Вас не было ${parts.join(' и ')}`
}

// Функция для склонения слов
function declension(number: number, titles: string[]) {
	const cases = [2, 0, 1, 1, 1, 2]
	return `${number} ${
		titles[
			number % 100 > 4 && number % 100 < 20
				? 2
				: cases[Math.min(number % 10, 5)]
		]
	}`
}

export function formatBonus(num: number) {
	if (num >= 1e6) {
		return (num / 1e6).toFixed(1).replace('.', ',') + 'млн'
	} else if (num >= 1e3) {
		return (num / 1e3).toFixed(1).replace('.', ',') + 'к'
	} else if (num >= 1) {
		return Math.floor(num).toString()
	} else {
		return num.toString()
	}
}

export const formatCode = (value: string) => {
	let formattedValue = value.replace(/\D/g, '')

	if (formattedValue.length > 3) {
		formattedValue =
			formattedValue.slice(0, 3) + ' ' + formattedValue.slice(3, 6)
	}

	if (formattedValue.length > 7) {
		formattedValue = formattedValue.slice(0, 7)
	}

	return formattedValue
}

export function formattingTime(seconds: number) {
	const hours = Math.floor(seconds / 3600)
	const minutes = Math.floor((seconds % 3600) / 60)
	const secs = seconds % 60

	const formattedHours = String(hours).padStart(2, '0')
	const formattedMinutes = String(minutes).padStart(2, '0')
	const formattedSeconds = String(secs).padStart(2, '0')

	return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}
