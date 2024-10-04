interface ImportMetaEnv {
	VITE_API_BASE_URL: string
	VITE_API_PREFIX: string
	VITE_API_VERSION: string
	VITE_ENABLE_LOGS: boolean
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
