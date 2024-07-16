/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: { animation: {
			'gradient-x': 'gradient-x 10s ease-in-out infinite',
		  },
		  keyframes: {
			'gradient-x': {
			  '0%': { 'background-size': '300% 100%', 'background-position': '200% center' },
			  '50%': { 'background-size': '300% 100%', 'background-position': '0% center' },
			  '100%': { 'background-size': '300% 100%', 'background-position': '-100% center' },
			},
		  },},
	},
	plugins: [],
}
