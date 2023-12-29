/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			height: {
				screen: ['100vh', '100svh']
			},
			width: {
				screen: ['100vw', '100svw']
			},
			fontFamily: {
				iceland: '"Iceland", sans-serif',
				iceberg: '"Iceberg", sans-serif',
				appleii: '"Apple II", sans-serif'
			},
			screens: {
				tall: { raw: '(min-height: 600px)' }
			}
		}
	},
	plugins: []
};
