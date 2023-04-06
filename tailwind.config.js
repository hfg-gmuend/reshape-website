/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'reshape-mauve': '#ACACFF',
				'reshape-lila': '#B468FF',
				'reshape-blau': '#3636FF',
				'reshape-gruen': '#8CCE00'
			}
		}
	},
	plugins: []
};
