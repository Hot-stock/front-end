import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
	{ files: ['**/*.{js,mjs,cjs,ts,vue}'] },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/essential'],
	eslintConfigPrettier, // prettier 통합 설정
	{
		files: ['**/*.vue'],
		languageOptions: { parserOptions: { parser: tseslint.parser } },
	},
	{
		languageOptions: {
			ecmaVersion: 2021,
			globals: {
				...globals.node,
				...globals.browser,
			},
		},
	},
	{
		ignores: ['node_modules', 'dist', 'public', '.nuxt', '.output'], // eslintignore 설정
	},
	{
		rules: {
			'no-console': 'off', // console.log 허용하되 경고
			'no-unused-vars': 'off', // 사용하지 않는 변수 경고
			'no-undef': 'off', // 사용하지 않는 변수 경고
			'@typescript-eslint/no-unused-vars': 'warn', // TypeScript에서 사용하지 않는 변수 경고
			'import/prefer-default-export': 'off', // default export 강제 해제
			'vue/multi-word-component-names': 'off', // Vue 컴포넌트 이름 규칙 해제
			'vue/no-v-html': 'off', // v-html 허용
			'@typescript-eslint/no-explicit-any': 'off', // any 허용유무
			'@typescript-eslint/naming-convention': [
				'error',
				// camelCase 변수, PascalCase 변수, UPPER_CASE 변수 허용
				{
					selector: 'variable',
					format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
				},
				// camelCase 함수, PascalCase 함수 허용
				{
					selector: 'function',
					format: ['camelCase', 'PascalCase'],
				},
				// PascalCase 클래스, interfaces, type aliases, enums 허용
				{
					selector: 'typeLike',
					format: ['PascalCase'],
				},
				// interface 앞에 I 사용 불가
				{
					selector: 'interface',
					format: ['PascalCase'],
					custom: {
						regex: '^I[A-Z]',
						match: false,
					},
				},
				// typeAlias 앞에 T 사용 불가
				{
					selector: 'typeAlias',
					format: ['PascalCase'],
					custom: {
						regex: '^T[A-Z]',
						match: false,
					},
				},
				// typeParameter 앞에 T 사용 불가
				{
					selector: 'typeParameter',
					format: ['PascalCase'],
					custom: {
						regex: '^T[A-Z]',
						match: false,
					},
				},
			],
		},
	},
]
