import { addExtensions, litConfig, testingConfig } from 'eslint-config-brightspace';

export default [
	{
		ignores: [
			'karma.conf.js',
			'test'
		]
	},
	...testingConfig,
	...addExtensions(litConfig, ['.js', '.html'])
];
