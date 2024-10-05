// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from '@primevue/themes/aura'
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
		'@nuxtjs/eslint-module',
		'@nuxtjs/tailwindcss',
		'@primevue/nuxt-module',
	],
	tailwindcss: {
		cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
		configPath: 'tailwind.config',
		exposeConfig: {
			level: 2,
		},
		config: {},
		viewer: true,
	},
	primevue: {
		/* Configuration */
		options: {
			// unstyled: true,
			// usePrimeVue: true,
			theme: {
				preset: Aura,
			},
		},
	},
})
