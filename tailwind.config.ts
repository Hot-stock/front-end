import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import tailwindcssPrimeui from 'tailwindcss-primeui'
export default <Partial<Config>>{
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
		// PrimeVue 컴포넌트들을 위한 경로 추가
		'node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: colors.green,
			},
		},
	},
	plugins: [tailwindcssPrimeui] as any,
}
