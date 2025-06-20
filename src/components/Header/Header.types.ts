export interface IRow {
	id: string
	label: string
	placeholder: string
	type: 'text' | 'color'
}

export interface IRowProps {
	input: IRow
	defaultValue: string | number | undefined
	onChange?: (e: string) => void
}
