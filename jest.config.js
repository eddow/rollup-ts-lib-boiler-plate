export default {
	preset: 'ts-jest',
	extensionsToTreatAsEsm: ['.ts'],
	transform: {
		'^.+\\.tsx?$': ['ts-jest', { useESM: true }],
	},
    transformIgnorePatterns: [
		'^.+\\.js$',
	],
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1',
	},
	testEnvironment: 'node',
};
