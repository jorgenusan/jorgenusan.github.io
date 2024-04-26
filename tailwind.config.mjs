/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
				  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			  },
			  colors: {
				'custom-blue': '#747fff',
				'custom-black': '#1d232a',
			  },
		},
	},
	plugins: [require("daisyui"), require("@tailwindcss/typography")],
	daisyui: {
		themes: ["dracula", "light", "cupcake"],
	},
}
