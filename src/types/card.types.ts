export interface ICard {
	userCardId: number
	cardId: number
	name: string
	description: string
	lvl: number
	profit: number
	allProfit: number
	price: number
	img: string
	updating: null | string
	refsFor: null | number
}

export interface IAddUserCard {
	card_id: number | undefined
	profit: number | undefined
	price: number | undefined
}

export interface IUpdateUserCard {
	user_card_id: number | undefined
	profit: number | undefined
	price: number | undefined
}

export type TypeChangeUpdatingDate = { array: string[] }

export interface ITime {
	time: string
	deg: number
}
