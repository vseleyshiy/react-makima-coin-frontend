class RMC {
	GENERAL = '/'

	ROOT = '/i'
	HOME = `${this.ROOT}/home`
	BOOST = `${this.ROOT}/boost`
	EARN = `${this.ROOT}/earn`
	FRIENDS = `${this.ROOT}/friends`
	AUTH = '/auth'
	REG = '/reg'
	VERIFICATION = this.REG + '/verification'
}

export const RMC_PAGES = new RMC()
