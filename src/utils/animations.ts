export const appearanceAnimation = {
	hidden: {
		opacity: 0,
	},
	visible: (custom: number) => ({
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}
