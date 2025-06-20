export interface IUserStatus {
	status: string
	message?: string
	data: {
		id: number
		username: string
		role_lvl: number
		balance: number
		multitap_lvl: number
		max_energy_lvl: number
		hour_profit: number
		ref: number
	}
	accessToken: string
}

export interface IUserStatusJs
	extends Omit<
		IUserStatus['data'],
		'role_lvl' | 'multitap_lvl' | 'max_energy_lvl' | 'hour_profit'
	> {
	role: string
	forUp: number
	roleLvl: number
	click: number
	energy: number
	hourProfit: number
	friendsCount: number
}

export type TypeUserUpdate = Partial<Omit<IUserStatusJs, 'id'>>

export interface IUserRating {
	id: number
	username: string
	role: string
	balance: number
	hourProfit: number
}

export interface IUserRoleLvl {
	roleLvl: number
	ref: number | null
}

export interface IResponse {
	status: string
	message: string
}
