// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	runtimeConfig: {
		public: {
			base: '',
			name: '',
			apiBaseUrl: '',
			apiPrefix: '',
			apiVersion: '',
		},
	},
	modules: [
		'@nuxtjs/eslint-module', // 이 모듈 추가
	],
})
