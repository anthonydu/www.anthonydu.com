/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				iceland: '"Iceland", sans-serif',
				iceberg: '"Iceberg", sans-serif'
			}
		}
	},
	plugins: []
};
