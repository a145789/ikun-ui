export const rateShortcuts: Record<string, string> = {
	// rate
	'k-rate': 'fsc',

	// disabled
	'k-rate--disabled': 'op60 k-cur-disabled',

	// readonly
	'k-rate--readonly': 'cursor-auto',

	// item
	'k-rate--item': 'infcc',
	'k-rate--item__not-readonly': 'cursor-pointer',
	'k-rate--item__disabled': 'k-cur-disabled',

	// text
	'k-rate--text': 'ml-6px text-10px line-height-none',

	// fixed https://github.com/ikun-svelte/ikun-ui/issues/250
	// default icons
	'k-rate--void-icon': 'i-carbon-star',
	'k-rate--active-icon': 'i-carbon-star-filled',
	'k-rate--readonly-icon': 'i-carbon-star-filled'
};
